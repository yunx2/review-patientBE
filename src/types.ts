export interface Entry {

}

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
}

export type PublicViewPatient = Omit<Patient, 'ssn' | 'entries'>;
export type NewPatientData = Omit<Patient, 'id'>;

export enum Gender {
  Female = 'female',
  Male = 'male'
}