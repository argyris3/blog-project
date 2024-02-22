import express from 'express';
import { google, signup } from '../controllers/auth.controller.js';
import { signin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/sign-up', signup);
router.post('/sign-in', signin);
router.post('/google', google);

export default router;
