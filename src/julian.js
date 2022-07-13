export default function julianFunc() {
  let julian, year, month, day;
  const toolBox = document.getElementById("toolBox");
  toolBox.innerHTML = [];

  const prompt = document.createElement("div");
  prompt.id = "prompt";
  prompt.innerText = "Enter the first four digits printed on the bottle:";
  toolBox.appendChild(prompt);

  const julianField = document.createElement("input");
  julianField.id = "julianDate";
  toolBox.appendChild(julianField);

  const julianSubmit = document.createElement("button");
  julianSubmit.innerText = "Submit";
  toolBox.appendChild(julianSubmit);

  const displayAnswer = document.createElement("div");
  displayAnswer.id = "answer";
  toolBox.appendChild(displayAnswer);

  const julianObj = {
    operate: function () {
      year = julianField.value % 10;
      julian = Math.floor(julianField.value / 10);
      if (julian < 1 || julian > 365) {
        alert("Please enter a valid Julian date.");
        return;
      }
      if (julian <= 365 && julian > 334) {
        month = "December";
        day = julian - 334;
      } else if (julian > 304) {
        month = "November";
        day = julian - 304;
      } else if (julian > 273) {
        month = "October";
        day = julian - 273;
      } else if (julian > 243) {
        month = "September";
        day = julian - 243;
      } else if (julian > 212) {
        month = "August";
        day = julian - 212;
      } else if (julian > 181) {
        month = "July";
        day = julian - 181;
      } else if (julian > 151) {
        month = "June";
        day = julian - 151;
      } else if (julian > 120) {
        month = "May";
        day = julian - 120;
      } else if (julian > 90) {
        month = "April";
        day = julian - 90;
      } else if (julian > 59) {
        month = "March";
        day = julian - 59;
      } else if (julian > 31) {
        month = "February";
        day = julian - 29;
      } else if (julian > 0) {
        month = "January";
        day = julian;
      }
      displayAnswer.innerText = `The Gregorian date is ${month} ${day}, 202${year}.`;
    },
  };

  julianSubmit.addEventListener("click", julianObj.operate);
}
