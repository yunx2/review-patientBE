import patientData from '../../data/patients';
import { PublicViewPatient, NewPatientData, Patient } from '../types';

// function is given a NewPatientData type object, assigns an id, then returns an objecct of ttype Patient 

export const addPatient = (data: NewPatientData): Patient => {
  const newPatient = {
    id: JSON.stringify(patientData.length + 1),
    ...data
  };
  patientData.push(newPatient);
  return newPatient;
};

export const getOnePublicViewPatient = (id: string): PublicViewPatient => patientData.find(patient => patient.id === id);

export const getPublicViewPatients = (): PublicViewPatient[] => {
  // copy over all fields except ssn, return in array
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, // this is not the patient's ssn
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

