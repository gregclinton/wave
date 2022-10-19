const svgns = "http://www.w3.org/2000/svg";

function line(e, x1, y1, x2, y2, color) {
    const line = document.createElementNS(svgns, 'line');

    line.setAttributeNS(null, 'x1', scale.x(x1));
    line.setAttributeNS(null, 'y1', scale.y(y1));
    line.setAttributeNS(null, 'x2', scale.x(x2));
    line.setAttributeNS(null, 'y2', scale.y(y2));
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

let scale = {};

function wave1(e, height, width) {
    let t = 0;

    scale.x = x => x * width / (2 * Math.PI);
    scale.y = y => -y + height / 2;

    setInterval(() => {
        clear(e);
        let A = 120;
        let step = 0.1;
        let fn = x => A * Math.sin(x);

        for (let x = 0; x < 2 * Math.PI; x += step) {
            line(e, x, fn(x), x + step, fn(x + step), 'darkblue');
        }
    }, 1000);
}

function wave() {
    const svg = document.getElementById('wave')

    wave1(svg, svg.getAttribute('height'), svg.getAttribute('width'));
}

wave();