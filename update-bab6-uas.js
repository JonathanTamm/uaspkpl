const fs = require('fs');

const newBab6 = [
    // 84: tipe_hukum
    {bab:"bab6",q:"Seorang karyawan menggugat perusahaannya karena pemutusan hubungan kerja (PHK) sepihak. Kasus ini ditangani oleh pengadilan perselisihan hubungan industrial. Tipe hukum manakah yang mengatur sengketa ini?",options:["Criminal Law","Public Law","Civil Law","Constitutional Law"],answer:2,explanation:"Civil Law mengatur hubungan dan konflik (sengketa) antara organisasi dan orang/individu, termasuk perselisihan kerja."},
    // 85: policy_vs_law
    {bab:"bab6",q:"Seorang staf baru tidak sengaja melanggar kebijakan internal perusahaan tentang larangan menggunakan USB pribadi karena ia belum membaca handbook. Dalam pembelaan, ia berargumen 'saya belum tahu aturan itu'. Menurut konsep Policy vs Law, pembelaan ini...",options:["Tidak bisa diterima karena ignorance of policy is not acceptable","Bisa diterima karena ignorance of a policy is an acceptable defense","Tidak bisa diterima karena kebijakan sama kuatnya dengan hukum negara","Harus dibuktikan di pengadilan negeri"],answer:1,explanation:"Perbedaan kunci: tidak tahu policy bisa jadi pembelaan sah, tetapi tidak tahu hukum BUKAN pembelaan sah."},
    // 86: etika_hukum
    {bab:"bab6",q:"Sebuah startup social media mengumpulkan data lokasi GPS pengguna 24 jam tanpa henti untuk dijual ke pengiklan, padahal fitur aplikasinya hanya 'chat'. Secara ToS ini legal karena user sudah klik 'Agree'. Dari sisi etika profesi IT, prinsip apa yang dilanggar?",options:["Prinsip Atomicity","Prinsip Data Minimization","Prinsip Regression Testing","Prinsip Load Balancing"],answer:1,explanation:"Data Minimization (GDPR & UU PDP) mewajibkan hanya mengumpulkan data yang benar-benar diperlukan untuk tujuan layanan. GPS 24/7 untuk app chat = berlebihan dan tidak etis."},
    // 87: gdpr
    {bab:"bab6",q:"GDPR menetapkan 6 dasar hukum (legal basis) untuk pemrosesan data pribadi. Jika sebuah rumah sakit memproses data pasien tidak sadarkan diri untuk menyelamatkan nyawanya, dasar hukum yang berlaku adalah...",options:["Consent (persetujuan)","Contractual obligation","Vital interests","Legitimate interest"],answer:2,explanation:"Vital interests digunakan ketika pemrosesan diperlukan untuk melindungi kepentingan vital (nyawa) subjek data atau individu lain."},
    // 88: uu_pdp
    {bab:"bab6",q:"Sebuah e-commerce besar mengalami kebocoran data 10 juta akun pelanggan. Menurut UU PDP, berapa lama batas waktu maksimal untuk memberikan notifikasi tertulis kepada subjek data dan otoritas pengawas?",options:["1 × 24 jam","3 × 24 jam","7 × 24 jam","30 hari kerja"],answer:1,explanation:"UU PDP mewajibkan notifikasi breach dalam 3 × 24 jam kepada subjek data DAN otoritas pengawas perlindungan data."},
    // 89: uu_ite_pasal30
    {bab:"bab6",q:"UU ITE membagi tindakan hacking (Pasal 30) menjadi 3 tingkatan berdasarkan beratnya. Jika seseorang berhasil menerobos firewall dan bypass autentikasi server bank (level tertinggi), ia terjerat Pasal 30 ayat...",options:["Ayat (1) — sekadar mengakses tanpa hak: 6 tahun","Ayat (2) — mengakses untuk mendapatkan informasi: 7 tahun","Ayat (3) — mengakses dengan menerobos sistem keamanan: 8 tahun / Rp 800 juta","Ayat (4) — mengakses dengan merusak hardware: 15 tahun"],answer:2,explanation:"Pasal 30(3) = level tertinggi: menerobos sistem keamanan → maks 8 tahun / Rp 800 juta."},
    // 90: uu_ite_pasal34
    {bab:"bab6",q:"Seorang hacker membuat dan menjual software keylogger di dark web yang dirancang khusus untuk mencuri password internet banking. Pasal UU ITE manakah yang mengkriminalisasi pembuatan dan distribusi tools cybercrime ini?",options:["Pasal 30","Pasal 32","Pasal 34","Pasal 36"],answer:2,explanation:"Pasal 34 UU ITE mengkriminalisasi pembuatan, penjualan, distribusi, dan penyediaan perangkat/software khusus untuk kejahatan siber."},
    // 91: hukum_as
    {bab:"bab6",q:"Skandal keuangan Enron yang mengguncang Amerika pada awal 2000-an melahirkan undang-undang yang mengatur ketat pelaporan keuangan perusahaan publik. UU tersebut adalah...",options:["CFAA","ECPA","Sarbanes-Oxley Act (SOX)","SAFE Act"],answer:2,explanation:"SOX lahir dari skandal Enron fraud. Mengatur akurasi pelaporan keuangan dan akuntabilitas tata kelola perusahaan publik."},
    // 92: hukum_as_eea
    {bab:"bab6",q:"Seorang karyawan perusahaan teknologi AS ditangkap karena mencuri blueprint chip dan menyerahkannya ke perusahaan asing yang didanai pemerintah China. Ia dijerat menggunakan...",options:["DMCA","HIPAA","Economic Espionage Act (EEA)","Federal Privacy Act"],answer:2,explanation:"EEA (1996) mengkriminalisasi pencurian trade secrets yang dimaksudkan untuk menguntungkan pemerintah atau entitas asing."},
    // 93: uu_ite_pasal32
    {bab:"bab6",q:"Seorang insider di perusahaan diam-diam menyalin dan mentransfer ribuan dokumen kontrak klien ke USB pribadinya untuk dijual ke pihak lain. Pasal UU ITE yang mengkriminalisasi pencurian dokumen elektronik ini adalah...",options:["Pasal 30","Pasal 31","Pasal 32","Pasal 35"],answer:2,explanation:"Pasal 32 UU ITE mengkriminalisasi transfer, penyembunyian, atau penyebaran dokumen elektronik milik orang lain tanpa hak (Electronic Theft)."},
    // 94: bssn
    {bab:"bab6",q:"Peraturan BSSN No. 8 Tahun 2020 mewajibkan Penyelenggara Sistem Elektronik (PSE) untuk membangun sistem manajemen keamanan informasi. Peraturan ini berfungsi sebagai...",options:["UU utama kejahatan siber Indonesia","Baseline standar keamanan siber (cybersecurity standard) untuk PSE di Indonesia","Regulasi khusus perlindungan hak cipta digital","Standar kecepatan internet minimum"],answer:1,explanation:"BSSN Reg 8/2020 = baseline cybersecurity standard untuk PSE. Mewajibkan ISMS, governance, risk assessment, monitoring, incident response."},
    // 95: acm
    {bab:"bab6",q:"Kode etik ACM memiliki 4 pilar. Pilar 'General Ethical Principles' mencakup prinsip-prinsip berikut, KECUALI...",options:["Contribute to Society","Avoid Harm","Be Honest and Trustworthy","Maximize Company Profit"],answer:3,explanation:"4 prinsip etika umum ACM: Contribute to Society, Avoid Harm, Be Honest & Trustworthy, Respect Privacy. Maximizing profit bukan bagiannya."},
    // 96: isc2
    {bab:"bab6",q:"Canon pertama (ISC)² yang menjadi fondasi utama kode etik profesional keamanan siber (CISSP) berbunyi...",options:["Act honorably, honestly, justly, responsibly, and legally","Provide diligent and competent service to principals","Advance and protect the profession","Protect society, the common good, and the infrastructure"],answer:3,explanation:"Canon I (ISC)²: Protect society, the common good, and the infrastructure — melindungi masyarakat di atas segalanya."},
    // 97: uu_pdp_prinsip
    {bab:"bab6",q:"UU PDP memiliki 8 prinsip perlindungan data. Prinsip yang menyatakan bahwa data pribadi harus dimusnahkan/dihapus setelah masa retensi berakhir disebut...",options:["Purpose-bound Processing","Accuracy & Accountability","Destruction after Retention","Security Protection"],answer:2,explanation:"Prinsip ke-7 UU PDP: data harus dimusnahkan/dihapus setelah masa retensi habis atau atas permintaan subjek data."},
    // 98: pentest_ilegal
    {bab:"bab6",q:"Seorang mahasiswa IT iseng melakukan scanning port dan mencoba exploit pada website kampusnya tanpa izin rektor, meskipun niatnya 'hanya ingin membantu menemukan bug'. Menurut UU ITE, tindakannya...",options:["Diperbolehkan karena berniat baik dan untuk kepentingan akademis","Tetap ilegal karena Pasal 30 UU ITE tidak membedakan niat baik/buruk — akses tanpa hak = hacking","Hanya dikenakan teguran lisan dari dosen pembimbing","Legal selama ia tidak mencuri data apapun"],answer:1,explanation:"UU ITE Pasal 30: pentest tanpa izin = unauthorized access (hacking), terlepas niat baik maupun buruk."},
    // 99: copyright
    {bab:"bab6",q:"Menurut Copyright Act of 1976 (AS), perlindungan hak cipta atas sebuah karya (termasuk software) berlaku...",options:["Hanya setelah didaftarkan ke U.S. Copyright Office","Secara otomatis sejak karya tersebut diciptakan dan dituangkan dalam media berwujud","Hanya jika karya tersebut telah dipublikasikan secara komersial","Hanya untuk karya yang bernilai lebih dari $1000"],answer:1,explanation:"Copyright Act 1976: perlindungan hak cipta muncul secara otomatis saat karya diciptakan (fixed in tangible medium), tanpa perlu registrasi."}
];

let html = fs.readFileSync('uas-simulation.html', 'utf8');

// Find the Bab 6 section. It starts after the last Bab 5 question.
// We need to replace from the BAB 6 comment to the end of the array (]);

const bab6Start = html.indexOf('// ===== BAB 6:');
const arrayEnd = html.indexOf('];', bab6Start);

if (bab6Start !== -1 && arrayEnd !== -1) {
    // Build new Bab 6 content
    let newContent = '// ===== BAB 6: LAW, ETHICS & CYBER CRIME =====\n';
    newBab6.forEach((q, idx) => {
        const isLast = idx === newBab6.length - 1;
        newContent += '    ' + JSON.stringify(q) + (isLast ? '\n' : ',\n');
    });

    const newHtml = html.substring(0, bab6Start) + newContent + html.substring(arrayEnd);
    fs.writeFileSync('uas-simulation.html', newHtml);
    console.log('Successfully replaced Bab 6 with 16 new varied questions covering new material!');
} else {
    console.error('Could not find Bab 6 section. bab6Start:', bab6Start, 'arrayEnd:', arrayEnd);
}
