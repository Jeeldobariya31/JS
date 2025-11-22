// 09_dates_and_times.js

// In JavaScript, dates and times are handled using the built-in Date object.
// This code demonstrates how to create, manipulate, and format dates and times.
// Creating a Date object for the current date and time
const now = new Date();
console.log("Current date and time:", now);

// Creating a Date object for a specific date and time
const specificDate = new Date('2023-01-01T12:00:00');
console.log("Specific date and time:", specificDate);

// Getting individual components of a date
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are zero-indexed
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();
console.log("--------------- querying individual components of a date ---------------");
console.log("year (YYYY)(getFullYear) = ", year);
console.log("month (MM)(getMonth + 1)(months are zero-indexed) = ", month, "day (DD)(getDate) = ", day, "hours (HH)(getHours) = ", hours, "minutes (MM)(getMinutes) = ", minutes, "seconds (SS)(getSeconds) = ", seconds, "milliseconds (SSS)(getMilliseconds) = ", milliseconds);
console.log("day (DD)(getDate) = ", day);
console.log("hours (HH)(getHours) = ", hours);
console.log("minutes (MM)(getMinutes) = ", minutes);
console.log("seconds (SS)(getSeconds) = ", seconds);
console.log("milliseconds (SSS)(getMilliseconds) = ", milliseconds);

// Setting individual components of a date
now.setFullYear(year, "month =", month, "day =", day, "hours =", hours, "minutes =", minutes, "seconds =", seconds, "milliseconds =", milliseconds);

// Manipulating dates and times
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log("Tomorrow's date:", tomorrow);

const nextMonth = new Date(now);
nextMonth.setMonth(now.getMonth() + 1);
console.log("Date next month:", nextMonth);

const nextYear = new Date(now);
nextYear.setFullYear(now.getFullYear() + 1);
console.log("Date next year:", nextYear);

const oneHourLater = new Date(now);
oneHourLater.setHours(now.getHours() + 1);
console.log("One hour later:", oneHourLater);

const oneMinuteLater = new Date(now);
oneMinuteLater.setMinutes(now.getMinutes() + 1);
console.log("One minute later:", oneMinuteLater);

const oneSecondLater = new Date(now);
oneSecondLater.setSeconds(now.getSeconds() + 1);
console.log("One second later:", oneSecondLater);
// Getting the timestamp (milliseconds since January 1, 1970)
const timestamp = now.getTime();
console.log("Current timestamp (ms since Jan 1, 1970):", timestamp);  
// Getting the current time in ISO format
const isoString = now.toISOString();
console.log("Current date and time in ISO format:", isoString); 
// Getting the current time in UTC
const utcString = now.toUTCString();
console.log("Current date and time in UTC:", utcString);
// Getting the current time in local string format
const localString = now.toLocaleString();
console.log("Current date and time in local string format:", localString);
// Getting the current date in local date string format
const localDateString = now.toLocaleDateString();
console.log("Current date in local date string format:", localDateString);
// Getting the current time in local time string format
const localTimeString = now.toLocaleTimeString();
console.log("Current time in local time string format:", localTimeString);
//toDateString method
const dateString = now.toDateString();
console.log("Current date in date string format:", dateString);
//toTimeString method
const timeString = now.toTimeString();
console.log("Current time in time string format:", timeString);
//toJSON method
const jsonString = now.toJSON();
console.log("Current date and time in JSON format:", jsonString);
//toGMTString method
const gmtString = now.toGMTString();
console.log("Current date and time in GMT format:", gmtString);
//toTimeString method
const timeString2 = now.toTimeString();
console.log("Current time in time string format (alternative):", timeString2);
 

// Comparing dates
console.log("----------------------------------Comparing dates-----------------------------");
const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
console.log("Today's date:", today);
console.log("Yesterday's date:", yesterday);
const pastDate = new Date('2022-01-01T12:00:00');
console.log("Past date:", pastDate);
if (today > yesterday) {
  console.log("Today is after yesterday.");
} else {
  console.log("Today is not after yesterday.");
}
if (now > pastDate) {
  console.log("The current date is after January 1, 2022.");
} else {
  console.log("The current date is before January 1, 2022.");
}


// Formatting dates and times
console.log(
  "-----------------------------Formated date and time in  year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' format --------------",
);
// Formatting dates and times
//toLocaleDateString with options
const options1 = { year: 'numeric', month: '2-digit', day: '2-digit' };
console.log("Formatted date (MM/DD/YYYY):", now.toLocaleDateString('en-US', options1));
const options2 = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
console.log("Formatted time (HH:MM:SS):", now.toLocaleTimeString('en-US', options2));
//toLocaleTimeString with options
const options3 = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
console.log("Formatted time (HH:MM:SS AM/PM):", now.toLocaleTimeString('en-US', options3));  
//toLocaleDateString with options for different locales
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
console.log("Formatted date and time (US):", now.toLocaleDateString('en-US', options));
console.log("Formatted date and time (UK):", now.toLocaleDateString('en-GB', options));
console.log("Formatted date and time (Germany):", now.toLocaleDateString('de-DE', options));
console.log("Formatted date and time (Japan):", now.toLocaleDateString('ja-JP', options));
console.log("Formatted date and time (India):", now.toLocaleDateString('hi-IN', options));
console.log("Formatted date and time (France):", now.toLocaleDateString('fr-FR', options));
console.log("Formatted date and time (Italy):", now.toLocaleDateString('it-IT', options));
console.log("Formatted date and time (South Korea):", now.toLocaleDateString('ko-KR', options));
console.log("Formatted date and time (Spain):", now.toLocaleDateString('es-ES', options));
console.log("Formatted date and time (China):", now.toLocaleDateString('zh-CN', options));
console.log("Formatted date and time (Australia):", now.toLocaleDateString('en-AU', options));
console.log("Formatted date and time (Canada):", now.toLocaleDateString('en-CA', options));
console.log("Formatted date and time (Mexico):", now.toLocaleDateString('es-MX', options));
console.log("Formatted date and time (Brazil):", now.toLocaleDateString('pt-BR', options));
console.log("Formatted date and time (Russia):", now.toLocaleDateString('ru-RU', options));
console.log("Formatted date and time (Netherlands):", now.toLocaleDateString('nl-NL', options));
console.log("Formatted date and time (Sweden):", now.toLocaleDateString('sv-SE', options));
console.log("Formatted date and time (Finland):", now.toLocaleDateString('fi-FI', options));
console.log("Formatted date and time (Poland):", now.toLocaleDateString('pl-PL', options));
console.log("Formatted date and time (Czech Republic):", now.toLocaleDateString('cs-CZ', options));
console.log("Formatted date and time (Hungary):", now.toLocaleDateString('hu-HU', options));
console.log("Formatted date and time (Lithuania):", now.toLocaleDateString('lt-LT', options));  
console.log("Formatted date and time (Greece):", now.toLocaleDateString('el-GR', options));
console.log("Formatted date and time (Turkey):", now.toLocaleDateString('tr-TR', options));
console.log("Formatted date and time (Saudi Arabia):", now.toLocaleDateString('ar-SA', options));
console.log("Formatted date and time (UAE):", now.toLocaleDateString('ar-AE', options));
console.log("Formatted date and time (Egypt):", now.toLocaleDateString('ar-EG', options));
console.log("Formatted date and time (Morocco):", now.toLocaleDateString('ar-MA', options));
console.log("Formatted date and time (Tunisia):", now.toLocaleDateString('ar-TN', options));
console.log("Formatted date and time (Argentina):", now.toLocaleDateString('es-AR', options));
console.log("Formatted date and time (Uruguay):", now.toLocaleDateString('es-UY', options));
console.log("Formatted date and time (Chile):", now.toLocaleDateString('es-CL', options));
console.log("Formatted date and time (Peru):", now.toLocaleDateString('es-PE', options));
console.log("Formatted date and time (Bolivia):", now.toLocaleDateString('es-BO', options));
console.log("Formatted date and time (Venezuela):", now.toLocaleDateString('es-VE', options));
console.log("Formatted date and time (Colombia):", now.toLocaleDateString('es-CO', options));
console.log("Formatted date and time (Ecuador):", now.toLocaleDateString('es-EC', options));
console.log("Formatted date and time (Guatemala):", now.toLocaleDateString('es-GT', options));
console.log("Formatted date and time (Panama):", now.toLocaleDateString('es-PA', options));
console.log("Formatted date and time (Costa Rica):", now.toLocaleDateString('es-CR', options));
console.log("Formatted date and time (Nicaragua):", now.toLocaleDateString('es-NI', options));
console.log("Formatted date and time (El Salvador):", now.toLocaleDateString('es-SV', options));
console.log("Formatted date and time (Honduras):", now.toLocaleDateString('es-HN', options));
console.log("Formatted date and time (Puerto Rico):", now.toLocaleDateString('es-PR', options));
console.log("Formatted date and time (Cuba):", now.toLocaleDateString('es-CU', options));
console.log("Formatted date and time (Jamaica):", now.toLocaleDateString('es-JM', options));
console.log("Formatted date and time (Haiti):", now.toLocaleDateString('es-HT', options));
console.log("Formatted date and time (Dominican Republic):", now.toLocaleDateString('es-DO', options));
// Working with time zones
console.log("----------------------------------Current date and time in different time zones:-----------------------------");
//UTC - Coordinated Universal Time
const utcDate = now.toUTCString();
console.log("UTC date and time:", utcDate);
//en-US - United States English time zone       
const localDate = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
console.log("New York date and time:", localDate);
//Asia/Tokyo - Japanese time zone
const tokyoDate = now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' });
console.log("Tokyo date and time:", tokyoDate);
//Asia/Kolkata - Indian time zone
const kolkataDate = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
console.log("Kolkata date and time:", kolkataDate);
//Europe/London - British time zone
const londonDate = now.toLocaleString('en-US', { timeZone: 'Europe/London' });
console.log("London date and time:", londonDate);
//Europe/Berlin - German time zone
const berlinDate = now.toLocaleString('en-US', { timeZone: 'Europe/Berlin' });
console.log("Berlin date and time:", berlinDate);
//Australia/Sydney - Australian time zone
const sydneyDate = now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' });
console.log("Sydney date and time:", sydneyDate);
//America/Los_Angeles - Pacific Time Zone
const laDate = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
console.log("Los Angeles date and time:", laDate);
//America/Sao_Paulo - Brazilian time zone
const saoPauloDate = now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
console.log("Sao Paulo date and time:", saoPauloDate);
//Africa/Johannesburg - South African time zone
const johannesburgDate = now.toLocaleString('en-US', { timeZone: 'Africa/Johannesburg' });
console.log("Johannesburg date and time:", johannesburgDate);
//America/Mexico_City - Mexican time zone
const mexicoCityDate = now.toLocaleString('en-US', { timeZone: 'America/Mexico_City' });
console.log("Mexico City date and time:", mexicoCityDate);
//America/Chicago - Central Time Zone
const chicagoDate = now.toLocaleString('en-US', { timeZone: 'America/Chicago' });
console.log("Chicago date and time:", chicagoDate);
//America/New_York - Eastern Time Zone
const newYorkDate = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
console.log("New York date and time:", newYorkDate);
//America/Denver - Mountain Time Zone
const denverDate = now.toLocaleString('en-US', { timeZone: 'America/Denver' });
console.log("Denver date and time:", denverDate);
//America/Phoenix - Arizona Time Zone
const phoenixDate = now.toLocaleString('en-US', { timeZone: 'America/Phoenix' });
console.log("Phoenix date and time:", phoenixDate);
//America/Anchorage - Alaska Time Zone
const anchorageDate = now.toLocaleString('en-US', { timeZone: 'America/Anchorage' });
console.log("Anchorage date and time:", anchorageDate);
//Pacific/Honolulu - Hawaii Time Zone
const honoluluDate = now.toLocaleString('en-US', { timeZone: 'Pacific/Honolulu' });
console.log("Honolulu date and time:", honoluluDate);
//America/Toronto - Canadian Eastern Time Zone
const torontoDate = now.toLocaleString('en-US', { timeZone: 'America/Toronto' });
console.log("Toronto date and time:", torontoDate);
//America/Vancouver - Canadian Pacific Time Zone
const vancouverDate = now.toLocaleString('en-US', { timeZone: 'America/Vancouver' });
console.log("Vancouver date and time:", vancouverDate);
//America/Halifax - Canadian Atlantic Time Zone
const halifaxDate = now.toLocaleString('en-US', { timeZone: 'America/Halifax' });
console.log("Halifax date and time:", halifaxDate);
//America/St_Johns - Canadian Newfoundland Time Zone
const stJohnsDate = now.toLocaleString('en-US', { timeZone: 'America/St_Johns' });
console.log("St. John's date and time:", stJohnsDate);
//Europe/Paris - French time zone
const parisDate = now.toLocaleString('en-US', { timeZone: 'Europe/Paris' });
console.log("Paris date and time:", parisDate);
//Europe/Moscow - Russian time zone
const moscowDate = now.toLocaleString('en-US', { timeZone: 'Europe/Moscow' });
console.log("Moscow date and time:", moscowDate);
//Asia/Shanghai - Chinese time zone
const shanghaiDate = now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' });
console.log("Shanghai date and time:", shanghaiDate);
//Asia/Singapore - Singaporean time zone
const singaporeDate = now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' });
console.log("Singapore date and time:", singaporeDate);
//Asia/Dubai - UAE time zone
const dubaiDate = now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' });
console.log("Dubai date and time:", dubaiDate);
//Asia/Jakarta - Indonesian time zone
const jakartaDate = now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
console.log("Jakarta date and time:", jakartaDate);
//Asia/Karachi - Pakistani time zone
const karachiDate = now.toLocaleString('en-US', { timeZone: 'Asia/Karachi' });
console.log("Karachi date and time:", karachiDate);
//Asia/Bangkok - Thai time zone
const bangkokDate = now.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });
console.log("Bangkok date and time:", bangkokDate);
//Europe/Rome - Italian time zone
const romeDate = now.toLocaleString('en-US', { timeZone: 'Europe/Rome' });
console.log("Rome date and time:", romeDate);
//Europe/Madrid - Spanish time zone
const madridDate = now.toLocaleString('en-US', { timeZone: 'Europe/Madrid' });
console.log("Madrid date and time:", madridDate);
//Europe/Amsterdam - Dutch time zone
const amsterdamDate = now.toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' });
console.log("Amsterdam date and time:", amsterdamDate);
//Europe/Brussels - Belgian time zone   
const brusselsDate = now.toLocaleString('en-US', { timeZone: 'Europe/Brussels' });
console.log("Brussels date and time:", brusselsDate);
//Europe/Zurich - Swiss time zone
const zurichDate = now.toLocaleString('en-US', { timeZone: 'Europe/Zurich' });
console.log("Zurich date and time:", zurichDate);
//Europe/Vienna - Austrian time zone
const viennaDate = now.toLocaleString('en-US', { timeZone: 'Europe/Vienna' });
console.log("Vienna date and time:", viennaDate);
//Europe/Copenhagen - Danish time zone
const copenhagenDate = now.toLocaleString('en-US', { timeZone: 'Europe/Copenhagen' });
console.log("Copenhagen date and time:", copenhagenDate);
//Europe/Stockholm - Swedish time zone
const stockholmDate = now.toLocaleString('en-US', { timeZone: 'Europe/Stockholm' });
console.log("Stockholm date and time:", stockholmDate);
//Europe/Helsinki - Finnish time zone
const helsinkiDate = now.toLocaleString('en-US', { timeZone: 'Europe/Helsinki' });
console.log("Helsinki date and time:", helsinkiDate);
//Europe/Athens - Greek time zone
const athensDate = now.toLocaleString('en-US', { timeZone: 'Europe/Athens' });
console.log("Athens date and time:", athensDate);
//Europe/Istanbul - Turkish time zone
const istanbulDate = now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' });
console.log("Istanbul date and time:", istanbulDate);
//Africa/Cairo - Egyptian time zone
const cairoDate = now.toLocaleString('en-US', { timeZone: 'Africa/Cairo' });
console.log("Cairo date and time:", cairoDate);
//Africa/Nairobi - Kenyan time zone
const nairobiDate = now.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' });
console.log("Nairobi date and time:", nairobiDate);
//Africa/Accra - Ghanaian time zone
const accraDate = now.toLocaleString('en-US', { timeZone: 'Africa/Accra' });
console.log("Accra date and time:", accraDate);
//Africa/Dakar - Senegalese time zone
const dakarDate = now.toLocaleString('en-US', { timeZone: 'Africa/Dakar' });
console.log("Dakar date and time:", dakarDate);
//Africa/Lagos - Nigerian time zone
const lagosDate = now.toLocaleString('en-US', { timeZone: 'Africa/Lagos' });
console.log("Lagos date and time:", lagosDate);
//Africa/Algiers - Algerian time zone
const algiersDate = now.toLocaleString('en-US', { timeZone: 'Africa/Algiers' });
console.log("Algiers date and time:", algiersDate);
//Africa/Casablanca - Moroccan time zone
const casablancaDate = now.toLocaleString('en-US', { timeZone: 'Africa/Casablanca' });
console.log("Casablanca date and time:", casablancaDate);
//Africa/Tunis - Tunisian time zone
const tunisDate = now.toLocaleString('en-US', { timeZone: 'Africa/Tunis' });
console.log("Tunis date and time:", tunisDate);
//America/Argentina/Buenos_Aires - Argentine time zone
const buenosAiresDate = now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
console.log("Buenos Aires date and time:", buenosAiresDate);
//America/Montevideo - Uruguayan time zone
const montevideoDate = now.toLocaleString('en-US', { timeZone: 'America/Montevideo' });
console.log("Montevideo date and time:", montevideoDate);


// Note: For more advanced date and time manipulation, consider using libraries like Moment.js or date-fns.
