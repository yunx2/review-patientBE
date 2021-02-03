import patients from '../../data/patientData';
import { PublicViewPatient, NewPatientData, Patient } from '../types';

// function is given a NewPatientData type object, assigns an id, then returns an objecct of ttype Patient 

export const addPatient = (data: NewPatientData): Patient => {
  const newPatient = {
    id: JSON.stringify(patients.length + 1),
    ...data,
    entries: []
  };
  patients.push(newPatient);
  return newPatient;
};

export const getOnePublicViewPatient = (id: string): Patient | undefined => {// type is Patient | undefined because it is possible that no patient exists with this particular id
  return patients.find(patient => patient.id === id);
};

export const getPublicViewPatients = (): PublicViewPatient[] => {
  // copy over all fields except ssn, return in array
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id, // this is not the patient's ssn
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

