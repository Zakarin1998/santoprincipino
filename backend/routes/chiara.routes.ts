import { Router } from 'express'
import { getChiaraData } from '../controllers/chiara.controller'
const router = Router()
router.get('/', getChiaraData)
export default router
