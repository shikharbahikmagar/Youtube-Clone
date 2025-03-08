import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Subscription } from "../models/subscription.model.js";
import mongoose from "mongoose";
import { User } from "../models/user.model.js";

const createSubscription = asyncHandler(async (req, res) => {

    const user = req.user;
    const channelId = req.params.channelId;

    if(!user)
    {
        throw new ApiError(401, "Unauthorized Request")
    }

    if(!channelId)
    {
        throw new ApiError(400, "Invalid Request")
    }

    const checkALreadySubscribed = await Subscription.findOne({subscriber: user?._id, channel: channelId})
    if(checkALreadySubscribed)
    {
        throw new ApiError(400, "Already Subscribed")
    }

    // const channelId = req.body;
    const subscription = new Subscription({
        subscriber: user?._id,
        channel: channelId
    })

    await subscription.save();

    return res.status(201).json(new ApiResponse("201", "Subscribed", {comment: subscription}))

    console.log(user);
    
    console.log(channelId);

    return 0;

})

export { createSubscription }