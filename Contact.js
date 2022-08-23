import mongoose, { Mongoose } from 'mongoose'

const ContactSchema = new Mongoose.Schema({
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
