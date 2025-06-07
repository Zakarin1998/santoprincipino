import { ChiaraDataModel } from '../models/ChiaraData'
import { ChiaraData } from '../types'

export class ChiaraDao {
  static async getAll() {
    return ChiaraDataModel.findOne()
      .populate('gallery')
      .populate('commissions')
      .lean()
  }
}
