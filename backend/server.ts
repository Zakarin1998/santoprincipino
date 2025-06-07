import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/database'
import chiaraRoutes from './routes/chiara.routes'
import fairyRoutes from './routes/fairy.routes'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

connectDB()

app.use('/api/chiara', chiaraRoutes)
app.use('/api/fairies', fairyRoutes)
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

const PORT = process.env.PORT || 3030
app.listen(PORT, () => console.log(`Server up: http://localhost:${PORT}`))