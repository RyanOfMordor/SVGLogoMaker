const svgwrite = require('svgwrite');
const readline = require('readline-sync');

function createLogo() {
    // Prompt for text input
    const text = readline.question("Enter up to three characters: ").slice(0, 3);

    // Prompt for text color input
    const textColor = readline.question("Enter text color (keyword or hexadecimal number): ");

    // Prompt for shape input
    console.log("Choose a shape:");
    console.log("1. Circle");
    console.log("2. Triangle");
    console.log("3. Square");
    const shapeChoice = readline.question("Enter shape number: ");
    const shapes = ['circle', 'triangle', 'square'];
    const shape = shapes[parseInt(shapeChoice) - 1];

    // Prompt for shape color input
    const shapeColor = readline.question("Enter shape color (keyword or hexadecimal number): ");

    // Create SVG
    const svg = new svgwrite.drawing();
    svg.add(svg.text(text, { x: 10, y: 20, fill: textColor }));

    if (shape === 'circle') {
        svg.add(svg.circle({ cx: 150, cy: 100, r: 50, fill: shapeColor }));
    } else if (shape === 'triangle') {
        svg.add(svg.polygon({ points: [[100, 150], [200, 150], [150, 50]], fill: shapeColor }));
    } else if (shape === 'square') {
        svg.add(svg.rect({ x: 100, y: 50, width: 100, height: 100, fill: shapeColor }));
    }

    // Save SVG
    svg.save('logo.svg');

    console.log("Generated logo.svg");
}

createLogo();


