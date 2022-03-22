let julian, month, day
const content = document.getElementById("content")
const prompt = document.createElement("div")
prompt.id = "prompt"
prompt.innerText = ("Enter the Julian date printed on the bottle:")
content.appendChild(prompt)

const julianField = document.createElement("input")
julianField.id = "julianDate"
content.appendChild(julianField)

const julianSubmit = document.createElement("input")
julianSubmit.type = "submit"
content.appendChild(julianSubmit)

const displayAnswer = document.createElement("div")
displayAnswer.id = "answer"
content.appendChild(displayAnswer)

const julianObj = {
    operate: function() {
        julian = julianField.value
        if (julian < 365 && julian > 334) {
            month = "December"
            day = julian-334
        } else if (julian >= 334) {
            month = "November"
            day = julian-304
        } else if (julian >= 273) {
            month = "October"
            day = julian-273
        } else if (julian >= 243) {
            month = "September"
            day = julian-243
        } else if (julian >= 212) {
            month = "August"
            day = julian-212
        } else if (julian >= 181) {
            month = "July"
            day = julian-181
        } else if (julian >= 151) {
            month = "June"
            day = julian-151
        } else if (julian >= 120) {
            month = "May"
            day = julian-120
        } else if (julian >= 90) {
            month = "April"
            day = julian-90
        } else if (julian >= 59) {
            month = "March"
            day = julian-59
        } else if (julian >= 31) {
            month = "February"
            day = julian-29
        } else if (julian >= 0) {
            month = "January"
            day = julian
        }
        else {
            alert("Please enter a valid Julian date.")
        }
        displayAnswer.innerText = `It is ${month} ${day}`
    }
}





julianSubmit.addEventListener("click", julianObj.operate)


