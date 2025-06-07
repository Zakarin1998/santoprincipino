import { Schema, model, Document } from 'mongoose'
import { CommissionType } from '../types'

export interface CommissionTypeDoc extends CommissionType, Document {}

const CommissionTypeSchema = new Schema<CommissionTypeDoc>({
  type: { type: String, required: true },
  price: { type: String, required: true },
  description: String,
}, { timestamps: true })

export const CommissionTypeModel = model<CommissionTypeDoc>('CommissionType', CommissionTypeSchema)