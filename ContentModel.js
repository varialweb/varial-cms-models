import mongoose from 'mongoose'

const ContentModelSchema = new mongoose.Schema({
  name: {
    value: String,
    singular: String,
    plural: String,
  },
  order: {
    type: Number,
    required: true,
  },
  fields: {
    type: [],
    required: true,
  },
  permissions: {
    view: {
      public: Boolean,
      roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'role' }],
    },
    create: {
      public: Boolean,
      roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'role' }],
    },
    edit: {
      public: Boolean,
      roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'role' }],
    },
    delete: {
      public: Boolean,
      roles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'role' }],
    },
  },
}, { timestamps: true })

export const ContentModel = mongoose.models.content_model || mongoose.model('content_model', ContentModelSchema)
