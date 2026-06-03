const fs = require('fs');

let content = fs.readFileSync('uas-simulation.html', 'utf8');

// The keys in reviewMaterial are currently bab1, bab2, bab3, bab4, bab5.
// We need to rename them to bab2, bab3, bab4, bab5, bab6.
// Since we don't want to accidentally match other things, we will do targeted string replacements.

content = content.replace("bab5: {\n        title: 'Bab 5: Law", "bab6: {\n        title: 'Bab 6: Law");
content = content.replace("bab4: {\n        title: 'Bab 4: Penetration", "bab5: {\n        title: 'Bab 5: Penetration");
content = content.replace("bab3: {\n        title: 'Bab 3: Integration", "bab4: {\n        title: 'Bab 4: Integration");
content = content.replace("bab2: {\n        title: 'Bab 2: Regression", "bab3: {\n        title: 'Bab 3: Regression");
content = content.replace("bab1: {\n        title: 'Bab 1: Unit", "bab2: {\n        title: 'Bab 2: Unit");

// Now inject bab1 at the very beginning of reviewMaterial (right after `const reviewMaterial = {\n`)
const bab1Content = `    bab1: {
        title: 'Bab 1: Database Security',
        topics: {
            'sql_injection': {
                title: 'SQL Injection',
                content: \`<p>Mencegah SQL Injection paling efektif dengan menggunakan <strong>Parameterized Statements (Prepared Statements)</strong> karena memperlakukan input murni sebagai data, bukan perintah.</p>\`
            },
            'acid': {
                title: 'Prinsip ACID',
                content: \`<ul>
<li><strong>Atomicity</strong>: All-or-nothing (sukses semua atau gagal semua).</li>
<li><strong>Consistency</strong>: Transisi database dari state valid ke valid lainnya.</li>
<li><strong>Isolation</strong>: Tidak bisa baca data transaksi yang belum selesai (Dirty Read).</li>
<li><strong>Durability</strong>: Data permanen meskipun mati lampu (tahan banting).</li>
</ul>\`
            },
            'rbac': {
                title: 'Role-Based Access Control (RBAC)',
                content: \`<p>Memberikan akses berdasarkan <strong>Role</strong> (peran), bukan per individu. Sangat penting untuk menerapkan prinsip <em>Least Privilege</em>.</p>\`
            },
            'encryption': {
                title: 'Encryption & Key Management',
                content: \`<p>Kunci enkripsi harus dikelola terpisah dari data, dilindungi aksesnya, dan <strong>dirotasi (diganti) secara berkala</strong>.</p>\`
            }
        }
    },
`;

content = content.replace("const reviewMaterial = {", "const reviewMaterial = {\n" + bab1Content);

fs.writeFileSync('uas-simulation.html', content);
console.log('Fixed REVIEW_DATA!');
