// Return a new date by adding numDays to oldDate (if numDays is negative we are getting past dates)
export function addNumDays(oldDate, numDays) {
	//	There are 86400000 miliseconds in a day
	return new Date( oldDate.getTime() + numDays * 86400000 );
}