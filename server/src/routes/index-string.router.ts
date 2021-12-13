import { Router } from 'express';
import { indexString } from '../controllers';

const router = Router();

router.get('/strings', indexString);

export { router as indexStringRouter };
