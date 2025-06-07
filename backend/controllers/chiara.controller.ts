import { Request, Response } from 'express'
import { ChiaraDao } from '../dao/chiara.dao'

export const getChiaraData = async (_: Request, res: Response) => {
  const data = await ChiaraDao.getAll()
  if (!data) return res.status(404).json({ message: 'No data' })
  res.json(data)
}