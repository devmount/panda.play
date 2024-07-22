export const timeFormatToSeconds = (formattedString) => {
  const [m, s] = formattedString.split(':');
  return (60 * Number(m)) + Number(s);
};

export const secondsToTimeFormat = (seconds) => {
 	const hours = Math.floor(seconds / 3600);
 	seconds %= 3600;
 	const minutes = Math.floor(seconds / 60);
 	seconds = seconds % 60;
 	return hours + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0')
};

// return human readable date in German
export const humanDate = (t) => {
 	var event = new Date(t);
 	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 	return event.toLocaleDateString('de-DE', options) + ' um ' + event.toLocaleTimeString('de-DE').slice(0, 5) + ' Uhr';
};

export default {
  timeFormatToSeconds,
  secondsToTimeFormat,
  humanDate,
};
