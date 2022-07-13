export default function volumeFunc() {
  const content = document.getElementById("content");

  const topBox = document.createElement("div");

  const toolBox = document.getElementById("toolBox");
  toolBox.innerHTML = [];

  const volumeLabel = document.createElement("label");
  volumeLabel.innerText = "Volume per can or bottle: ";
  const volumeForm = document.createElement("input");
  const countLabel = document.createElement("label");
  countLabel.innerText = "Number of cans or bottles per pack: ";
  const countForm = document.createElement("input");
  const costLabel = document.createElement("label");
  costLabel.innerText = "Cost of each pack: ";
  const costForm = document.createElement("input");

  const opButton = document.createElement("button");
  opButton.innerText = "Submit";
  opButton.addEventListener("click", volumeConverter);

  const answerBox = document.createElement("div");

  toolBox.appendChild(volumeLabel);
  toolBox.appendChild(volumeForm);
  toolBox.appendChild(countLabel);
  toolBox.appendChild(countForm);
  toolBox.appendChild(costLabel);
  toolBox.appendChild(costForm);
  toolBox.appendChild(opButton);
  toolBox.appendChild(answerBox);

  function volumeConverter() {
    let volume = volumeForm.value;
    let count = countForm.value;
    let cost = costForm.value;
    if (volume < 1 || count < 1) {
      alert("Please enter a valid ABV and volume.");
      return;
    }
    let totalOunces = volume * count;
    let answer = cost / totalOunces;
    answerBox.innerText = `A ${count} pack of ${volume} ounce beers at a cost of $${cost} has a value of $${answer.toFixed(
      2
    )} per ounce.`;
  }
}
