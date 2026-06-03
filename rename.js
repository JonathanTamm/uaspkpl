const fs = require('fs');
const path = require('path');

const map = {
    'ch05-law-ethics-cybercrime.html': 'ch06-law-ethics-cybercrime.html',
    'ch04-penetration-testing.html': 'ch05-penetration-testing.html',
    'ch03-integration-system-acceptance.html': 'ch04-integration-system-acceptance.html',
    'ch02-regression-testing.html': 'ch03-regression-testing.html',
    'ch01-unit-testing.html': 'ch02-unit-testing.html',
    'ch08-database-security.html': 'ch01-database-security.html'
};

const titleMap = {
    'ch01-database-security.html': 'Bab 1',
    'ch02-unit-testing.html': 'Bab 2',
    'ch03-regression-testing.html': 'Bab 3',
    'ch04-integration-system-acceptance.html': 'Bab 4',
    'ch05-penetration-testing.html': 'Bab 5',
    'ch06-law-ethics-cybercrime.html': 'Bab 6'
};

// 1. Rename files
for (const [oldName, newName] of Object.entries(map)) {
    if (fs.existsSync(oldName)) {
        fs.renameSync(oldName, newName);
    }
}

// 2. Process all html files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace old filenames with new filenames
    content = content.replace(/ch05-law-ethics-cybercrime\.html/g, 'ch06-law-ethics-cybercrime.html');
    content = content.replace(/ch04-penetration-testing\.html/g, 'ch05-penetration-testing.html');
    content = content.replace(/ch03-integration-system-acceptance\.html/g, 'ch04-integration-system-acceptance.html');
    content = content.replace(/ch02-regression-testing\.html/g, 'ch03-regression-testing.html');
    content = content.replace(/ch01-unit-testing\.html/g, 'ch02-unit-testing.html');
    content = content.replace(/ch08-database-security\.html/g, 'ch01-database-security.html');

    // Replace navbar texts
    content = content.replace(/>← Ch 1</g, '>← Ch 2<');
    content = content.replace(/>← Ch 2</g, '>← Ch 3<');
    content = content.replace(/>← Ch 3</g, '>← Ch 4<');
    content = content.replace(/>← Ch 4</g, '>← Ch 5<');
    content = content.replace(/>← Ch 5</g, '>← Ch 6<');
    
    // Replace LocalStorage keys in quiz scripts
    content = content.replace(/pkpl_quiz_ch05/g, 'pkpl_quiz_ch06');
    content = content.replace(/pkpl_quiz_ch04/g, 'pkpl_quiz_ch05');
    content = content.replace(/pkpl_quiz_ch03/g, 'pkpl_quiz_ch04');
    content = content.replace(/pkpl_quiz_ch02/g, 'pkpl_quiz_ch03');
    content = content.replace(/pkpl_quiz_ch01/g, 'pkpl_quiz_ch02');
    content = content.replace(/pkpl_quiz_ch08/g, 'pkpl_quiz_ch01');

    // Bottom nav texts
    content = content.replace(/← Bab 1:/g, '← Bab 2:');
    content = content.replace(/← Bab 2:/g, '← Bab 3:');
    content = content.replace(/← Bab 3:/g, '← Bab 4:');
    content = content.replace(/← Bab 4:/g, '← Bab 5:');
    content = content.replace(/← Bab 5:/g, '← Bab 6:');

    // Fix index.html specifically
    if (file === 'index.html') {
        content = content.replace(/Bab 1: Unit/g, 'Bab 2: Unit');
        content = content.replace(/Bab 2: Regression/g, 'Bab 3: Regression');
        content = content.replace(/Bab 3: Integration/g, 'Bab 4: Integration');
        content = content.replace(/Bab 4: Penetration/g, 'Bab 5: Penetration');
        content = content.replace(/Bab 5: Law/g, 'Bab 6: Law');
        content = content.replace(/Bab 8: Database/g, 'Bab 1: Database');
        
        content = content.replace(/>Ch 1</g, '>Ch 2<');
        content = content.replace(/>Ch 2</g, '>Ch 3<');
        content = content.replace(/>Ch 3</g, '>Ch 4<');
        content = content.replace(/>Ch 4</g, '>Ch 5<');
        content = content.replace(/>Ch 5</g, '>Ch 6<');
        content = content.replace(/>Ch 8</g, '>Ch 1<');

        // Reorder chapters in array
        content = content.replace(/const chapters = \['ch01','ch02','ch03','ch04','ch05','ch08'\];/, "const chapters = ['ch01','ch02','ch03','ch04','ch05','ch06'];");
    }

    if (file === 'uas-simulation.html') {
        content = content.replace(/bab:"bab5"/g, 'bab:"bab6"');
        content = content.replace(/bab:"bab4"/g, 'bab:"bab5"');
        content = content.replace(/bab:"bab3"/g, 'bab:"bab4"');
        content = content.replace(/bab:"bab2"/g, 'bab:"bab3"');
        content = content.replace(/bab:"bab1"/g, 'bab:"bab2"');
        content = content.replace(/bab:"bab8"/g, 'bab:"bab1"');

        content = content.replace(/BAB 5:/g, 'BAB 6:');
        content = content.replace(/BAB 4:/g, 'BAB 5:');
        content = content.replace(/BAB 3:/g, 'BAB 4:');
        content = content.replace(/BAB 2:/g, 'BAB 3:');
        content = content.replace(/BAB 1:/g, 'BAB 2:');
        content = content.replace(/BAB 8:/g, 'BAB 1:');
    }

    // Update <title> and <h1> for chapter files
    if (file.startsWith('ch0')) {
        // We only want to replace the first occurrences otherwise things get messy
        content = content.replace(/<title>Bab 1:/, '<title>Bab 2:');
        content = content.replace(/<title>Bab 2:/, '<title>Bab 3:');
        content = content.replace(/<title>Bab 3:/, '<title>Bab 4:');
        content = content.replace(/<title>Bab 4:/, '<title>Bab 5:');
        content = content.replace(/<title>Bab 5:/, '<title>Bab 6:');
        content = content.replace(/<title>Bab 8:/, '<title>Bab 1:');
        
        // Badge (e.g. Bab 1 —)
        content = content.replace(/Bab 1 —/g, 'Bab 2 —');
        content = content.replace(/Bab 2 —/g, 'Bab 3 —');
        content = content.replace(/Bab 3 —/g, 'Bab 4 —');
        content = content.replace(/Bab 4 —/g, 'Bab 5 —');
        content = content.replace(/Bab 5 —/g, 'Bab 6 —');
        content = content.replace(/Bab 8 —/g, 'Bab 1 —');

        // Tips Menghafal
        content = content.replace(/Bab 1:/g, 'Bab 2:');
        content = content.replace(/Bab 2:/g, 'Bab 3:');
        content = content.replace(/Bab 3:/g, 'Bab 4:');
        content = content.replace(/Bab 4:/g, 'Bab 5:');
        content = content.replace(/Bab 5:/g, 'Bab 6:');
        content = content.replace(/Bab 8:/g, 'Bab 1:');

        // And inside the navbar "Chapter 1", "Chapter 2", etc
        content = content.replace(/>Chapter 1</g, '>Chapter 2<');
        content = content.replace(/>Chapter 2</g, '>Chapter 3<');
        content = content.replace(/>Chapter 3</g, '>Chapter 4<');
        content = content.replace(/>Chapter 4</g, '>Chapter 5<');
        content = content.replace(/>Chapter 5</g, '>Chapter 6<');
        content = content.replace(/>Chapter 8</g, '>Chapter 1<');
    }

    fs.writeFileSync(file, content);
}
console.log('All files renamed and updated.');
