const fs = require('fs');

const filesConfig = {
    'ch01-database-security.html': { prev: null, next: 'ch02', chapter: 1, name: 'Bab 2: Unit Testing', nextFile: 'ch02-unit-testing.html' },
    'ch02-unit-testing.html': { prev: 'ch01', next: 'ch03', chapter: 2, name: 'Bab 3: Regression', prevName: 'Bab 1: Database Security', prevFile: 'ch01-database-security.html', nextFile: 'ch03-regression-testing.html' },
    'ch03-regression-testing.html': { prev: 'ch02', next: 'ch04', chapter: 3, name: 'Bab 4: Integration', prevName: 'Bab 2: Unit Testing', prevFile: 'ch02-unit-testing.html', nextFile: 'ch04-integration-system-acceptance.html' },
    'ch04-integration-system-acceptance.html': { prev: 'ch03', next: 'ch05', chapter: 4, name: 'Bab 5: Penetration Testing', prevName: 'Bab 3: Regression', prevFile: 'ch03-regression-testing.html', nextFile: 'ch05-penetration-testing.html' },
    'ch05-penetration-testing.html': { prev: 'ch04', next: 'ch06', chapter: 5, name: 'Bab 6: Law & Ethics', prevName: 'Bab 4: Integration', prevFile: 'ch04-integration-system-acceptance.html', nextFile: 'ch06-law-ethics-cybercrime.html' },
    'ch06-law-ethics-cybercrime.html': { prev: 'ch05', next: 'uas', chapter: 6, prevName: 'Bab 5: Penetration Testing', prevFile: 'ch05-penetration-testing.html' }
};

for (const [file, cfg] of Object.entries(filesConfig)) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // 1. Rewrite Top Nav
    let topNav = `<div class="nav-links">\n        <a href="index.html">🏠 Home</a>\n        <span class="sep">/</span>\n`;
    if (cfg.prev) {
        topNav += `        <a href="${cfg.prevFile}">← Ch ${cfg.chapter - 1}</a>\n        <span class="sep">/</span>\n`;
    }
    topNav += `        <a class="active">Chapter ${cfg.chapter}</a>\n        <span class="sep">/</span>\n`;
    if (cfg.next === 'uas') {
        topNav += `        <a href="uas-simulation.html">UAS →</a>\n    </div>`;
    } else {
        topNav += `        <a href="${cfg.nextFile}">Ch ${cfg.chapter + 1} →</a>\n    </div>`;
    }
    
    content = content.replace(/<div class="nav-links">[\s\S]*?<\/div>/, topNav);

    // 2. Rewrite Bottom Nav
    let botNav = `<div class="nav-buttons">\n`;
    if (cfg.prev) {
        botNav += `        <a href="${cfg.prevFile}" class="btn btn-secondary" style="text-decoration:none">← ${cfg.prevName}</a>\n`;
    } else {
        botNav += `        <a href="index.html" class="btn btn-secondary" style="text-decoration:none">← Kembali ke Home</a>\n`;
    }
    
    if (cfg.next === 'uas') {
        botNav += `        <a href="uas-simulation.html" class="btn btn-primary" style="text-decoration:none">🎯 Simulasi UAS →</a>\n    </div>`;
    } else {
        botNav += `        <a href="${cfg.nextFile}" class="btn btn-primary" style="text-decoration:none">${cfg.name} →</a>\n    </div>`;
    }
    
    content = content.replace(/<div class="nav-buttons">[\s\S]*?<\/div>/, botNav);

    fs.writeFileSync(file, content);
}

// Fix index.html top nav
if (fs.existsSync('index.html')) {
    let indexContent = fs.readFileSync('index.html', 'utf8');
    const indexNav = `<div class="nav-links">
            <a href="index.html" class="active">🏠 Home</a>
            <span class="sep">/</span>
            <a href="ch01-database-security.html">Ch 1</a>
            <span class="sep">/</span>
            <a href="ch02-unit-testing.html">Ch 2</a>
            <span class="sep">/</span>
            <a href="ch03-regression-testing.html">Ch 3</a>
            <span class="sep">/</span>
            <a href="ch04-integration-system-acceptance.html">Ch 4</a>
            <span class="sep">/</span>
            <a href="ch05-penetration-testing.html">Ch 5</a>
            <span class="sep">/</span>
            <a href="ch06-law-ethics-cybercrime.html">Ch 6</a>
            <span class="sep">/</span>
            <a href="uas-simulation.html">UAS</a>
        </div>`;
    indexContent = indexContent.replace(/<div class="nav-links">[\s\S]*?<\/div>/, indexNav);
    fs.writeFileSync('index.html', indexContent);
}

// Fix uas-simulation.html top nav
if (fs.existsSync('uas-simulation.html')) {
    let uasContent = fs.readFileSync('uas-simulation.html', 'utf8');
    const uasNav = `<div class="nav-links">
        <a href="index.html">🏠 Home</a>
        <span class="sep">/</span>
        <a href="ch06-law-ethics-cybercrime.html">← Ch 6</a>
        <span class="sep">/</span>
        <a class="active">Simulasi UAS</a>
    </div>`;
    uasContent = uasContent.replace(/<div class="nav-links">[\s\S]*?<\/div>/, uasNav);
    fs.writeFileSync('uas-simulation.html', uasContent);
}

console.log('Fixed navigation menus!');
