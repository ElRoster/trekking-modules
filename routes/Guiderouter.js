import {Router} from 'express'

import {
    getGuide,
    ListOneGuide,
    postGuide,
    putGuide,
    deleteGuide
} from '../controllers/GuideController.js'

const router = Router()

router.get('/guide/', getGuide)
router.get('/guide/:Id/list', ListOneGuide)
router.post('/guide/', postGuide)
router.put('/guide/:Id', putGuide)
router.delete('/guide/:Id', deleteGuide)

export default router;