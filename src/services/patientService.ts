import patientData from '../../data/patients';
import { PublicViewPatient } from '../types';

export const getPublicViewPatients = (): PublicViewPatient[] => {
  // copy over all fields excect ssn, return in array
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, // this is not the patient's ssn
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

