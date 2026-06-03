const fs = require('fs');

let content = fs.readFileSync('uas-simulation.html', 'utf8');

// 1. Fix getBabLabel
const oldLabels = "const labels = { bab1: 'Bab 1: Unit Testing', bab2: 'Bab 2: Regression Testing', bab3: 'Bab 3: Integration, System & Acceptance', bab4: 'Bab 4: Penetration Testing', bab5: 'Bab 5: Law, Ethics & Cyber Crime' };";
const newLabels = "const labels = { bab1: 'Bab 1: Database Security', bab2: 'Bab 2: Unit Testing', bab3: 'Bab 3: Regression Testing', bab4: 'Bab 4: Integration, System & Acceptance', bab5: 'Bab 5: Penetration Testing', bab6: 'Bab 6: Law, Ethics & Cyber Crime' };";
content = content.replace(oldLabels, newLabels);

// 2. Add Bab 6 to filter-bar
const filterOld = `<button class="filter-btn" onclick="filterQuestions('bab5')">Bab 5</button>\n    </div>`;
const filterNew = `<button class="filter-btn" onclick="filterQuestions('bab5')">Bab 5</button>\n        <button class="filter-btn" onclick="filterQuestions('bab6')">Bab 6</button>\n    </div>`;
content = content.replace(filterOld, filterNew);

// 3. Reorder allQuestions
const arrayRegex = /const allQuestions = \[([\s\S]*?)\];/;
const arrayMatch = content.match(arrayRegex);
if (arrayMatch) {
    let rawElements = arrayMatch[1];
    
    const b1Start = rawElements.indexOf('// ===== BAB 1: DATABASE SECURITY');
    const b2Start = rawElements.indexOf('// ===== BAB 2: UNIT TESTING');
    
    if (b1Start !== -1 && b2Start !== -1) {
        // b2 to b6 is from b2Start to b1Start
        const b2ToB6 = rawElements.substring(b2Start, b1Start);
        const b1 = rawElements.substring(b1Start);
        
        let newArrayBody = "\n    " + b1.trim() + "\n\n    " + b2ToB6.trim() + "\n";
        content = content.replace(arrayRegex, `const allQuestions = [${newArrayBody}];`);
    } else {
        console.log('Error: Could not find BAB 1 or BAB 2 comments');
    }
}

fs.writeFileSync('uas-simulation.html', content);
console.log('Fixed UAS Simulation!');
