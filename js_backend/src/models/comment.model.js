import mongoose, {Schema} from 'mongoose';

const CommentSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    video: {
        type: Schema.Types.ObjectId,
        ref: "Video",
    },
    comment: {
        type: String,
        required: true,
    },
    parent_comment_id: {
        type: Schema.Types.ObjectId,
        ref: "Comment",
        default: null,
    },
    like_count: {
        type: Number,
        default: 0,
    },
    dislike_count: {
        type: Number,
        default: 0,
    }, 
    status: {
        type: String,
        enum: ['approved', 'flagged'],
        default: 'approved',
    }

}, {timestamps: true});

export const Comment = mongoose.model('Comment', CommentSchema)