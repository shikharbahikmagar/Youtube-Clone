import {uploadOnCloudinary, deleteFromCloudinary} from "../utils/cloudinary.js"
import {Video} from "../models/video.model.js"
import {User} from "../models/user.model.js"
import mongoose from "mongoose"
import { ApiError } from "../utils/ApiError.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const uploadVideo = asyncHandler ( async(req, res) => {

    const {title, description, isPublished} = req.body
    const user = req.user
    console.log(user);
    
    if(!title || !description){

        return new ApiError(400, "Title and description are required")

    }

    const VideoLocalPath = req.file?.path

    if(!VideoFile){
        return new ApiError(400, "Video file is required")
    }

    const thumbnail = req.file?.path

    const duration = 0
    //upload video to cloudinary
    const video = await uploadOnCloudinary(VideoLocalPath)
    console.log(video);
    

    const newVideo = new Video({

        videoFile: VideoFile,
        thumbnail: thumbnail,
        title: title,
        description: description,
        duration: duration,
        owner: user._id,
        isPublished: isPublished
        
    })



})

export {uploadVideo}