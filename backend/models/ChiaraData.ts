import { Schema, model, Document, Types } from 'mongoose'
import { ChiaraData } from '../types'

interface ChiaraDataDoc extends ChiaraData, Document {}

const SocialLinksSchema = new Schema({ instagram: String, twitter: String, discord: String })
const ProfileSchema = new Schema({ name: String, title: String, tagline: String, bio: String, bioDetails: [String], avatarImage: String, subtitle: String, socialLinks: SocialLinksSchema })

const ChiaraDataSchema = new Schema<ChiaraDataDoc>({
  profile: ProfileSchema,
  gallery: [{ type: Types.ObjectId, ref: 'GalleryItem' }],
  commissions: [{ type: Types.ObjectId, ref: 'CommissionType' }],
  testimonials: [new Schema({ name: String, avatar: String, comment: String, rating: Number })]
}, { timestamps: true })

export const ChiaraDataModel = model<ChiaraDataDoc>('ChiaraData', ChiaraDataSchema)