const fs = require('fs');

const path = process.env.GITHUB_OUTPUT;

// Set static output
const staticOutput = 'Static Output';
// Set dynamic output
const dynamicOutput = 'Dynamic Output';

// Prepare output lines (underscore for multi-word output names)
const outputLines = [
    `static_output=${staticOutput}`,
    `dynamic_output=${dynamicOutput}`
];

// Write outputs to GITHUB_OUTPUT file
if (path) {
    fs.appendFileSync(path, outputLines.join('\n') + '\n');
} else {
    // Fallback for local testing
    console.log(outputLines.join('\n'));
}