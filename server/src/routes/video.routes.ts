import { Router } from 'express'
const router = Router()

import * as videosCtrl from '../controllers/video.controller'

router.get('/', videosCtrl.getVideos)
router.post('/', videosCtrl.createVideo)

router.get('/:id', videosCtrl.incrementViews, videosCtrl.getVideo)
router.put('/:id', videosCtrl.updateVideo)
router.delete('/:id', videosCtrl.deleteVideo)

export default router

