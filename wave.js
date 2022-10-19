const svgns = "http://www.w3.org/2000/svg";

function line(e, x1, y1, x2, y2, color) {
    const line = document.createElementNS(svgns, 'line');

    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);
    line.setAttributeNS(null, 'stroke', color);
    line.setAttributeNS(null, 'stroke-width', 1);
    e.appendChild(line);
    return line;
}

const svg = document.getElementById('wave')
const height = svg.getAttribute('height');
const width = svg.getAttribute('width');

let x = 100;

setInterval(() => {
    while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }

    line(svg, x, 0, x + 100, height, 'darkblue');
    x += 10;
}, 1000);