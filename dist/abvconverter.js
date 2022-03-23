/*
One 12 oz glass of 5% ABV beer is one drink.
One 12 oz glass of 10% ABV beer is two drinks.

common multiple is 60
5 and 12, then divide by 60

*/

const content = document.getElementById("content")

const topBox = document.createElement("div")
topBox.innerText = "Did you know one 16 oz. can of 7.5% beer is the equivalent of two standard drinks?  Keep track of how much alcohol you're putting in your body with this alcohol content calculator!"

const abvForm = document.createElement("input")
const ozForm = document.createElement("input")
const opButton = document.createElement("input")
opButton.type = "submit"
opButton.addEventListener("click", abvConverter)

const answerBox = document.createElement("div")
const factBox = document.createElement("div")

content.appendChild(topBox)
content.appendChild(abvForm)
content.appendChild(ozForm)
content.appendChild(opButton)
content.appendChild(answerBox)
content.appendChild(factBox)

let abv = abvForm.value
let oz = ozForm.value

function abvConverter() {
    console.log(abv, oz)
    if (!isNaN(abv) || !isNaN(oz)) {
        answerBox.innerText = "Please enter valid numbers."
    }
    answerBox.innerText = `A ${oz} oz. serving of ${abv}% alcohol is the equivalent of ${abv*oz/60} standard drinks.`
    factBox.innerText = factFunc()
}
// I SHOULD CREATE A METHOD IN THE FACTS OBJEC TO RANDOMLY PICK A FACT


const facts = {
    f1: "Binge drinking is defined as drinking 5 or more alcoholic drinks for men or 4 or more drinks for women.",
    f2: "Until 2011, any beer in Texas over 4% ABV had to be labeled \"ale\" or \"malt liquor.\"",
    f3: "Excessive drinking cost the U.S. economy $249 billion in 2010.",
    f4: "Heavy drinking is defined as consuming 15 drinks or more per week for men, or 8 drinks or more per week for women.",
    f5: "About 90% of excessive drinkers do not meet the criteria for severe alcohol use disorder (alcoholism).",
}

