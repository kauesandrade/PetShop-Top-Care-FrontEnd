const convertDateFrontToBack = (frontDate: string): string => {
  if (frontDate.length <= 5) {
    return convertMonthYear(frontDate);
  } else {
    return convertFullDate(frontDate);
  }
};

const convertFullDate = (frontDate: string) => {
  let [day, month, year] = ['01', '01', '01'];
  if (frontDate.includes('/')) {
    [day, month, year] = frontDate.split('/');
  } else {
    day = frontDate.slice(0, 2);
    month = frontDate.slice(2, 4);
    year = frontDate.slice(4, 8);
  }
  return `${year}-${month}-${day}`;
};

const convertMonthYear = (frontDate: string) => {
  let [month, year] = ['01', '01'];
  if (frontDate.includes('/')) {
    [month, year] = frontDate.split('/');
  } else {
    month = frontDate.slice(0, 2);
    year = frontDate.slice(2, 4);
  }

  return `20${year}-${month}-01`;
};

export default convertDateFrontToBack;
