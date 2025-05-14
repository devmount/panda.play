export const timeFormatToSeconds = (formattedString) => {
  const [m, s] = formattedString.split(':');
  return (60 * Number(m)) + Number(s);
};

export const secondsToTimeFormat = (seconds) => {
 	const hours = Math.floor(seconds / 3600);
 	seconds %= 3600;
 	const minutes = Math.floor(seconds / 60);
 	seconds = seconds % 60;
	const prefix = hours ? hours + ':' : '';
 	return prefix + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
};

// return human readable date in German
export const humanDate = (t) => {
 	var event = new Date(t);
 	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 	return event.toLocaleDateString('de-DE', options) + ' um ' + event.toLocaleTimeString('de-DE').slice(0, 5) + ' Uhr';
};

// Calculate difference of two dates in years
export const diffYears = (dt2, dt1) => {
  // Calculate the difference in milliseconds between the two dates
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  // Convert the difference from milliseconds to days
  diff /= (60 * 60 * 24);
  // Calculate the approximate number of years by dividing the difference in days by the average number of days in a year (365.25)
  return Math.abs(diff / 365.25);
}

export default {
  timeFormatToSeconds,
  secondsToTimeFormat,
  humanDate,
	diffYears,
};
