import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Video } from "../models/video.model.js";
import { Comment } from "../models/comment.model.js";
import mongoose from "mongoose";


const createComment = asyncHandler( async(req, res) => {
    

    const user = req.user
    //const video_id =  req.params.id;
    const {comment, video_id, parent_comment_id} = req.body

    if(!user)
    {

        return new ApiError("401", "Please Login to Comment");
    }

   // console.log(video_id);
    

    const video = await Video.findById(video_id)

    if(!video)
    {
        return new ApiError("404", "video not found")
    }

    if(!comment)
    {
        return new ApiError("400", "comment can not be empty")
    }

    const newComment = new Comment({
        user: user?.id,
        video: video_id,
        comment: comment,
        parent_comment_id: parent_comment_id || null
    })

    await newComment.save();

    return res.status(201).json(new ApiResponse("201", "comment created successfully", {comment: newComment}))

   
})


const getComments = asyncHandler(async(req, res) => {

    const video_id = req.params.id || req.body.video_id;

    // console.log(video_id);
    
    if(!video_id)
    {
        return new ApiError("404", "video not found")
    }

    //console.log('Received video_id:', video_id);
    
    // Trim any leading/trailing spaces
    const trimmedVideoId = video_id.trim();
    
    // Check if the video_id is a valid ObjectId
    // if (!mongoose.Types.ObjectId.isValid(trimmedVideoId)) {
    //   return res.status(400).json({ message: 'Invalid video ID format' });
    // }
    
    const vid = new mongoose.Types.ObjectId(trimmedVideoId);
   // console.log(vid); 

    const comments = await Comment.find({video: vid})

    if(!comments)
    {
        return new ApiError("404", "no comments")
    }

    return res.status(200).json(new ApiResponse('200', "comments fetched successfully", {comments: comments}))
})


export {
    createComment,
    getComments
}