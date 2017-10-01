// Return a new date by adding numDays to oldDate (if numDays is negative we are getting past dates)
export function addNumDays(oldDate, numDays) {
  // There are 86400000 miliseconds in a day
  return new Date(oldDate.getTime() + (numDays * 86400000));
}

export function addNumMonths(oldDate, numMonths) {
  // Create new date to return
  const newDate = new Date(oldDate);
  const d = newDate.getDate();
  // Let JS sdd number of months
  newDate.setMonth(newDate.getMonth() + numMonths);
  // If day number is different go to last day of previous month
  if (newDate.getDate() !== d) {
    newDate.setDate(0);
  }
  return newDate;
}
