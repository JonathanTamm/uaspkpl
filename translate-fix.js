const fs = require('fs');

const replacements = [
    {
        oldQ: 'Which situation best illustrates a violation of the \\"Isolation\\" property of ACID?',
        newQ: 'Situasi manakah yang paling baik menggambarkan pelanggaran terhadap sifat \\"Isolation\\" dari ACID?'
    },
    {
        oldQ: 'A user is temporarily given access to a \\"Project Team\\" role only for the duration of a specific project, then reverted to their original role afterward. Which RBAC concept is being applied?',
        newQ: 'Seorang pengguna diberikan akses sementara ke role \\"Project Team\\" hanya selama durasi proyek tertentu, kemudian dikembalikan ke role aslinya. Konsep RBAC manakah yang sedang diterapkan?'
    },
    {
        oldQ: 'Which statement best captures the benefit of the \\"Durability\\" property in ACID for database security?',
        newQ: 'Pernyataan manakah yang paling baik menangkap manfaat dari sifat \\"Durability\\" dalam ACID untuk keamanan database?'
    },
    {
        oldQ: 'Which description best captures a \\"lost update\\" anomaly?',
        newQ: 'Deskripsi manakah yang paling baik menangkap apa itu anomali \\"lost update\\"?'
    }
];

const files = ['uas-simulation.html', 'ch01-database-security.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    replacements.forEach(r => {
        content = content.replace(r.oldQ, r.newQ);
    });
    
    fs.writeFileSync(file, content);
});

console.log('Fixed translations!');
