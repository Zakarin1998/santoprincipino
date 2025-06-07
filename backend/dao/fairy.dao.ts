import { FairyModel } from '../models/Fairy'
import { Fairy } from '../types'

export class FairyDao {
  static async getAll(): Promise<Fairy[]> {
    return FairyModel.find().lean()
  }
  static async getById(id: number): Promise<Fairy | null> {
    return FairyModel.findOne({ id }).lean()
  }
}