import { addDays } from 'date-fns';

const convertDateBackToFront = (backDate: string): string => {
  let frontDate = new Date(backDate);
  return addDays(frontDate, 1).toLocaleDateString();
};

export default convertDateBackToFront;
