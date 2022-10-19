const svgns = "http://www.w3.org/2000/svg";

function line(e, x1, y1, x2, y2, color) {
    const line = document.createElementNS(svgns, 'line');

    line.setAttributeNS(null, 'x1', x1);
    line.setAttributeNS(null, 'y1', y1);
    line.setAttributeNS(null, 'x2', x2);
    line.setAttributeNS(null, 'y2', y2);
    line.setAttributeNS(null, 'stroke', color);
    line.setAttributeNS(null, 'stroke-width', 2);
    e.appendChild(line);
    return line;
}

function clear(e) {
    while (e.lastChild) {
        e.removeChild(e.lastChild);
    }
}

function wave1(e, height, width) {
    let x = 100;

    setInterval(() => {
        clear(e);
        line(e, x, 0, x + 100, height, 'darkblue');
        x += 10;
    }, 1000);
}

function wave() {
    const svg = document.getElementById('wave')

    wave1(svg, svg.getAttribute('height'), svg.getAttribute('width'));
}

wave();