import mongoose from 'mongoose'

export const SettingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Map,
  }
}, { timestamps: true })

export const Setting = mongoose.models.setting || mongoose.model('setting', SettingSchema)
