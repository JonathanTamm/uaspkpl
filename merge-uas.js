const fs = require('fs');

// Read part 1 and part 2
const p1Raw = fs.readFileSync('temp-part1.js', 'utf8');
const p2Raw = fs.readFileSync('temp-part2.js', 'utf8');

// Extract arrays
const p1Json = p1Raw.replace('const part1 = ', '').replace(/;\s*$/, '');
const p2Json = p2Raw.replace('const part2 = ', '').replace(/;\s*$/, '');

const part1 = JSON.parse(p1Json);
const part2 = JSON.parse(p2Json);

const newQuestions = [...part1, ...part2];

let html = fs.readFileSync('uas-simulation.html', 'utf8');

// Find the allQuestions array in the HTML
// It starts with `const allQuestions = [` and ends with `];`
// We need to be careful with regex, let's use string manipulation

const startStr = "const allQuestions = [";
const endStr = "];";
const startIndex = html.indexOf(startStr);

if (startIndex !== -1) {
    // Find the matching end index
    let bracketCount = 0;
    let endIndex = -1;
    let i = startIndex + startStr.length - 1; // points to '['
    
    for (; i < html.length; i++) {
        if (html[i] === '[') bracketCount++;
        else if (html[i] === ']') {
            bracketCount--;
            if (bracketCount === 0) {
                // Ensure it's followed by ';'
                if (html[i+1] === ';') {
                    endIndex = i + 1;
                    break;
                }
            }
        }
    }
    
    if (endIndex !== -1) {
        // Construct the new array string
        // We will format it nicely
        let newArrayStr = "const allQuestions = [\n";
        
        let currentBab = "";
        
        newQuestions.forEach((q, idx) => {
            if (q.bab !== currentBab) {
                currentBab = q.bab;
                // Add header comment
                const babNames = {
                    bab1: "BAB 1: DATABASE SECURITY",
                    bab2: "BAB 2: UNIT TESTING",
                    bab3: "BAB 3: REGRESSION TESTING",
                    bab4: "BAB 4: INTEGRATION, SYSTEM & ACCEPTANCE",
                    bab5: "BAB 5: PENETRATION TESTING",
                    bab6: "BAB 6: LAW, ETHICS & CYBER CRIME"
                };
                newArrayStr += `\n    // ===== ${babNames[currentBab]} =====\n`;
            }
            newArrayStr += `    ${JSON.stringify(q)},\n`;
        });
        
        // Remove trailing comma from last element
        newArrayStr = newArrayStr.replace(/,\n$/, '\n');
        newArrayStr += "];";
        
        const newHtml = html.substring(0, startIndex) + newArrayStr + html.substring(endIndex + 1);
        fs.writeFileSync('uas-simulation.html', newHtml);
        console.log('Successfully replaced 100 new varied questions!');
    } else {
        console.error('Could not find the end of allQuestions array.');
    }
} else {
    console.error('Could not find const allQuestions = [');
}
