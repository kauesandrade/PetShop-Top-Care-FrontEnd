const convertDateFrontToBack = (frontDate: string): string => {
  if (frontDate.length < 10) {
    return convertMonthYear(frontDate);
  } else {
    return convertFullDate(frontDate);
  }
};

const convertFullDate = (frontDate: string) => {
  let [day, month, year] = frontDate.split('/');
  return `${year}-${month}-${day}`;
};

const convertMonthYear = (frontDate: string) => {
  let [month, year] = frontDate.split('/');
  return `20${year}-${month}-01`;
};

export default convertDateFrontToBack;