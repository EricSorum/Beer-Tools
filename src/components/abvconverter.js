/*
This module renders the ABV converter tool in the tool box.
The user inputs two numbers: a beer's volume and the alcohol by volume (ABV)
percentage.
One "standard" alcoholic drink is one 12oz. serving of 5% beer.
The app returns an answer based on this formula: abv*vol/60.
*/

export default function abvConverterFunc() {
  const topBox = document.createElement('div');
  const toolBox = document.getElementById('toolBox');
  toolBox.innerHTML = [];
  const abvLabel = document.createElement('label');
  abvLabel.innerText = 'ABV percentage: ';
  const abvForm = document.createElement('input');
  const ozLabel = document.createElement('label');
  ozLabel.innerText = 'Number of fluid ounces: ';
  const ozForm = document.createElement('input');
  const opButton = document.createElement('button');
  opButton.innerText = 'Submit';

  const answerBox = document.createElement('div');
  const factBox = document.createElement('div');

  toolBox.appendChild(topBox);
  toolBox.appendChild(abvLabel);
  toolBox.appendChild(abvForm);
  toolBox.appendChild(ozLabel);
  toolBox.appendChild(ozForm);
  toolBox.appendChild(opButton);
  toolBox.appendChild(answerBox);
  toolBox.appendChild(factBox);

  function abvConverter() {
    const abv = abvForm.value;
    const oz = ozForm.value;
    if (abv < 1 || oz < 1) {
      alert('Please enter a valid ABV and volume.'); // eslint-disable-line no-alert
      return;
    }
    const answer = (abv * oz) / 60;
    answerBox.innerText = `A ${oz} oz. serving of ${abv}% alcohol is the equivalent of ${answer.toFixed(
      2,
    )} standard drinks.`;
  }
  opButton.addEventListener('click', abvConverter);
}
