import mongoose from "mongoose"

import { ContactSchema } from "./Contact"
import { ContentSchema } from "./Content"
import { ContentModelSchema } from "./ContentModel"
import { MailingListSchema } from "./MailingList"
import { RoleSchema } from "./Role"
import { SettingSchema } from './Setting'
import { UserSchema } from "./User"

export const Contact = mongoose.models.contact || mongoose.model('contact', ContactSchema)
export const Content = mongoose.models.content || mongoose.model('content', ContentSchema)
export const ContentModel = mongoose.models.content_model || mongoose.model('content_model', ContentModelSchema)
export const MailingList = mongoose.models.mailing_list || mongoose.model('mailing_list', MailingListSchema)
export const Role = mongoose.models.role || mongoose.model('role', RoleSchema)
export const Setting = mongoose.models.setting || mongoose.model('setting', SettingSchema)
export const User = mongoose.models.user || mongoose.model('user', UserSchema)
