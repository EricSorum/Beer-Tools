import julianFunc from './components/julian.js'; // eslint-disable-line import/extensions
import abvConverterFunc from './components/abvconverter.js'; // eslint-disable-line import/extensions
import volumeFunc from './components/volume.js'; // eslint-disable-line import/extensions

// COMMENT EVERYTHING IN THE PROJECT AND THEN MERGE MAIN BRANCH WITH COMMENTING

/*
All contents of the website are dynamically generated into the 'content' div in the
index.html file, located in the 'dist' folder.

The children and grandchildren of the content div are shown below:

content
   -heading
   -buttonBox (a row of buttons to select which Beer Tool to use)
      -julianButton
      -abvButton
      -volumeButton
   -toolBox (a box where each Beer Tool will appear)

This file dynamically generates this content, then adds event listeners to each button,
which run the components imported above.  Each component generates its own Beer Tool in
the toolBox.
*/

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
