import mongoose from 'mongoose'

const ContentSchema = new mongoose.Schema({
  contentModel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'content_model',
    required: true,
  },
  fields: {
    type: Map,
    required: true,
  },
  published: {
    type: Boolean,
    required: true,
  }
}, { timestamps: true })

export const Content = mongoose.models.content || mongoose.model('content', ContentSchema)
