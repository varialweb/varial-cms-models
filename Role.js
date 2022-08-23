import mongoose from 'mongoose'

export const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  permissions: { // what content this role has permission to access
    view: {
      contentManager: Boolean,
      marketingEmails: Boolean,
      mediaLibrary: Boolean,
      roles: Boolean,
      settings: Boolean,
      users: Boolean,
    },
    create: {
      contentModels: Boolean,
      marketingEmails: Boolean,
      media: Boolean,
      roles: Boolean,
      users: Boolean,
    },
    edit: {
      contentModels: Boolean,
      marketingEmails: Boolean,
      media: Boolean,
      roles: Boolean,
      settings: Boolean,
      users: Boolean,
    },
    send: {
      marketingEmails: Boolean,
    },
    delete: {
      contentModels: Boolean,
      marketingEmails: Boolean,
      media: Boolean,
      roles: Boolean,
      users: Boolean,
    },
    editBy: [{ // what roles can edit this role
      type: mongoose.Schema.Types.ObjectId,
      ref: 'role',
    }],
    editBySelf: Boolean,
  },
}, { timestamps: true })

export const Role = mongoose.models.role || mongoose.model('role', RoleSchema)
