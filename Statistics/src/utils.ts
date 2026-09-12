export const convertDateStringToDate = (dateString: string): Date => {
  // Assuming the date string is in the format "DD/MM/YYYY"
  // const dateParts = dateString.split('/').map(part => parseInt(part));
  // return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

  // Optimized version using destructuring
  const [ day, month, year ] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};