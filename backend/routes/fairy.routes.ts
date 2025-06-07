import { Router } from 'express'
import { getAllFairies, getFairyById } from '../controllers/fairy.controller'
const router = Router()
router.get('/', getAllFairies)
router.get('/:id', getFairyById)
export default router