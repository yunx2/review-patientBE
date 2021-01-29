/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-explicit-any */
// these functions check if the request body data is of the correct type (according to what is defined in types.ts) and then tells typescript compiler what the type is. without this typescript would consider all data from request object to be of type 'any'
import { NewPatientData, Gender } from './types';

// type guards

const isString = (text: any): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};


// parsers - parse fields of request body 

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name: ' + name);
  }
  return name;
};

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !Date.parse(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const isSSN = (text: string): boolean => {
  return text.length >= 10 && text.includes("-");
};

const parseSSN = (text: any): string => {
  if (!text || !isString(text) || !isSSN(text)) {
    throw new Error('Incorrect or missing ssn: ' + text);
  }
  return text;
};

const parseOccupation = (text: any): string => {
  if (!text || !isString(text)) {
    throw new Error('Incorrect or missing occupation: ' + text);
  }
  return text;
};


const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};
// this function accepts the request body data and returns an object of type NewPatientData if all the fields parse correctly

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createNewPatient = (reqBody: any): NewPatientData => {
  return {
    name: parseName(reqBody.name),
    dateOfBirth: parseDate(reqBody.dateOfBirth),
    ssn: parseSSN(reqBody.ssn),
    gender: parseGender(reqBody.gender),
    occupation: parseOccupation(reqBody.occupation),
    entries: []
  };
};