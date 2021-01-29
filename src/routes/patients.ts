/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { getPublicViewPatients, addPatient, getOnePublicViewPatient } from '../services/patientService';
import { createNewPatient } from '../typeChecking';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getPublicViewPatients());
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send(getOnePublicViewPatient(id));
});

router.post('/', (req, res) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const newPatient = createNewPatient(req.body);
    const addedPatient = addPatient(newPatient);
    res.json(addedPatient);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }
  
});

export default router;