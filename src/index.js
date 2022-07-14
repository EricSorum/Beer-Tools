import julianFunc from './julian.js'; // eslint-disable-line import/extensions
import abvConverterFunc from './abvconverter.js'; // eslint-disable-line import/extensions
import volumeFunc from './volume.js'; // eslint-disable-line import/extensions

const content = document.getElementById('content');

const heading = document.createElement('h1');
heading.innerText = 'Beer Tools';
content.appendChild(heading);

const buttonBox = document.createElement('div');
buttonBox.id = 'buttonBox';
content.appendChild(buttonBox);

const toolBox = document.createElement('div');
content.appendChild(toolBox);
toolBox.id = 'toolBox';

const startingText = document.createElement('div');
startingText.innerHTML = 'Select a Beer Tool above.';
toolBox.appendChild(startingText);

const julianButton = document.createElement('button');
const abvButton = document.createElement('button');
const volumeButton = document.createElement('button');
julianButton.innerText = 'Julian Date Converter';
abvButton.innerText = 'ABV Calculator';
volumeButton.innerText = 'Volume Calculator';

buttonBox.appendChild(julianButton);
buttonBox.appendChild(abvButton);
buttonBox.appendChild(volumeButton);

julianButton.addEventListener('click', julianFunc);
abvButton.addEventListener('click', abvConverterFunc);
volumeButton.addEventListener('click', volumeFunc);
