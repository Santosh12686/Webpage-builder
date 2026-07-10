const canvas = document.getElementById('canvas');

function addHeading() {
    const heading = document.createElement('h1');
    heading.textContent = 'New Heading (Double click to edit)';
    heading.contentEditable = true;
    canvas.appendChild(heading);
}

function addParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = 'New paragraph text. Double click here to edit this text freely.';
    paragraph.contentEditable = true;
    canvas.appendChild(paragraph);
}

function clearCanvas() {
    canvas.innerHTML = '';
}
