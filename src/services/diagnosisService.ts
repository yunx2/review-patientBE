import diagnosesData from '../../data/diagnoses';
import { Diagnosis } from '../types';

export const getDiagnoses = (): Array<Diagnosis> => {
  return diagnosesData;
};

// export default {
//   getDiagnoses
// };