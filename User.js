import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'role',
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  avatar: String,
}, { timestamps: true })

export const User = mongoose.models.user || mongoose.model('user', UserSchema)
