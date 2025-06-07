import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const MONGO_URI = process.env.MONGO_URI!

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, { autoIndex: true })
    console.log('✅ MongoDB connesso a', conn.connection.host)
    return conn
  } catch (error) {
    console.error('❌ Errore di connessione:', error)
    process.exit(1)
  }
}