import { Schema, model } from 'mongoose'
import { Fairy } from '../types'

const FairySchema = new Schema<Fairy>({ id: Number, title: String, image: String, description: String, details: String, powers: [String], category: String })
export const FairyModel = model<Fairy>('Fairy', FairySchema)