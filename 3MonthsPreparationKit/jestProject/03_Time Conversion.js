/*
Dada una hora en formato de 12 horas AM/PM, conviértela en hora militar (24 horas).

Nota: 
- Las 12:00:00AM en un reloj de 12 horas son las 00:00:00 en un reloj de 24 horas.
- Las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un reloj de 24 horas.

Ejemplo
  s='12:01:00PM'
  Devuelve '12:01:00'.
-s='12:01:00AM'
  Devuelve '00:01:00'.
*/

function timeConversion(s) {
    const timeArr = s.split(':');
    const sec = (timeArr[2][0] + timeArr[2][1]);
    const timeFormat = s.slice(-2);
    const time = {
        hours: timeArr[0],
        min: timeArr[1],
        sec,
        timeFormat,
    };
    if (timeFormat === "PM" && parseInt(time.hours) != 12) {
        time.hours = parseInt(time.hours) + 12;
    } else if (timeFormat === "AM" && parseInt(time.hours) == 12) {
        timeFormat = "00";
    }
    console.log(time.hours + ':' + time.min + ':' + time.sec);

}
let s = "10:05:45PM";
timeConversion(s);