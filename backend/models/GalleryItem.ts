import { Schema, model, Document, Types } from 'mongoose'
import { GalleryItem } from '../types'

export interface GalleryItemDoc extends GalleryItem, Document {}

const GalleryItemSchema = new Schema<GalleryItemDoc>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: String,
  category: String,
}, { timestamps: true })

export const GalleryItemModel = model<GalleryItemDoc>('GalleryItem', GalleryItemSchema)