import {uploadOnCloudinary, deleteVideoFromCloudinary} from "../utils/cloudinary.js"
import {Video} from "../models/video.model.js"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const uploadVideo = asyncHandler ( async(req, res) => {

    const {title, description, isPublished} = req.body
    const user = req.user
    //console.log(user);
    if(!user){
        return new ApiError(401, "user not found!")
    }

    if(!title || !description){

        return new ApiError(400, "Title and description are required")

    }

    console.log(req.files?.videoFile[0].path);
    console.log(req.files?.thumbnail[0].path);
    
    
    const VideoLocalPath = req.files?.videoFile[0].path
    const ThumbnailLocalPath = req.files?.thumbnail[0].path
    //console.log(VideoLocalPath);
    

    if(!VideoLocalPath){
        return new ApiError(400, "Video file is required")
    }

    if(!ThumbnailLocalPath){
                   
        return new ApiError(400, "Thumbnail is required")
    }

    const duration = 0
    //upload video to cloudinary

    const video = await uploadOnCloudinary(VideoLocalPath)
    const thumbnail = await uploadOnCloudinary(ThumbnailLocalPath)
    
    //console.log(video);
    

    const newVideo = new Video({

        videoFile: video?.url,
        thumbnail: thumbnail?.url,
        title: title,
        description: description,
        duration: video?.duration,
        owner: user._id,
        isPublished: isPublished
        
    })

    await newVideo.save()

    return res.status(201).json(new ApiResponse(201, "video uploaded successfully", {video: newVideo}))


})

//get video by id
const getVideo = asyncHandler(async(req, res) => {
        
    const videoId = req.params.id

    const video = await Video.findById(videoId)

    if(!video)
    {
        new ApiError(404, "Video not found")
    }

    return res.status(200).json(new ApiResponse(200, "video fetched successfully", {video: video}))


})

//delete video by id
const deleteVideo = asyncHandler(async(req, res) => {
        
    try {
        //user from middleware
        const user = req.user
        console.log(user._id.toString());
        
    
        if(!user){
            return new ApiError(401, "please login to remove video")
        }

        const userId = req.user?._id.toString()
        
        //video id from params
        const videoId = req.params.id
        //console.log(videoId);
        
    
        const video = await Video.findById(videoId)
        console.log(video);
        const ownerId = video?._owner.toString()
        console.log(ownerId);
        
        
        //check if user is authorized to remove video
        if(userId !== ownerId){
            return new ApiError(401, "you are not authorized to remove this video")
        }
    
    
        if(!videoId){
            return new ApiError(400, "no video found")
        }
    
        //remove video from db
        const response = await Video.findByIdAndDelete(videoId)
    
        if(!response){
            return new ApiError(404, "video not found")
        }
    
        //delete video from cloudinary
    
        //extract public id from video url
        const oldVideoPath = video?.videoFile
    
        const extractPublicIdFromUrl = (url) => {
            const regex = /\/upload\/(?:v\d+\/)?([^\/\.]+)/;
            const match = url.match(regex);
            return match ? match[1] : null;
          };
    
        const publicId = extractPublicIdFromUrl(oldVideoPath)
        console.log(publicId);
        //calling deleteVideoFromCludinary to remove video from cloudinary
        const removeFromCloudinary = await deleteVideoFromCloudinary(publicId)
        console.log(removeFromCloudinary);
        
    
        if(!removeFromCloudinary){
            
            return new ApiError(500, "error removing video")
        }
        
        return res.status(200).json(new ApiResponse(200, "video removed successfully"))
    
    } catch (error) {
        return new ApiError(500, "error removing video")
        
    }

    })

export {
    uploadVideo,
    getVideo,
    deleteVideo
}