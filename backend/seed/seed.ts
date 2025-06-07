import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { connectDB } from '../config/database'
import { ChiaraDataModel } from '../models/ChiaraData'
import { FairyModel } from '../models/Fairy'
import chiaraData from './data/chiara.json'
import fairies from './data/fairies.json'

dotenv.config()

const run = async () => {
  await connectDB()
  await ChiaraDataModel.deleteMany({})
  await FairyModel.deleteMany({})
  await ChiaraDataModel.create(chiaraData)
  await FairyModel.insertMany(fairies)
  console.log('✅ Seed completato')
  process.exit(0)
}

run()