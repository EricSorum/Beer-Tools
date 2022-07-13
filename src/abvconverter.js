export default function abvConverterFunc() {
  const content = document.getElementById("content");

  const topBox = document.createElement("div");
  const toolBox = document.getElementById("toolBox");
  toolBox.innerHTML = [];
  const abvLabel = document.createElement("label");
  abvLabel.innerText = "ABV percentage: ";
  const abvForm = document.createElement("input");
  const ozLabel = document.createElement("label");
  ozLabel.innerText = "Number of fluid ounces: ";
  const ozForm = document.createElement("input");
  const opButton = document.createElement("button");
  opButton.innerText = "Submit";
  opButton.addEventListener("click", abvConverter);

  const answerBox = document.createElement("div");
  const factBox = document.createElement("div");

  toolBox.appendChild(topBox);
  toolBox.appendChild(abvLabel);
  toolBox.appendChild(abvForm);
  toolBox.appendChild(ozLabel);
  toolBox.appendChild(ozForm);
  toolBox.appendChild(opButton);
  toolBox.appendChild(answerBox);
  toolBox.appendChild(factBox);

  function abvConverter() {
    let abv = abvForm.value;
    let oz = ozForm.value;
    if (abv < 1 || oz < 1) {
      alert("Please enter a valid ABV and volume.");
      return;
    }
    let answer = (abv * oz) / 60;
    answerBox.innerText = `A ${oz} oz. serving of ${abv}% alcohol is the equivalent of ${answer.toFixed(
      2
    )} standard drinks.`;
  }
}
