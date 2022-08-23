import mongoose, { Mongoose } from 'mongoose'

export const MailingListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, { timestamps: true })

export const MailingList = mongoose.models.mailing_list || mongoose.model('mailing_list', MailingListSchema)
