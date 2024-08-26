import {uploadOnCloudinary, deleteFromCloudinary} from "../utils/cloudinary.js"
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

    //console.log(req.files?.videoFile[0].path);
    
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

    return res.status(201).json(new ApiResponse(201, {video: newVideo}))


})

export {uploadVideo}