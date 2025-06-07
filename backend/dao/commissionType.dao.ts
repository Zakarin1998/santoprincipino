import { CommissionTypeModel } from '../models/CommissionType'
import { CommissionType } from '../types'

export class CommissionTypeDao {
  static async getAll(): Promise<CommissionType[]> {
    return CommissionTypeModel.find().lean()
  }
  static async getById(id: string): Promise<CommissionType | null> {
    return CommissionTypeModel.findById(id).lean()
  }
}