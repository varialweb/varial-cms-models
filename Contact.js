import mongoose, { Mongoose } from 'mongoose'

export const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mailingLists: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'mailing_list',}],
    required: true,
  }
}, { timestamps: true })

export const Contact = mongoose.models.contact || mongoose.model('contact', ContactSchema)
