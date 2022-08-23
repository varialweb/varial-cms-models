import mongoose, { Mongoose } from 'mongoose'

const MailingListSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, { timestamps: true })

export const MailingList = mongoose.models.mailing_list || mongoose.model('mailing_list', MailingListSchema)
