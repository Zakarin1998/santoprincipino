import { Request, Response } from 'express'
import { FairyDao } from '../dao/fairy.dao'

export const getAllFairies = async (_: Request, res: Response) => {
  const fairies = await FairyDao.getAll()
  res.json(fairies)
}

export const getFairyById = async (req: Request, res: Response) => {
  const fairy = await FairyDao.getById(+req.params.id)
  if (!fairy) return res.status(404).json({ message: 'Fairy not found' })
  res.json(fairy)
}