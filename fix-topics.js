const fs = require('fs');

let content = fs.readFileSync('uas-simulation.html', 'utf8');

// The new question topics mapping
const newQuestionTopics = `const questionTopics = {
    // Bab 1: Database Security (Index 0-19)
    0:'encryption', 1:'encryption', 2:'acid', 3:'sql_injection', 4:'acid',
    5:'rbac', 6:'sql_injection', 7:'acid', 8:'rbac', 9:'sql_injection',
    10:'acid', 11:'acid', 12:'rbac', 13:'sql_injection', 14:'acid',
    15:'rbac', 16:'acid', 17:'encryption', 18:'sql_injection', 19:'sql_injection',

    // Bab 2: Unit Testing (Index 20-35)
    20:'prinsip', 21:'prinsip', 22:'owasp_injection', 23:'owasp_access', 24:'owasp_crypto',
    25:'owasp_injection', 26:'mocking', 27:'framework', 28:'framework', 29:'prinsip',
    30:'owasp_design', 31:'owasp_misconfig', 32:'owasp_logging', 33:'owasp_ssrf',
    34:'keuntungan', 35:'owasp_components',

    // Bab 3: Regression Testing (Index 36-51)
    36:'dasar', 37:'retesting', 38:'cicd', 39:'seleksi', 40:'update',
    41:'dasar', 42:'tipe', 43:'rpa', 44:'loadtest', 45:'tipe',
    46:'seleksi', 47:'tipe', 48:'dasar', 49:'tipe', 50:'seleksi', 51:'rpa',

    // Bab 4: Integration, System & Acceptance (Index 52-67)
    52:'integrasi', 53:'integrasi', 54:'integrasi', 55:'stub_mock', 56:'stub_mock',
    57:'stub_mock', 58:'uat_oat', 59:'uat_oat', 60:'alpha_beta', 61:'test_doubles',
    62:'test_doubles', 63:'integrasi', 64:'uat_oat', 65:'system', 66:'alpha_beta', 67:'stub_mock',

    // Bab 5: Penetration Testing (Index 68-83)
    68:'dasar_pentest', 69:'tools', 70:'tools', 71:'active_risk', 72:'spidering',
    73:'tipe_pentest', 74:'tipe_pentest', 75:'fase', 76:'fase', 77:'tools',
    78:'tools', 79:'fase', 80:'tools', 81:'tools', 82:'tipe_pentest', 83:'tools',

    // Bab 6: Law, Ethics & Cyber Crime (Index 84-99)
    84:'uu_ite', 85:'uu_ite', 86:'etika_hukum', 87:'gdpr', 88:'uu_pdp',
    89:'uu_ite', 90:'hukum_as', 91:'hukum_as', 92:'hukum_as', 93:'uu_ite',
    94:'regulasi_id', 95:'regulasi_id', 96:'kode_etik', 97:'etika_hukum', 98:'gdpr', 99:'uu_ite'
};`;

const regex = /const questionTopics = \{[\s\S]*?\};\n/;
content = content.replace(regex, newQuestionTopics + '\n');

fs.writeFileSync('uas-simulation.html', content);
console.log('Fixed Question Topics Mapping!');
