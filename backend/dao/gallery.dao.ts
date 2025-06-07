import { GalleryItemModel } from '../models/GalleryItem'
import { GalleryItem } from '../types'

export class GalleryDao {
  static async getAll(): Promise<GalleryItem[]> {
    return GalleryItemModel.find().lean()
  }
  static async getById(id: string): Promise<GalleryItem | null> {
    return GalleryItemModel.findById(id).lean()
  }
}