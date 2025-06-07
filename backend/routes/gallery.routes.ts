import { Router } from 'express'
import { GalleryDao } from '../dao/gallery.dao'

const router = Router()
router.get('/', async (req, res) => { res.json(await GalleryDao.getAll()) })
router.get('/:id', async (req, res) => {
  const item = await GalleryDao.getById(req.params.id)
  if (!item) return res.status(404).json({ message: 'Not found' })
  res.json(item)
})
export default router