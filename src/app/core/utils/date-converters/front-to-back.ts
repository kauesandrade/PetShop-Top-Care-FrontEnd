const convertDateFrontToBack = (frontDate: string): string => {
  let [day, month, year] = frontDate.split('/');
  return `${year}-${month}-${day}`;
};

export default convertDateFrontToBack;
