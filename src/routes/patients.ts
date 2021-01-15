import express from 'express';
import { getPublicViewPatients } from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getPublicViewPatients());
});

export default router;