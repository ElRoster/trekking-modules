import { Router } from 'express';

import {
    getDestination,
    getOneDestination,
    postDestination,
    putDestination,
    deleteDestination
} from '../controllers/DestinationController.js';

const router = Router();

router.get('/des/', getDestination);
router.get('/des/:Id', getOneDestination)
router.post('/des/', postDestination);
router.put('/des/:Id', putDestination);
router.delete('/des/:Id', deleteDestination);

export default router;
