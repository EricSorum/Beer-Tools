/*
This module dynamically generates the Julian Date Converter onto the DOM.
The user enters four digits found on some beer packages as an expiration date.
*/

// TODO: redesign error messages as modal elements to avoid using alerts.

export default function julianFunc() {
  let julian; let year; let month; let
    day;
  const toolBox = document.getElementById('toolBox');
  // First the module clears the toolbox of any contents.
  toolBox.innerHTML = [];

  const prompt = document.createElement('div');
  prompt.id = 'prompt';
  prompt.innerText = 'Enter the first four digits printed on the bottle:';
  toolBox.appendChild(prompt);

  const julianField = document.createElement('input');
  julianField.id = 'julianDate';
  toolBox.appendChild(julianField);

  const julianSubmit = document.createElement('button');
  julianSubmit.innerText = 'Submit';
  toolBox.appendChild(julianSubmit);

  const displayAnswer = document.createElement('div');
  displayAnswer.id = 'answer';
  toolBox.appendChild(displayAnswer);

  const julianObj = {
    operate() {
      /*
      The year is found by isolating the last digit of the number using modulus.
      This digit represents the last digit of the year (a 1 would be 2021).
      */
      year = julianField.value % 10;
      /*
      The date is found by isolating the first three digits of the number
      by simply diving by ten and discarding the remainder.  This is the Julian calendar
      date (123 would be the 123rd day of the year).
      */
      julian = Math.floor(julianField.value / 10);
      if (julian < 1 || julian > 365) {
        alert('Please enter a valid Julian date.'); // eslint-disable-line no-alert
        return;
      }
      /*
      The month is found based on a series of if statements for each month.
      The month is assigned if the Julian date falls after the first of that month.
      The day is found by subtracting the difference.
      */
      if (julian <= 365 && julian > 334) {
        month = 'December';
        day = julian - 334;
      } else if (julian > 304) {
        month = 'November';
        day = julian - 304;
      } else if (julian > 273) {
        month = 'October';
        day = julian - 273;
      } else if (julian > 243) {
        month = 'September';
        day = julian - 243;
      } else if (julian > 212) {
        month = 'August';
        day = julian - 212;
      } else if (julian > 181) {
        month = 'July';
        day = julian - 181;
      } else if (julian > 151) {
        month = 'June';
        day = julian - 151;
      } else if (julian > 120) {
        month = 'May';
        day = julian - 120;
      } else if (julian > 90) {
        month = 'April';
        day = julian - 90;
      } else if (julian > 59) {
        month = 'March';
        day = julian - 59;
      } else if (julian > 31) {
        month = 'February';
        day = julian - 29;
      } else if (julian > 0) {
        month = 'January';
        day = julian;
      }
      displayAnswer.innerText = `The Gregorian date is ${month} ${day}, 202${year}.`;
    },
  };

  julianSubmit.addEventListener('click', julianObj.operate);
}
