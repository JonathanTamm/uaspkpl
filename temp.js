
// ===== REVIEW MATERIAL DATABASE =====
const reviewMaterial = {
    bab1: {
        title: 'Bab 1: Database Security',
        topics: {
            'sql_injection': {
                title: 'SQL Injection',
                content: `<p>Mencegah SQL Injection paling efektif dengan menggunakan <strong>Parameterized Statements (Prepared Statements)</strong> karena memperlakukan input murni sebagai data, bukan perintah.</p>`
            },
            'acid': {
                title: 'Prinsip ACID',
                content: `<ul>
<li><strong>Atomicity</strong>: All-or-nothing (sukses semua atau gagal semua).</li>
<li><strong>Consistency</strong>: Transisi database dari state valid ke valid lainnya.</li>
<li><strong>Isolation</strong>: Tidak bisa baca data transaksi yang belum selesai (Dirty Read).</li>
<li><strong>Durability</strong>: Data permanen meskipun mati lampu (tahan banting).</li>
</ul>`
            },
            'rbac': {
                title: 'Role-Based Access Control (RBAC)',
                content: `<p>Memberikan akses berdasarkan <strong>Role</strong> (peran), bukan per individu. Sangat penting untuk menerapkan prinsip <em>Least Privilege</em>.</p>`
            },
            'encryption': {
                title: 'Encryption & Key Management',
                content: `<p>Kunci enkripsi harus dikelola terpisah dari data, dilindungi aksesnya, dan <strong>dirotasi (diganti) secara berkala</strong>.</p>`
            }
        }
    },

    bab2: {
        title: 'Bab 2: Unit Testing',
        topics: {
            'prinsip': {
                title: 'Prinsip-Prinsip Unit Testing',
                content: `<strong>4 Prinsip Utama Unit Testing:</strong>
<ul>
<li><strong>Isolasi</strong> — Setiap tes berdiri sendiri, tidak tergantung komponen lain (database, API, dll)</li>
<li><strong>Independen</strong> — Urutan menjalankan tes tidak mempengaruhi hasil. Tes A bisa jalan duluan atau tes B duluan</li>
<li><strong>Cepat</strong> — Unit test harus jalan dalam hitungan milidetik</li>
<li><strong>Fokus</strong> — Setiap tes hanya menguji SATU hal saja</li>
</ul>
<p>💡 <strong>Tips Hafalan: "IICF"</strong> — Isolasi, Independen, Cepat, Fokus</p>`
            },
            'owasp_access': {
                title: 'OWASP: Broken Access Control',
                content: `<p><strong>Broken Access Control (A1)</strong> = User bisa mengakses sesuatu yang <strong>seharusnya tidak boleh</strong>.</p>
<ul>
<li>Contoh: User biasa (guest) bisa masuk ke halaman admin</li>
<li>Unit Test: Uji bahwa fungsi otorisasi <strong>menolak akses</strong> jika role tidak sesuai</li>
<li>Kode tes: <code>assert result == "Access Denied"</code></li>
</ul>`
            },
            'owasp_crypto': {
                title: 'OWASP: Cryptographic Failures',
                content: `<p><strong>Cryptographic Failures (A2)</strong> = Kegagalan melindungi data sensitif.</p>
<ul>
<li>Contoh: Password disimpan sebagai <strong>plain text</strong> (tidak di-hash)</li>
<li>Unit Test: Pastikan password yang disimpan <strong>≠ password asli</strong></li>
<li>Kode tes: <code>assert hashed != password</code></li>
</ul>`
            },
            'owasp_injection': {
                title: 'OWASP: SQL Injection',
                content: `<p><strong>Injection (A3)</strong> = Penyerang menyisipkan kode berbahaya melalui input.</p>
<ul>
<li>Payload klasik: <code>' OR 1=1 --</code></li>
<li>Unit Test: Pastikan input berbahaya <strong>ditolak</strong></li>
<li>Kode tes: <code>assert result == "Login Failed"</code> saat input mengandung SQL injection</li>
</ul>`
            },
            'owasp_design': {
                title: 'OWASP: Insecure Design',
                content: `<p><strong>Insecure Design (A4)</strong> = Desain aplikasi yang dari awal <strong>tidak memikirkan keamanan</strong>.</p>
<ul>
<li>Contoh: Tidak ada pembatasan percobaan login (brute force) — tidak ada rate limiting/lockout</li>
<li>Unit Test: Uji bahwa akun terkunci setelah beberapa kali gagal login</li>
</ul>`
            },
            'owasp_misconfig': {
                title: 'OWASP: Security Misconfiguration',
                content: `<p><strong>Security Misconfiguration (A5)</strong> = Konfigurasi keamanan yang salah.</p>
<ul>
<li>Contoh: <strong>Debug mode aktif di production</strong>, password default</li>
<li>Unit Test: Pastikan <code>config["DEBUG"] == False</code> di production</li>
</ul>`
            },
            'owasp_logging': {
                title: 'OWASP: Security Logging Failures',
                content: `<p><strong>Security Logging & Monitoring Failures (A9)</strong> = Aktivitas keamanan <strong>tidak dicatat</strong>.</p>
<ul>
<li>Contoh: Gagal login tidak dicatat di log → serangan tidak terdeteksi</li>
<li>Unit Test: Pastikan event <code>"Failed login attempt"</code> tercatat di log</li>
</ul>`
            },
            'owasp_ssrf': {
                title: 'OWASP: SSRF (Server-Side Request Forgery)',
                content: `<p><strong>SSRF (A10)</strong> = Server dipaksa melakukan request ke resource internal yang seharusnya diblokir.</p>
<ul>
<li>Contoh: Penyerang mengarahkan server ke <code>http://localhost/admin</code></li>
<li>Unit Test: Pastikan URL internal <strong>diblokir</strong></li>
</ul>`
            },
            'owasp_components': {
                title: 'OWASP: Vulnerable & Outdated Components',
                content: `<p><strong>Vulnerable Components (A6)</strong> = Menggunakan library/framework yang sudah <strong>kadaluarsa</strong> dan memiliki celah keamanan.</p>
<ul>
<li>Solusi: Rutin update dependency dan cek CVE database</li>
</ul>`
            },
            'mocking': {
                title: 'Mocking & Isolation',
                content: `<p><strong>Mocking</strong> = Mengganti dependency eksternal dengan objek tiruan agar tes tetap <strong>terisolasi</strong>.</p>
<ul>
<li>Tujuan: Unit test tetap cepat dan tidak tergantung database/API sungguhan</li>
<li>Memungkinkan simulasi skenario sulit (jaringan putus, server error)</li>
</ul>`
            },
            'framework': {
                title: 'Framework Unit Testing',
                content: `<p><strong>Framework populer yang WAJIB dihapal:</strong></p>
<ul>
<li><strong>Java → JUnit</strong> (paling standar)</li>
<li><strong>Python → Pytest</strong> (paling populer)</li>
<li><strong>JavaScript → Jest</strong> (untuk React/Node.js)</li>
<li>C#/.NET → xUnit, PHP → PHPUnit, Go → testing (built-in)</li>
</ul>`
            },
            'keuntungan': {
                title: 'Keuntungan Unit Testing',
                content: `<ul>
<li><strong>Deteksi Bug Lebih Awal</strong> — Bug ditemukan saat coding, bukan saat deploy</li>
<li><strong>Refactoring Lebih Aman</strong> — Ada jaring pengaman saat ubah kode</li>
<li><strong>Dokumentasi Hidup</strong> — Tes menjelaskan expected behavior fungsi</li>
</ul>`
            }
        }
    },
    bab3: {
        title: 'Bab 3: Regression Testing',
        topics: {
            'dasar': {
                title: 'Dasar Regression Testing',
                content: `<p><strong>Regression Testing</strong> = Memastikan perubahan kode <strong>tidak merusak fitur lama</strong>.</p>
<p>Dilakukan setiap kali ada: bug fix, fitur baru, refactoring, update dependency.</p>`
            },
            'retesting': {
                title: 'Retesting vs Regression Testing',
                content: `<ul>
<li><strong>Retesting</strong> = Verifikasi <strong>bug yang di-fix sudah benar-benar fix</strong> (scope sempit)</li>
<li><strong>Regression</strong> = Verifikasi <strong>perubahan tidak merusak area lain</strong> (scope luas)</li>
</ul>
<p>💡 Re-testing = "Apakah bug-nya fix?" | Regression = "Apakah hal lain ikut rusak?"</p>`
            },
            'cicd': {
                title: 'Regression Testing dalam CI/CD',
                content: `<p>Peran utama dalam CI/CD: <strong>Menjaga stabilitas build</strong></p>
<ul>
<li>Developer push kode → CI server otomatis jalankan regression test → Jika gagal = build FAILED</li>
<li>Memastikan setiap perubahan tidak merusak fungsionalitas yang ada</li>
</ul>`
            },
            'tipe': {
                title: 'Tipe-Tipe Regression Testing',
                content: `<ul>
<li><strong>Corrective</strong> — Tidak ada perubahan kode, cek tes lama masih valid</li>
<li><strong>Progressive</strong> — Ada perubahan kode, tes mungkin perlu di-update</li>
<li><strong>Selective</strong> — Hanya subset tes yang relevan</li>
<li><strong>Complete/Full</strong> — Seluruh test suite dijalankan</li>
</ul>`
            },
            'seleksi': {
                title: 'Strategi Seleksi Test Case',
                content: `<ul>
<li><strong>Risk-based</strong> — Prioritas area paling kritis/berisiko</li>
<li><strong>Coverage-based</strong> — Tes yang mencakup area kode yang berubah</li>
<li><strong>Dependency-based</strong> — Modul yang saling terhubung/tergantung</li>
</ul>`
            },
            'update': {
                title: 'Pentingnya Update Test Suite',
                content: `<p>Jika test suite <strong>tidak pernah di-update</strong>, bug baru pada fitur yang ditambahkan <strong>tidak akan terdeteksi</strong>.</p>`
            },
            'rpa': {
                title: 'RPA & UI.Vision',
                content: `<p><strong>RPA</strong> = Software robot untuk otomatisasi tugas repetitif.</p>
<p><strong>UI.Vision</strong> = Tool RPA open-source untuk regression testing berbasis UI — merekam dan memutar ulang interaksi user.</p>`
            },
            'loadtest': {
                title: 'Load Testing vs Regression Testing',
                content: `<ul>
<li><strong>Load Testing</strong> = Menguji <strong>performa</strong> di bawah beban</li>
<li><strong>Regression</strong> = Menguji <strong>fungsionalitas</strong> setelah perubahan</li>
</ul>`
            }
        }
    },
    bab4: {
        title: 'Bab 4: Integration, System & Acceptance Testing',
        topics: {
            'integrasi': {
                title: 'Pendekatan Integration Testing',
                content: `<ul>
<li><strong>Big Bang</strong> — Semua komponen digabung sekaligus. Sulit cari sumber error</li>
<li><strong>Top-Down</strong> — Dari atas ke bawah, pakai <strong>Stub</strong> (pengganti modul bawah)</li>
<li><strong>Bottom-Up</strong> — Dari bawah ke atas, pakai <strong>Driver</strong> (pengganti modul atas)</li>
</ul>`
            },
            'stub_mock': {
                title: 'Stub vs Mock (PALING PENTING!)',
                content: `<ul>
<li><strong>Stub</strong> = Nilai <strong>statis/hardcoded</strong> → State verification → Cek HASIL<br>Contoh: <code>return "LUNAS"</code> selalu</li>
<li><strong>Mock</strong> = <strong>Dinamis</strong> → Behavior verification → Cek apakah METHOD DIPANGGIL<br>Contoh: <code>verify(mock).sendEmail("user@mail.com")</code></li>
</ul>
<p>💡 Stub = <strong>S</strong>tatis + <strong>S</strong>tate | Mock = <strong>M</strong>onitoring + <strong>M</strong>ethod call</p>`
            },
            'test_doubles': {
                title: 'Test Doubles Lainnya',
                content: `<ul>
<li><strong>Dummy</strong> — Pengisi parameter saja, tidak benar-benar digunakan</li>
<li><strong>Fake</strong> — Implementasi nyata tapi disederhanakan (misal in-memory database)</li>
</ul>`
            },
            'uat_oat': {
                title: 'UAT vs OAT',
                content: `<ul>
<li><strong>UAT</strong> (User Acceptance Testing) — Oleh <strong>pengguna akhir</strong> → "Apakah ini yang saya butuhkan?"<br>Contoh: Mahasiswa coba fitur IRS di SIAKAD</li>
<li><strong>OAT</strong> (Operational Acceptance Testing) — Oleh <strong>tim IT/operasional</strong> → "Apakah bisa di-deploy?"<br>Contoh: Admin IT backup & restore database</li>
</ul>`
            },
            'alpha_beta': {
                title: 'Alpha vs Beta Testing',
                content: `<ul>
<li><strong>Alpha</strong> = Di lingkungan <strong>internal</strong> (pengembang)</li>
<li><strong>Beta</strong> = Di lingkungan <strong>eksternal</strong> (user sungguhan)</li>
</ul>
<p>💡 Alpha = Awal = di dalam | Beta = Belakangan = di luar</p>`
            },
            'system': {
                title: 'System Testing',
                content: `<p>Menguji <strong>keseluruhan sistem</strong> sebagai satu kesatuan utuh. Jenis: Functional, Performance, Security, Compatibility, Usability, Recovery.</p>`
            }
        }
    },
    bab5: {
        title: 'Bab 5: Penetration Testing',
        topics: {
            'dasar_pentest': {
                title: 'Konsep Dasar Pentest',
                content: `<p>Pentest = Simulasi serangan nyata untuk menemukan kerentanan.</p>
<p>⚠️ <strong>PENTING:</strong> Pentest <strong>TIDAK bisa membuktikan sistem 100% aman</strong>, hanya menunjukkan kerentanan yang ditemukan.</p>`
            },
            'tipe_pentest': {
                title: 'Tipe Pentest: Black, White, Gray Box',
                content: `<ul>
<li><strong>Black Box</strong> = "Gelap" → Tidak tahu apa-apa → Simulasi hacker luar</li>
<li><strong>White Box</strong> = "Terang" → Tahu semua → Simulasi orang dalam (insider)</li>
<li><strong>Gray Box</strong> = "Abu-abu" → Tahu sebagian → Simulasi user dengan akses terbatas</li>
</ul>`
            },
            'fase': {
                title: '7 Fase Penetration Testing',
                content: `<ol>
<li><strong>Pre-engagement</strong> — Kontrak, scope, aturan main</li>
<li><strong>Reconnaissance</strong> — Kumpulkan info (Passive: tanpa sentuh target | Active: sentuh target langsung)</li>
<li><strong>Threat Modeling</strong> — Identifikasi ancaman & prioritas</li>
<li><strong>Vulnerability Analysis</strong> — Cari celah keamanan</li>
<li><strong>Exploitation</strong> — Serang! Eksploitasi celah</li>
<li><strong>Post-Exploitation</strong> — Nilai dampak setelah berhasil masuk</li>
<li><strong>Reporting</strong> — Buat laporan lengkap</li>
</ol>`
            },
            'tools': {
                title: 'Tools Pentest (WAJIB HAPAL!)',
                content: `<ul>
<li><strong>Nmap</strong> = Port scanning & network discovery</li>
<li><strong>Nessus</strong> = Vulnerability scanner</li>
<li><strong>Metasploit</strong> = Exploitation framework (menyerang)</li>
<li><strong>Burp Suite</strong> = Intercept trafik HTTP/HTTPS</li>
<li><strong>SQLmap</strong> = Otomatisasi SQL Injection</li>
<li><strong>Wireshark</strong> = Packet sniffing (tangkap paket jaringan)</li>
<li><strong>Dradis</strong> = Reporting tool</li>
</ul>`
            },
            'spidering': {
                title: 'Spidering / Crawling',
                content: `<p>Memetakan <strong>seluruh struktur aplikasi web</strong> — semua URL, halaman, form, endpoint. BUKAN untuk menyerang.</p>`
            },
            'active_risk': {
                title: 'Risiko Active Scanning',
                content: `<p>Active scanning intensif berisiko <strong>mengganggu layanan</strong> (service disruption) karena bisa membuat server overload.</p>`
            }
        }
    },
    bab6: {
        title: 'Bab 6: Law, Ethics & Cyber Crime',
        topics: {
            'etika_hukum': {
                title: 'Etika vs Hukum',
                content: `<ul>
<li><strong>Etika</strong> = Prinsip <strong>moral</strong> (subyektif) → Sanksi sosial</li>
<li><strong>Hukum</strong> = Aturan <strong>negara</strong> (obyektif) → Sanksi pidana (denda/penjara)</li>
</ul>
<p>Sesuatu bisa legal tapi tidak etis (misal: jual data user yang sudah di-agree di ToS)</p>`
            },
            'uu_ite': {
                title: 'UU ITE — Pasal-Pasal Penting',
                content: `<ul>
<li><strong>Pasal 30</strong> = <strong>Hacking</strong> / akses ilegal → <strong>Maks 8 tahun + Rp 800 juta</strong></li>
<li><strong>Pasal 31</strong> = <strong>Intersepsi</strong> / penyadapan</li>
<li><strong>Pasal 33</strong> = <strong>Malware</strong> / gangguan sistem</li>
<li><strong>Pasal 35</strong> = <strong>Pencurian identitas</strong> / manipulasi data</li>
</ul>
<p>💡 Urutan: Hack → Sadap → Virus → Palsu (30-31-33-35)</p>`
            },
            'uu_pdp': {
                title: 'UU PDP (UU No. 27/2022)',
                content: `<p>Data pribadi dibedakan menjadi:</p>
<ul>
<li><strong>Umum (General)</strong> — Nama, email, nomor telepon</li>
<li><strong>Spesifik (Specific)</strong> — Data kesehatan, biometrik, catatan keuangan</li>
</ul>`
            },
            'gdpr': {
                title: 'GDPR (General Data Protection Regulation)',
                content: `<p>Regulasi perlindungan data dari <strong>Uni Eropa</strong>.</p>
<ul>
<li>Pemrosesan data harus punya <strong>tujuan yang sah</strong> (legitimate purpose)</li>
<li><strong>Right to Erasure</strong> = Hak meminta data dihapus (right to be forgotten)</li>
<li>Data minimization — hanya kumpulkan data yang diperlukan</li>
</ul>`
            },
            'hukum_as': {
                title: 'Hukum Siber AS',
                content: `<ul>
<li><strong>CFAA</strong> = Kejahatan komputer (hacking)</li>
<li><strong>DMCA</strong> = Hak cipta digital</li>
<li><strong>HIPAA</strong> = Data kesehatan pasien</li>
<li><strong>ECPA</strong> = Privasi komunikasi elektronik</li>
</ul>`
            },
            'regulasi_id': {
                title: 'Regulasi Indonesia Lainnya',
                content: `<ul>
<li><strong>UU 28/2014</strong> = Hak Cipta (termasuk software)</li>
<li><strong>UU 30/2000</strong> = Rahasia Dagang (trade secret)</li>
</ul>`
            },
            'kode_etik': {
                title: 'Kode Etik Profesi IT',
                content: `<ul>
<li><strong>ACM</strong> = Computing / Programming</li>
<li><strong>(ISC)²</strong> = Cybersecurity (sertifikasi <strong>CISSP</strong>)</li>
<li><strong>ISACA</strong> = IT Governance & Audit</li>
</ul>`
            }
        }
    }
};

// ===== QUESTION-TO-TOPIC MAPPING =====
const questionTopics = {
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
};

const allQuestions = [

    // ===== BAB 1: DATABASE SECURITY =====
    {"bab":"bab1","q":"Jika sebuah hardisk server dicuri dari data center, teknologi apa yang paling menjamin bahwa data nasabah di dalamnya tidak dapat dibaca oleh pencuri?","options":["Firewall jaringan","Encryption in transit","Data-at-rest encryption","Role-Based Access Control"],"answer":2,"explanation":"Encryption at rest melindungi data secara fisik ketika tersimpan di dalam disk/media penyimpanan."},
    {"bab":"bab1","q":"Dalam implementasi enkripsi database, mengapa administrator sangat disarankan untuk melakukan 'key rotation' secara berkala?","options":["Untuk menghemat ruang penyimpanan di server","Membatasi periode berlakunya sebuah kunci sehingga kerugian bisa diminimalisir jika kunci tersebut bocor","Mempercepat proses dekripsi data saat diakses oleh pengguna","Mencegah terjadinya SQL Injection pada tabel enkripsi"],"answer":1,"explanation":"Key rotation bertujuan membatasi waktu paparan (exposure) sebuah kunci, memperkecil jendela waktu bagi attacker jika kunci berhasil diretas."},
    {"bab":"bab1","q":"Ketika nasabah A mentransfer uang ke nasabah B, sistem menjamin bahwa saldo A berkurang dan saldo B bertambah. Jika saat proses penambahan saldo B server mati, sistem membatalkan pengurangan saldo A. Sifat ACID apakah yang mencegah terjadinya pembaruan sebagian (partial update) ini?","options":["Atomicity","Consistency","Isolation","Durability"],"answer":0,"explanation":"Atomicity adalah prinsip All-or-Nothing. Transaksi berhasil seluruhnya atau tidak sama sekali."},
    {"bab":"bab1","q":"Seorang peretas memasukkan input ' UNION SELECT username, password FROM users -- pada sebuah fitur pencarian produk. Metode pertahanan manakah yang paling efektif mencegah kueri berbahaya ini dieksekusi?","options":["Mengganti database menjadi NoSQL","Mengenkripsi seluruh data produk","Memanfaatkan Parameterized Statements","Menonaktifkan fitur pencarian"],"answer":2,"explanation":"Parameterized statements mencegah input (seperti UNION SELECT) dieksekusi sebagai perintah dan memaksanya menjadi sekadar teks data."},
    {"bab":"bab1","q":"Sebuah transaksi A melakukan perhitungan total pendapatan hari ini. Di saat yang bersamaan, transaksi B berhasil menyisipkan data transaksi penjualan baru ke dalam tabel. Saat transaksi A mengulang kueri, ia mendapati total pendapatannya berubah karena adanya baris tambahan. Anomali konkurensi apakah ini?","options":["Dirty read","Lost update","Non-repeatable read","Phantom read"],"answer":3,"explanation":"Phantom read terjadi ketika sebuah transaksi melihat adanya baris-baris 'hantu' (tambahan/kurangan) yang muncul karena transaksi lain saat kondisi pencarian yang sama diulang."},
    {"bab":"bab1","q":"Manajer HRD baru saja dipromosikan. Administrator database cukup memindahkan akunnya dari grup 'Staff' ke grup 'Manager' tanpa perlu mengatur ulang izin per tabel. Mekanisme keamanan apa yang digunakan?","options":["Mandatory Access Control","Role-Based Access Control (RBAC)","Encryption at Rest","Database Auditing"],"answer":1,"explanation":"RBAC memungkinkan pengaturan hak akses berbasis peran (grup), bukan mengaturnya per individu/tabel secara manual."},
    {"bab":"bab1","q":"Sebuah aplikasi sering mengalami upaya serangan SQL Injection. Untuk mengurangi risiko secara mendasar, arsitek sistem memutuskan untuk menggunakan ORM (Object-Relational Mapping). Mengapa ORM membantu mencegah SQL Injection?","options":["Secara otomatis memblokir IP address penyerang","Mengenkripsi semua kolom yang rentan secara default","Menerapkan parameterized statements secara otomatis di bawah layar","Menolak semua karakter khusus (spesial) dari input pengguna"],"answer":2,"explanation":"Kebanyakan ORM modern secara otomatis mengemas kuerinya dalam bentuk parameterized statements, menetralisir input berbahaya."},
    {"bab":"bab1","q":"Dalam sistem perbankan, aturan menyatakan bahwa saldo tidak boleh di bawah nol (minus). Sifat ACID mana yang memastikan bahwa setelah suatu transaksi selesai, aturan saldo minimal ini tidak pernah dilanggar?","options":["Atomicity","Consistency","Isolation","Durability"],"answer":1,"explanation":"Consistency memastikan bahwa database selalu berpindah dari satu kondisi valid ke kondisi valid lainnya tanpa melanggar constraints/aturan bisnis."},
    {"bab":"bab1","q":"Prinsip Least Privilege dalam konteks RBAC diterapkan dengan cara...","options":["Memberikan hak akses Superadmin kepada semua pengguna untuk menghindari masalah akses","Hanya memberikan privileges (izin) yang benar-benar dibutuhkan oleh suatu peran untuk melakukan pekerjaannya","Menghapus semua peran (roles) setiap akhir minggu dan membuatnya ulang","Melarang semua akses read/write ke tabel penting"],"answer":1,"explanation":"Least privilege berarti pengguna hanya diberi izin sekecil mungkin yang diperlukan untuk menjalankan perannya, meminimalisir risiko eksploitasi."},
    {"bab":"bab1","q":"Selain menggunakan Parameterized Statements, praktik manakah yang juga direkomendasikan dalam konsep Defense in Depth untuk mencegah dampak SQL Injection?","options":["Menyimpan kata sandi database dalam file teks biasa","Menerapkan Input Validation dan membatasi hak akses akun database (Least Privilege)","Menjalankan aplikasi web dan database pada server fisik yang sama","Menghilangkan semua validasi di sisi client (frontend)"],"answer":1,"explanation":"Input validation menolak data cacat di awal, dan Least Privilege memastikan penyerang tidak bisa merusak sistem terlalu jauh seandainya SQLi berhasil."},
    {"bab":"bab1","q":"Dua staf mencoba memperbarui data kontak pelanggan yang sama secara bersamaan. Jika staf A memperbarui email dan staf B memperbarui nomor telepon, lalu sistem mengizinkan keduanya sehingga update A hilang tertimpa oleh B. Fenomena ini disebut...","options":["Deadlock","Phantom read","Lost update","Dirty read"],"answer":2,"explanation":"Lost update terjadi saat pembaruan dari satu transaksi tertimpa (hilang) oleh transaksi lain tanpa terdeteksi."},
    {"bab":"bab1","q":"Level isolasi 'Serializable' memberikan tingkat keamanan tertinggi terhadap anomali data, namun jarang digunakan secara default. Apa alasan utama keengganan menggunakan level isolasi ini?","options":["Menghapus data lama secara otomatis","Mengurangi performa dan meningkatkan risiko terjadinya Deadlock karena banyaknya lock yang ditahan","Tidak mendukung transaksi yang melibatkan banyak tabel","Memicu terjadinya SQL Injection"],"answer":1,"explanation":"Serializable sangat aman tapi sangat lambat dan rawan Deadlock karena transaksi dikunci dan diproses seperti mengantre satu per satu."},
    {"bab":"bab1","q":"Ketika seorang pegawai dipinjamkan ke departemen lain selama dua minggu, admin menambahkannya ke role departemen tersebut dan akan mencabutnya otomatis setelah dua minggu. Konsep RBAC apa yang ditunjukkan?","options":["Role Hierarchy","Policy Administration","Privilege Granularity","Dynamic Assignment"],"answer":3,"explanation":"Dynamic assignment adalah penugasan ke dalam suatu role secara dinamis/sementara berdasarkan kebutuhan situasi."},
    {"bab":"bab1","q":"Di antara pernyataan berikut, manakah yang merupakan salah kaprah (mitos) umum mengenai SQL Injection?","options":["Bisa dicegah sepenuhnya dengan memfilter karakter kutip tunggal (') saja","Terjadi karena percampuran antara data dan perintah SQL","Bisa berdampak pencurian seluruh data database","Dapat dicegah secara efektif menggunakan prepared statements"],"answer":0,"explanation":"Hanya memfilter tanda kutip tidak cukup (masih bisa di-bypass, misalnya SQLi bertipe numerik yang tidak butuh kutip). Prepared statements adalah jalan keluarnya."},
    {"bab":"bab1","q":"Transaksi X membaca stok barang berjumlah 10. Transaksi Y tiba-tiba membeli 5 barang dan sudah berhasil commit. Saat Transaksi X membaca ulang stok untuk konfirmasi, jumlahnya berubah menjadi 5. Anomali ini dinamakan...","options":["Phantom read","Non-repeatable read","Dirty read","Lost update"],"answer":1,"explanation":"Non-repeatable read: membaca baris yang sama dua kali dan mendapatkan nilai (isi) yang berbeda karena sudah dimodifikasi oleh transaksi lain yang sudah commit."},
    {"bab":"bab1","q":"Di perusahaan besar, sangat sulit mengelola ribuan akses individu. RBAC menyelesaikannya dengan cara 'Policy Administration' tersentralisasi. Keuntungan utama dari pendekatan ini adalah...","options":["Database tidak pernah mengalami crash","Admin cukup mengelola privileges pada level Role, sehingga saat individu masuk/keluar hanya perlu diatur rolenya","Enkripsi database berjalan 100% lebih cepat","Setiap pengguna dapat menentukan hak aksesnya masing-masing"],"answer":1,"explanation":"Policy Administration tersentralisasi memudahkan admin mengatur hak akses via grup/Role, membuat administrasi pengguna masif menjadi jauh lebih efisien."},
    {"bab":"bab1","q":"Level isolasi apa yang diperlukan secara minimum untuk mencegah 'Dirty Read' (membaca data yang belum di-commit oleh orang lain)?","options":["Read uncommitted","Read committed","Repeatable read","Serializable"],"answer":1,"explanation":"Read committed adalah level isolasi paling minimum untuk memastikan transaksi hanya bisa membaca data yang sudah pasti di-commit (mencegah dirty read)."},
    {"bab":"bab1","q":"Selain mengenkripsi data di dalam storage (at rest), aplikasi perbankan modern juga mengenkripsi data saat dikirim lewat jaringan menggunakan protokol SSL/TLS. Jenis perlindungan ini disebut...","options":["Data-in-use encryption","Data-in-transit encryption","Transparent Data Encryption","Symmetric Cryptography"],"answer":1,"explanation":"Data-in-transit encryption bertugas melindungi data saat bergerak (ditransmisikan) melintasi jaringan."},
    {"bab":"bab1","q":"Seorang analis keamanan menemukan bahwa sistem aplikasi rentan terhadap SQLi berjenis 'Blind SQL Injection'. Apa karakteristik utama dari serangan ini?","options":["Penyerang melihat pesan error database yang sangat detail di layar browser","Aplikasi tidak mengembalikan pesan error sama sekali, sehingga penyerang harus menebak isi data berdasarkan perbedaan respons waktu atau halaman","Penyerang mengekstrak jutaan baris data sekaligus dalam hitungan detik","Serangan ini hanya bisa dilakukan oleh admin database internal"],"answer":1,"explanation":"Blind SQLi artinya penyerang tidak melihat hasil secara langsung (buta), tapi bisa mencuri data pelan-pelan dengan menanyakan kueri benar/salah (Yes/No)."},
    {"bab":"bab1","q":"Salah satu cara memperkecil scope kerusakan saat SQL Injection terjadi adalah membatasi akun koneksi database di aplikasi agar hanya punya hak akses minimal (misal, tidak bisa DROP TABLE). Ini merupakan aplikasi dari prinsip...","options":["Defense in Depth (Least Privilege)","Denial of Service","Symmetric Encryption","Database Clustering"],"answer":0,"explanation":"Menerapkan hak akses minimal (Least Privilege) pada kredensial koneksi memastikan bahwa attacker tak dapat menjebol/menghapus struktur penting meskipun SQLi tembus."},

    // ===== BAB 2: UNIT TESTING =====
    {"bab":"bab2","q":"Sebuah unit test memeriksa logika diskon keranjang belanja, tetapi gagal saat dijalankan di server karena tidak ada koneksi internet. Prinsip unit test manakah yang telah dilanggar?","options":["Isolasi","Cepat","Fokus","Lengkap"],"answer":0,"explanation":"Unit test harus terisolasi. Tes yang gagal hanya karena koneksi internet berarti ia tidak terisolasi dari sistem/jaringan eksternal."},
    {"bab":"bab2","q":"Dalam pengembangan CI/CD yang berjalan setiap hari, unit test harus selesai dalam hitungan detik. Mengapa prinsip 'Cepat' sangat fundamental bagi Unit Testing?","options":["Supaya aplikasi tidak memakan banyak memori RAM","Agar developer tidak malas menjalankan tes sesering mungkin dan segera mendapat feedback jika ada error","Karena compiler bahasa pemrograman memaksa tes harus cepat","Untuk mempercepat koneksi database"],"answer":1,"explanation":"Bila tes lambat, developer akan enggan menjalankannya. Tes yang cepat menjamin feedback instan saat coding."},
    {"bab":"bab2","q":"Saat menguji modul input username, test case memasukkan string panjang dengan karakter kontrol seperti '; DROP TABLE users; --'. Apa nama kerentanan (OWASP) yang sedang dicegah dalam tes ini?","options":["Insecure Design","Broken Access Control","Injection","SSRF"],"answer":2,"explanation":"Memasukkan syntax SQL berbahaya ke dalam input bertujuan menguji keamanan terhadap kerentanan Injection (SQLi)."},
    {"bab":"bab2","q":"Developer menulis unit test untuk memastikan fungsi deleteUser(id) melempar error jika dipanggil oleh user yang memiliki role 'Customer'. Tes ini secara langsung memitigasi risiko keamanan OWASP yaitu...","options":["Security Misconfiguration","Broken Access Control","Vulnerable Components","Cryptographic Failures"],"answer":1,"explanation":"Mencegah user biasa melakukan tugas admin (menghapus user) adalah perlindungan terhadap Broken Access Control."},
    {"bab":"bab2","q":"Test case Anda membaca field password dari objek User yang tersimpan, lalu melakukan 'assert' bahwa isi password tersebut tidak sama dengan plaintext yang di-input saat registrasi. Ini menguji mitigasi dari...","options":["Security Logging Failures","Cryptographic Failures","SSRF","Injection"],"answer":1,"explanation":"Menguji bahwa password disimpan dalam bentuk hash (tidak sama dengan plaintext) mencegah risiko Cryptographic Failures."},
    {"bab":"bab2","q":"Di samping SQL Injection, memasukkan skrip JavaScript berbahaya ke dalam input nama pengguna untuk melihat apakah aplikasi menetralisirnya (escaping) adalah bentuk uji pencegahan tipe Injection yang dikenal sebagai...","options":["Cross-Site Scripting (XSS)","SQLmap","Burp Suite","XML External Entities"],"answer":0,"explanation":"XSS juga masuk ke dalam rumpun Injection pada konteks browser klien (menyuntikkan skrip berbahaya)."},
    {"bab":"bab2","q":"Fungsi checkout pembayaran memanggil API Payment Gateway Stripe. Untuk memastikan unit test tidak mendebit kartu kredit sungguhan setiap kali dijalankan, teknik apa yang wajib digunakan?","options":["Stress Testing","Black Box Testing","Mocking / Stubbing","System Testing"],"answer":2,"explanation":"Mocking digunakan untuk memalsukan (mengganti) service eksternal seperti Stripe agar tes tetap lokal, cepat, dan aman."},
    {"bab":"bab2","q":"Seorang programmer React (JavaScript) ingin menulis unit test untuk komponen frontend-nya. Framework populer manakah yang merupakan standar de-facto untuk kebutuhan ini?","options":["Pytest","JUnit","NUnit","Jest"],"answer":3,"explanation":"Jest adalah framework testing paling dominan di ekosistem JavaScript (khususnya React)."},
    {"bab":"bab2","q":"Tim backend menggunakan Java Spring Boot. Manajer proyek menanyakan framework apa yang perlu di-install untuk menulis unit testing. Jawabannya adalah...","options":["Jest","Pytest","JUnit","xUnit"],"answer":2,"explanation":"JUnit adalah kerangka pengujian unit standar paling populer di ekosistem Java."},
    {"bab":"bab2","q":"Developer membuat satu fungsi unit test panjang yang menguji 5 fungsi matematis berbeda sekaligus. Jika fungsi gagal, developer kesulitan mencari tahu mana dari ke-5 fungsi itu yang rusak. Prinsip apakah yang diabaikan?","options":["Isolasi","Cepat","Fokus","Independen"],"answer":2,"explanation":"Prinsip Fokus menuntut satu unit test hanya menguji SATU skenario/perilaku saja agar saat gagal langsung ketahuan sumbernya."},
    {"bab":"bab2","q":"Sebuah unit test gagal karena setelah 10 kali percobaan password yang salah secara berturut-turut, akun pengguna masih belum terkunci. Tes ini didesain untuk mencegah eksploitasi Brute-Force yang tergolong dalam kerentanan...","options":["SSRF","Insecure Design","Cryptographic Failures","Broken Access Control"],"answer":1,"explanation":"Tidak adanya pembatasan/rate-limit (lockout) untuk perlindungan brute-force merupakan kelemahan arsitektur/Insecure Design."},
    {"bab":"bab2","q":"Unit test: 'assert config.isDebug == false' jika env = Production. Tes ini dibuat semata-mata untuk mencegah tereksposnya pesan error sensitif kepada publik, yang termasuk dalam kerentanan...","options":["Security Misconfiguration","Injection","Broken Access Control","Vulnerable Components"],"answer":0,"explanation":"Meninggalkan mode Debug menyala di server Production adalah contoh klasik Security Misconfiguration."},
    {"bab":"bab2","q":"Developer menyertakan unit test yang memantau output konsol untuk memastikan tulisan 'ALERT: Failed Login' dipanggil ketika pengguna salah memasukkan password. Tes ini menjaga sistem dari kelemahan OWASP yaitu...","options":["Security Logging and Monitoring Failures","Insecure Design","Cryptographic Failures","SSRF"],"answer":0,"explanation":"Memastikan aktivitas mencurigakan tercatat dengan baik di dalam log merupakan mitigasi dari Security Logging and Monitoring Failures."},
    {"bab":"bab2","q":"Fungsi fetchImageFromURL() diuji dengan memberikan input 'http://127.0.0.1/admin-panel'. Tes berharap fungsi ini me-lempar peringatan akses ditolak. Ini adalah pengujian untuk mendeteksi kerentanan...","options":["SSRF (Server-Side Request Forgery)","Injection","Broken Access Control","Security Misconfiguration"],"answer":0,"explanation":"Memaksa server untuk mengakses jaringan lokal internalnya (localhost/127.0.0.1) adalah definisi serangan SSRF."},
    {"bab":"bab2","q":"Dalam tim yang sering melakukan refactoring (perombakan kode), unit test bertindak seperti 'jaring pengaman'. Apa makna dari analogi ini?","options":["Mencegah server mengalami down saat traffic tinggi","Bila kode diubah dan merusak fitur lama, tes yang gagal akan langsung menangkapnya sebelum di-deploy","Mengubah kode menjadi lebih cepat dieksekusi oleh mesin","Menghindari kebutuhan melakukan code review secara manual"],"answer":1,"explanation":"Jaring pengaman (safety net) berarti developer bisa berani merombak kode karena jika ada yang rusak, lampu merah unit test akan menyala."},
    {"bab":"bab2","q":"Aplikasi mengalami peretasan karena menggunakan pustaka pemroses gambar (ImageMagick) versi lama yang sudah diketahui berlubang. Untuk menghindari hal ini (OWASP: Vulnerable Components), strategi apa yang harus diterapkan di CI/CD?","options":["Menguji semua password menggunakan enkripsi","Rutin menggunakan tool pemindai dependensi (seperti npm audit/Dependabot) untuk memastikan library selalu update","Menggunakan firewall berbasis hardware","Membuat unit test untuk mengecek SQL Injection"],"answer":1,"explanation":"Satu-satunya cara mengatasi Vulnerable & Outdated Components adalah mendeteksi secara otomatis dan rutin memperbarui versi dependensi library pihak ketiga."},

    // ===== BAB 3: REGRESSION TESTING =====
    {"bab":"bab3","q":"Developer baru saja memperbaiki bug di fitur 'Lupa Password'. Untuk memastikan perubahan tersebut tidak merusak fitur 'Login' yang sebelumnya sudah berjalan normal, proses apa yang wajib dilakukan?","options":["Unit Testing","Alpha Testing","Regression Testing","Performance Testing"],"answer":2,"explanation":"Regression testing dijalankan setelah ada perubahan kode (fix bug/fitur baru) untuk memastikan fungsionalitas lama tidak ikut rusak."},
    {"bab":"bab3","q":"Seorang QA Tester memverifikasi perbaikan bug 'Tombol Submit tidak bisa di-klik'. Setelah dipastikan bisa, ia kemudian menjalankan 100 test case otomatis untuk memastikan fitur pendaftaran secara umum aman. Manakah pernyataan yang benar?","options":["Pengecekan tombol Submit adalah Regression, dan 100 test case adalah Retesting","Keduanya adalah Regression Testing","Keduanya adalah Retesting","Pengecekan tombol Submit adalah Retesting, dan 100 test case adalah Regression Testing"],"answer":3,"explanation":"Retesting khusus untuk mengecek bug yang spesifik telah diperbaiki. Regression testing mengecek dampaknya secara meluas (100 test case lainnya)."},
    {"bab":"bab3","q":"Dalam pipeline Continuous Integration (CI), regression testing otomatis sangat krusial karena ia...","options":["Secara otomatis memperbarui desain tampilan aplikasi web","Menjaga stabilitas build; mencegah kode yang merusak fitur lama digabungkan (merge) ke production","Menggantikan peran dari Penetration Testing","Menghasilkan dokumentasi bisnis secara instan"],"answer":1,"explanation":"Peran regression test dalam CI adalah sebagai palang pintu otomatis yang menolak penggabungan kode jika terdeteksi ada regresi (fitur lama rusak)."},
    {"bab":"bab3","q":"Karena menjalankan seluruh 5.000 test case memakan waktu berjam-jam, tim QA memutuskan untuk hanya menjalankan test case yang berfokus pada fitur transaksi pembayaran, karena perubahan kode terjadi pada modul diskon. Strategi seleksi ini disebut...","options":["Complete Regression","Random Selection","Dependency-based / Coverage-based selection","Corrective Regression"],"answer":2,"explanation":"Memilih hanya test case yang berhubungan dengan modul yang berubah (atau saling bergantung) disebut Coverage/Dependency-based selection."},
    {"bab":"bab3","q":"Selama setahun, tim selalu lulus regression test 100%, tetapi ternyata sering muncul bug kritis di fitur-fitur baru yang dilaporkan oleh klien. Apa kesalahan terbesar dalam strategi regression testing mereka?","options":["Mereka tidak menggunakan framework Jest","Test suite tidak pernah diperbarui (update) dengan test case untuk fitur baru","Mereka tidak melakukan Performance Testing","Server database mereka tidak memakai SSD"],"answer":1,"explanation":"Bila test suite tidak pernah diupdate, fitur baru yang dikembangkan tidak akan terlindungi oleh tes. Akibatnya, tes lama lulus tapi bug fitur baru tak terdeteksi."},
    {"bab":"bab3","q":"Regression Testing paling efektif dan efisien jika dilakukan dengan pendekatan...","options":["Dilakukan sepenuhnya secara manual oleh tim QA berulang kali","Diotomatisasi (Automation) mengingat pengujiannya repetitif (berulang setiap ada rilis baru)","Diserahkan kepada pelanggan saat tahap UAT","Tidak perlu dilakukan jika developer sudah yakin dengan kodenya"],"answer":1,"explanation":"Karakteristik utama regression test adalah repetitif dan sering dijalankan (tiap commit/release), sehingga otomatisasi sangat direkomendasikan."},
    {"bab":"bab3","q":"Tim IT hanya mengubah pengaturan konfigurasi server tanpa mengubah satu baris pun kode aplikasi. Mereka menjalankan regression test untuk memastikan aplikasi tetap berjalan. Tipe regression testing ini dinamakan...","options":["Progressive Regression Testing","Corrective Regression Testing","Partial Regression Testing","Random Regression Testing"],"answer":1,"explanation":"Corrective regression testing dilakukan tanpa modifikasi source code (misal ubah spek server/konfig), hanya untuk memverifikasi ulang bahwa semua masih normal."},
    {"bab":"bab3","q":"Untuk aplikasi lama (legacy) yang belum memiliki API, tim menggunakan alat seperti UI.Vision untuk merekam interaksi klik dan ketik layar (Record & Playback) guna menguji fungsionalitas UI secara otomatis. Teknologi ini dikenal sebagai...","options":["Performance Load Balancing","Robotic Process Automation (RPA)","Static Code Analysis","Docker Containerization"],"answer":1,"explanation":"RPA (Robotic Process Automation) memanfaatkan bot software untuk meniru tindakan manusia di antarmuka UI secara otomatis, sangat berguna untuk UI regression test."},
    {"bab":"bab3","q":"Seorang manajer bingung antara Regression Testing dan Load Testing. Penjelasan yang paling tepat adalah...","options":["Load Testing melihat seberapa kuat server menahan traffic, sedangkan Regression melihat apakah fungsionalitas berubah menjadi error pasca revisi","Keduanya sama-sama berfokus pada kecepatan respon server","Regression test harus dilakukan sebelum Unit test","Load testing fokus pada keamanan, Regression fokus pada performa"],"answer":0,"explanation":"Regression = fungsionalitas (apakah ada fitur yang kembali rusak). Load = Performa (menahan beban pengguna)."},
    {"bab":"bab3","q":"Dalam pengembangan versi mayor (Major Release) di mana hampir seluruh arsitektur database diubah secara besar-besaran, pendekatan regression testing manakah yang wajib diambil untuk menjamin keamanan rilis?","options":["Selective Regression Testing (hanya fitur tertentu)","Corrective Regression Testing","Complete/Full Regression Testing (seluruh 100% test suite)","Progressive Random Testing"],"answer":2,"explanation":"Bila perubahannya radikal dan menyentuh bagian inti sistem, Full/Complete Regression Test harus dieksekusi pada seluruh aplikasi untuk mencegah bencana kegagalan sistem."},
    {"bab":"bab3","q":"Tim mengidentifikasi bahwa modul 'Transfer Uang' memiliki dampak kerugian miliaran rupiah jika error, sedangkan modul 'Ganti Foto Profil' dampaknya kecil. Oleh karena itu, modul 'Transfer Uang' wajib masuk dalam setiap eksekusi regression test. Ini adalah penerapan strategi...","options":["Dependency-based selection","Random-based selection","Risk-based selection","Time-based selection"],"answer":2,"explanation":"Risk-based selection berarti memprioritaskan tes pada area-area yang secara bisnis memiliki risiko paling tinggi jika terjadi kegagalan."},
    {"bab":"bab3","q":"Sebuah sprint baru saja menambahkan fitur 'Wishlist' ke aplikasi toko online, dan test suite yang lama perlu ditambah dengan puluhan test case baru yang merepresentasikan fitur Wishlist tersebut. Proses adaptasi/penambahan tes baru ini termasuk tipe...","options":["Corrective Regression","Complete Regression","Progressive Regression","Partial Regression"],"answer":2,"explanation":"Progressive Regression Testing terjadi ketika ada fitur baru yang membuat test case lama mungkin perlu disesuaikan atau perlu penambahan test case progresif."},
    {"bab":"bab3","q":"Mitos yang salah mengenai Regression Testing adalah...","options":["Akan memakan banyak waktu jika dilakukan secara manual","Hanya dapat mengecek regresi, bukan mencari cacat desain UX/UI yang rumit","Apabila semua Unit Test sukses, maka Regression Testing sudah pasti 100% sukses dan tidak lagi dibutuhkan","Regression Testing krusial untuk aplikasi berjangka panjang (agile)"],"answer":2,"explanation":"Suksesnya unit test pada fungsi individu tidak menjamin bahwa gabungan kode tidak merusak alur sistem yang lebih besar (regression bug). Keduanya saling melengkapi."},
    {"bab":"bab3","q":"Istilah 'Retest All' merujuk pada strategi seleksi di mana...","options":["Semua tester diminta untuk istirahat","Seluruh test case dalam library (gudang tes) dieksekusi tanpa kecuali untuk mendapat tingkat kepercayaan maksimal","Hanya tes yang gagal sebelumnya yang dites ulang","Semua laporan bug dihapus dari sistem"],"answer":1,"explanation":"Retest All adalah sinonim dari Complete/Full Regression Testing, menjalankan seluruh test case di repository."},
    {"bab":"bab3","q":"Menjalankan Regression Testing terlalu sering (misal setiap menit) pada repository tes yang raksasa justru bisa berdampak buruk bagi developer karena...","options":["Membuat server menjadi lebih cepat","Menghabiskan waktu tunggu (build time) berlebihan yang memperlambat laju produktivitas development","Kode aplikasi menjadi usang otomatis","Keamanan sistem akan menurun"],"answer":1,"explanation":"Terlalu lama menunggu hasil full regression test dapat merusak feedback loop. Itulah mengapa Selective/Risk-based regression sering digunakan untuk commit harian."},
    {"bab":"bab3","q":"Keuntungan terbesar penggunaan tool RPA Open Source seperti UI.Vision (Kantu) dalam Regression Testing berbasis visual adalah...","options":["Dapat meretas kata sandi kompetitor secara otomatis","Mampu mengenali pola visual (gambar) pada layar layaknya manusia, bahkan saat struktur HTML aplikasi berantakan","Mampu menerjemahkan bahasa secara otomatis","Menggantikan fungsi database sepenuhnya"],"answer":1,"explanation":"Tool RPA visual modern mampu melakukan image recognition/computer vision, sehingga ia bisa mengklik elemen berdasarkan 'penampakannya' di layar tanpa bergantung penuh pada DOM HTML."},

    // ===== BAB 4: INTEGRATION, SYSTEM & ACCEPTANCE =====
    {"bab":"bab4","q":"Tim menyatukan modul A (Login), modul B (Keranjang), dan modul C (Pembayaran) sekaligus tanpa pernah mengujinya secara berpasangan. Jika aplikasi langsung crash, pendekatan integrasi apa yang terbukti memiliki kelemahan pelacakan bug paling sulit ini?","options":["Top-Down Integration","Bottom-Up Integration","Big Bang Integration","Sandwich Integration"],"answer":2,"explanation":"Big Bang Integration menyatukan semuanya sekaligus di akhir. Sangat berisiko karena jika ada error, sulit mengisolasi komponen mana yang menyebabkannya."},
    {"bab":"bab4","q":"Pendekatan Top-Down Integration memulai pengujian dari UI utama turun ke fungsi-fungsi kecil di bawahnya. Karena modul fungsi kecil belum sepenuhnya selesai dikerjakan, tim QA harus menggunakan komponen pengganti sementara. Komponen ini dinamakan...","options":["Driver","Stub","Fake","Spy"],"answer":1,"explanation":"Stub digunakan dalam pendekatan Top-Down untuk mensimulasikan komponen/modul tingkat bawah yang belum selesai."},
    {"bab":"bab4","q":"Berbeda dengan Top-Down, pendekatan Bottom-Up Integration memulai tes dari fungsi terbawah (seperti akses database) ke atas. Komponen pengganti sementara yang bertindak menyimulasikan pemanggil (modul tingkat atas) dinamakan...","options":["Stub","Spy","Mock","Driver"],"answer":3,"explanation":"Driver digunakan dalam pendekatan Bottom-Up untuk mensimulasikan modul tingkat atas (pemanggil modul bawah)."},
    {"bab":"bab4","q":"Dalam skenario pengujian, kita menulis komponen pengganti yang hanya mereturn sebuah string hardcoded 'SUCCESS' apapun parameternya. Komponen ini murni digunakan untuk mensimulasikan kondisi (state). Komponen ini tergolong sebagai...","options":["Mock","Driver","Stub","Dummy"],"answer":2,"explanation":"Stub bekerja secara statis. Ia men-hardcode return value dan digunakan untuk State Verification."},
    {"bab":"bab4","q":"Kita sedang menguji fungsi notifikasi. Alih-alih mengecek nilai return, kita memverifikasi *apakah fungsi Email.send()* benar-benar dieksekusi tepat satu kali oleh fungsi notifikasi tersebut. Pengganti yang digunakan untuk *Behavior Verification* ini adalah...","options":["Stub","Mock","Fake","Driver"],"answer":1,"explanation":"Mock bersifat dinamis dan mencatat aktivitas pemanggilan (Behavior Verification). Ia mengecek APAKAH metode dipanggil, berapa kali, dan parameternya."},
    {"bab":"bab4","q":"'State Verification' berfokus pada hasil akhir sebuah operasi, sedangkan 'Behavior Verification' berfokus pada langkah-langkah yang diambil untuk mencapai hasil tersebut. Pernyataan manakah yang benar?","options":["Stub = State, Mock = Behavior","Mock = State, Stub = Behavior","Dummy = State, Fake = Behavior","Keduanya (Stub & Mock) = Behavior"],"answer":0,"explanation":"Stub (Statis) = State Verification. Mock (Monitoring) = Behavior Verification."},
    {"bab":"bab4","q":"Aplikasi e-procurement baru telah rampung. Sebelum dirilis resmi, perwakilan dari departemen keuangan perusahaan klien diminta untuk mencoba memproses faktur palsu demi memastikan alur kerja sesuai dengan kebiasaan mereka. Tahapan apakah ini?","options":["Unit Testing","User Acceptance Testing (UAT)","Operational Acceptance Testing (OAT)","Integration Testing"],"answer":1,"explanation":"UAT dilakukan oleh pengguna akhir/bisnis (klien) untuk memvalidasi bahwa sistem sudah menjawab kebutuhan operasional mereka."},
    {"bab":"bab4","q":"Tim DevOps perusahaan melakukan uji coba skenario bencana (Disaster Recovery). Mereka mematikan paksa server utama lalu memastikan bahwa server cadangan (Failover) menyala otomatis dalam 3 detik tanpa kehilangan data. Aktivitas ini tergolong ke dalam...","options":["UAT","OAT (Operational Acceptance Testing)","Alpha Testing","System Integration Testing"],"answer":1,"explanation":"OAT berfokus pada kelayakan operasional sistem seperti backup/restore, failover, maintenance, yang biasanya dilakukan oleh tim IT operasional."},
    {"bab":"bab4","q":"Sebuah startup game mengundang puluhan pegawai internal dari divisi HR dan Marketing untuk memainkan versi mentah gamenya sebelum dirilis ke publik. Mereka mencari bug fatal. Tahapan uji coba ini dikenal sebagai...","options":["Beta Testing","Alpha Testing","A/B Testing","Unit Testing"],"answer":1,"explanation":"Alpha Testing selalu terjadi di lingkungan internal pengembang (in-house) oleh tim atau karyawan internal."},
    {"bab":"bab4","q":"Fungsi X mewajibkan 5 parameter input. Namun pada pengujian ini, kita hanya peduli dengan parameter pertama, dan 4 parameter sisanya tidak digunakan sama sekali di dalam logika yang diuji. Kita cukup mengisinya dengan null atau string kosong. 4 Parameter ini bertindak sebagai...","options":["Fake","Mock","Stub","Dummy"],"answer":3,"explanation":"Dummy adalah objek pengganti yang hanya dioper untuk memenuhi signature fungsi (pengisi parameter saja) tapi isinya tidak pernah diakses/digunakan."},
    {"bab":"bab4","q":"Untuk mempercepat tes tanpa butuh setup server database sungguhan, tim membuat versi 'DatabaseInMemory' sederhana dengan menggunakan struktur data Array/List. Logika insert dan fetch bekerja persis seperti aslinya tapi datanya sirna bila aplikasi ditutup. Ini merupakan implementasi dari test double bertipe...","options":["Spy","Mock","Fake","Stub"],"answer":2,"explanation":"Fake adalah implementasi alternatif yang benar-benar bekerja (nyata) namun mengambil jalan pintas yang membuatnya tidak cocok untuk Production (misal In-Memory DB)."},
    {"bab":"bab4","q":"Mengapa Continuous Integration (CI) sangat menekankan eksekusi Integration Testing secara otomatis setiap malam atau setiap commit?","options":["Karena integration testing menggantikan peran QA manusia","Agar 'Integration Hell' (mimpi buruk saat menggabungkan ratusan modul di akhir bulan) bisa dihindari dengan mengujinya sedikit demi sedikit tiap hari","Untuk memperlambat rilis aplikasi","Agar server database dapat istirahat"],"answer":1,"explanation":"CI menghindari Integration Hell (Big Bang maut) dengan memaksa integrasi dan pengujian dilakukan terus-menerus pada potongan-potongan kecil."},
    {"bab":"bab4","q":"Manakah dari pertanyaan berikut yang menjadi fokus utama dalam UAT (User Acceptance Testing)?","options":["'Apakah aplikasi ini sudah tidak ada warning di compiler?'","'Apakah aplikasi ini sudah menjawab rasa frustasi pelanggan dan memenuhi persyaratan bisnis kita?'","'Apakah aplikasi ini bisa mem-backup otomatis di jam 3 pagi?'","'Apakah coverage unit testing sudah melebihi 90%?'"],"answer":1,"explanation":"UAT selalu berpusat pada kepuasan pelanggan dan pemenuhan ekspektasi bisnis (Requirements validation)."},
    {"bab":"bab4","q":"Saat sebuah aplikasi web diuji untuk memastikan ia berjalan lancar baik di Chrome (PC), Safari (Mac), maupun Edge (Windows), tim QA sedang melakukan salah satu jenis System Testing yaitu...","options":["Usability Testing","Compatibility Testing","Performance Testing","Recovery Testing"],"answer":1,"explanation":"Compatibility Testing menguji aplikasi di berbagai peramban, sistem operasi, resolusi layar, perangkat, atau lingkungan hardware."},
    {"bab":"bab4","q":"Microsoft merilis Windows 11 versi 'Insider Preview' ke ratusan ribu relawan secara publik untuk dipakai di rumah mereka masing-masing demi menemukan bug yang sulit terdeteksi di lab Microsoft. Pendekatan ini dinamakan...","options":["Alpha Testing","Unit Testing","Beta Testing","White Box Testing"],"answer":2,"explanation":"Beta Testing melibatkan user/masyarakat di lingkungan nyata mereka (eksternal) untuk menemukan isu dunia nyata."},
    {"bab":"bab4","q":"Seorang tester menggunakan 'Sinon.js' untuk menginjeksi sebuah mata-mata ke dalam fungsi logger demi menghitung berapa kali fungsi logger tersebut terpanggil selama eksekusi. Tes akhirnya melakukan assert(logger.calledTwice). Konsep yang paling kental diterapkan di sini adalah...","options":["Mocking (Behavior Verification)","Stubbing (State Verification)","Fake Database","Dummy Variables"],"answer":0,"explanation":"Memantau (memata-matai) frekuensi pemanggilan sebuah fungsi adalah hakikat utama dari Behavior Verification menggunakan Mock (atau Spy)."},

    // ===== BAB 5: PENETRATION TESTING =====
    {"bab":"bab5","q":"Seorang direktur IT menolak melakukan Penetration Testing dengan alasan 'Sistem kita baru saja lulus audit keamanan 100%, jadi sistem sudah pasti anti-hacker selamanya'. Apa kelemahan mendasar dari pola pikir direktur ini?","options":["Audit hanya mengecek server fisik, bukan software","Pentest adalah cara untuk mensertifikasi sistem agar 100% aman selamanya","Pentest hanya memotret status keamanan pada waktu saat diuji (snapshot), dan tidak pernah bisa membuktikan sistem 100% aman dari ancaman masa depan","Pentest seharusnya dilakukan oleh hacker ilegal"],"answer":2,"explanation":"Konsep emas Pentest: Ia TIDAK BISA membuktikan ketidakberadaan celah keamanan (100% aman), ia hanya bisa membuktikan keberadaan suatu celah jika ditemukan saat itu."},
    {"bab":"bab5","q":"Dalam tahap eksploitasi, pentester berhasil menemukan bahwa versi Windows server rentan terhadap eksploit 'EternalBlue'. Tool open-source mana yang paling tepat dan efisien untuk digunakan melancarkan payload serangan tersebut?","options":["Metasploit","Nmap","Wireshark","Dradis"],"answer":0,"explanation":"Metasploit adalah exploitation framework standar industri yang menyimpan ribuan skrip eksploit (termasuk EternalBlue) untuk menyerang target."},
    {"bab":"bab5","q":"Seseorang duduk di warung kopi umum, menyalakan laptopnya dalam mode 'Promiscuous', dan mulai menyedot (sniffing) paket data HTTP yang beterbangan di jaringan WiFi warkop tersebut untuk mencari password orang lain. Tool analisis jaringan apa yang umumnya digunakan untuk ini?","options":["Nessus","Wireshark","Metasploit","Burp Suite"],"answer":1,"explanation":"Wireshark adalah packet sniffer paling legendaris untuk menangkap dan menganalisa paket jaringan yang lewat."},
    {"bab":"bab5","q":"Saat melakukan 'Active Scanning' dengan menembakkan ribuan payload otomatis ke server production di jam sibuk kerja, perusahaan tiba-tiba mengalami crash server parah. Mengapa risiko ini harus disadari sejak awal?","options":["Active scanning membuat server memperbarui OS secara paksa","Active scanning bersifat berisik (noisy) dan intensif, memakan resource memori/CPU server yang bisa memicu Denial of Service tak disengaja","Active scanning mengubah seluruh database menjadi terenkripsi","Active scanning hanya boleh dilakukan oleh pihak kepolisian"],"answer":1,"explanation":"Active scanning membanjiri server dengan request berat yang berisiko menyebabkan service disruption / downtime bila tidak dilakukan dengan hati-hati."},
    {"bab":"bab5","q":"Tahap pertama saat memeriksa situs e-commerce, pentester menjalankan bot untuk menjelajahi semua tautan yang tersedia (login, katalog, cart, profile) guna memetakan arsitektur situs seutuhnya tanpa menyerang apapun. Teknik pemetaan pasif ini dinamakan...","options":["Exploitation","Spidering / Web Crawling","Privilege Escalation","Denial of Service"],"answer":1,"explanation":"Spidering (Crawling) adalah proses memetakan seluruh rute URL pada suatu website, mirip dengan fungsi bot Google Search."},
    {"bab":"bab5","q":"Sebuah bank menyewa pentester dari luar negeri. Bank hanya memberikan alamat IP server publik dan tidak memberi tahu bahasa pemrograman, arsitektur, maupun kredensial apa pun. Pentester disuruh menyerang layaknya peretas Rusia sesungguhnya. Metode ini tergolong...","options":["White Box Testing","Gray Box Testing","Black Box Testing","Crystal Box Testing"],"answer":2,"explanation":"Black Box Testing adalah simulasi murni serangan eksternal tanpa memiliki pengetahuan (blind) tentang jeroan sistem."},
    {"bab":"bab5","q":"Developer memberikan akses penuh berupa Source Code, rancangan database, dan akun Admin kepada tim Pentester internal perusahaan untuk mencari lubang secepat mungkin. Pendekatan apakah ini?","options":["Black Box","Gray Box","White Box","Red Teaming"],"answer":2,"explanation":"White Box Testing bersifat transparan. Tim penguji dibekali semua data (source code, hak akses) sehingga pencarian bug lebih komprehensif dari dalam."},
    {"bab":"bab5","q":"Sebelum sebuah pentest dimulai, pentester dan klien menandatangani 'Rules of Engagement' yang mengatur IP mana saja yang dilarang diserang, jam berapa boleh menyerang, dan apa sanksi jika melanggar. Aktivitas ini berada pada fase...","options":["Reporting","Reconnaissance","Pre-engagement","Exploitation"],"answer":2,"explanation":"Pre-engagement adalah fase birokrasi, penandatanganan kontrak, NDA, dan penyusunan scope (aturan main) agar tindakan pentest legal secara hukum."},
    {"bab":"bab5","q":"Pentester memeriksa media sosial karyawan, melihat profil LinkedIn CEO, mencari file PDF rahasia yang bocor di Google, tanpa pernah sekalipun mengirimkan paket langsung ke server target. Ini tergolong fase...","options":["Vulnerability Analysis","Passive Reconnaissance","Exploitation","Post-Exploitation"],"answer":1,"explanation":"Passive Reconnaissance mengumpulkan intelijen dari sumber publik (OSINT) tanpa menyentuh jaringan target sehingga tidak terdeteksi firewall."},
    {"bab":"bab5","q":"Tool manakah yang secara de-facto merupakan andalan para pentester web untuk melakukan 'Intercept' (menahan dan memanipulasi) request HTTP sebelum request tersebut mencapai server?","options":["Nmap","Wireshark","Burp Suite","SQLmap"],"answer":2,"explanation":"Burp Suite berfungsi sebagai proxy untuk menahan (intercept) paket HTTP/S di tengah jalan agar pentester bisa mengubah isinya (misal: memanipulasi harga di keranjang) sebelum diteruskan."},
    {"bab":"bab5","q":"Saat menemukan sebuah kolom form input sangat rentan, pentester ingin secara otomatis menginjeksi ratusan payload untuk mendownload seluruh isi tabel database pengguna. Tool otomatisasi spesifik apakah yang paling terkenal untuk mengeksploitasi SQLi?","options":["SQLmap","Nessus","Metasploit","Dradis"],"answer":0,"explanation":"SQLmap adalah tool andalan untuk membedah dan mengambil alih database melalui eksploitasi celah SQL Injection secara otomatis."},
    {"bab":"bab5","q":"Setelah berhasil masuk ke dalam server dan mendapatkan hak akses user biasa, sang hacker berusaha memanfaatkan celah OS kernel untuk menjadi root/administrator. Tindakan memanjat ke kasta tertinggi ini dilakukan pada fase...","options":["Pre-engagement","Reconnaissance","Threat Modeling","Post-Exploitation (Privilege Escalation)"],"answer":3,"explanation":"Privilege Escalation (menaikkan level hak akses dari user biasa ke admin) adalah aktivitas khas di fase Post-Exploitation setelah pintu berhasil dijebol."},
    {"bab":"bab5","q":"Sistem administrator perusahaan berlangganan sebuah tool berbayar yang setiap minggu otomatis menyapu (scan) seluruh port server dan melaporkan jika ada software usang (misal Apache versi jadul yang rentan). Tool jenis Vulnerability Scanner legendaris apakah ini?","options":["Nessus","Burp Suite","Metasploit","Nmap"],"answer":0,"explanation":"Nessus (Tenable) adalah rajanya vulnerability scanner berbayar yang memiliki basis data CVE luar biasa besar untuk mendeteksi kelemahan secara otomatis."},
    {"bab":"bab5","q":"Pada tahap awal meraba sistem, pentester menggunakan command line untuk melihat port apa saja yang terbuka (misal port 80, 443, 22) dan mengidentifikasi OS yang digunakan. Tool apakah yang melakukan 'Port Scanning' ini?","options":["Nmap","Dradis","Burp Suite","Wireshark"],"answer":0,"explanation":"Nmap (Network Mapper) adalah tool standar wajib untuk penemuan jaringan (network discovery) dan pemindaian port yang terbuka (port scanning)."},
    {"bab":"bab5","q":"Sebuah perusahaan menyediakan akun 'User Premium' dan 'User Standar' kepada pentester untuk mengecek apakah 'User Standar' bisa merekayasa URL demi mendapat fitur premium tanpa bayar. Namun, pentester tidak diberi source code aslinya. Pendekatan ini dinamakan...","options":["White Box","Black Box","Gray Box","Alpha Box"],"answer":2,"explanation":"Gray Box berada di tengah-tengah. Pentester tidak diberi segalanya (tanpa source code), tapi juga tidak 100% buta (diberi akun internal yang sah)."},
    {"bab":"bab5","q":"Di akhir minggu, sang pentester kebingungan menggabungkan semua hasil screenshot Nmap, BurpSuite, dan Metasploit. Ia membutuhkan sebuah framework pelaporan kolaboratif untuk tim keamanan menyusun hasil akhir. Tool apakah ini?","options":["Dradis","Wireshark","SQLmap","Nessus"],"answer":0,"explanation":"Dradis adalah framework kolaborasi pelaporan (reporting) populer di kalangan pentester untuk merangkum hasil temuan dari berbagai tool ke dalam satu dokumen terpadu."},

    // ===== BAB 6: LAW, ETHICS & CYBER CRIME =====
    {"bab":"bab6","q":"Dalam UU ITE, seseorang yang dengan sengaja mengirimkan tautan berisi Ransomware yang melumpuhkan server rumah sakit (mengganggu sistem elektronik) akan dijerat menggunakan...","options":["Pasal 30 (Hacking)","Pasal 31 (Penyadapan)","Pasal 33 (Gangguan Sistem/Malware)","Pasal 35 (Pencurian Identitas)"],"answer":2,"explanation":"Pasal 33 UU ITE secara spesifik mengkriminalisasi tindakan yang membuat sistem elektronik menjadi tidak bekerja sebagaimana mestinya (termasuk serangan Malware/Ransomware/DDoS)."},
    {"bab":"bab6","q":"Seseorang iseng menjebol masuk ke router WiFi tetangganya tanpa izin dengan menebak password. Sekalipun ia tidak mengambil data apa-apa, tindakan 'Akses Ilegal' ini telah melanggar UU ITE...","options":["Pasal 30","Pasal 31","Pasal 33","Pasal 35"],"answer":0,"explanation":"Pasal 30 UU ITE menjerat setiap tindakan mengakses sistem komputer orang lain dengan cara apapun tanpa hak/izin (Hacking), terlepas dari apakah data dicuri atau tidak."},
    {"bab":"bab6","q":"Sebuah perusahaan game bangkrut dan menjual database pemainnya secara rahasia ke perusahaan judi online demi uang. Secara hukum di negara tanpa regulasi privasi kuat, bisa jadi ini legal karena sudah tersembunyi di ToS (Terms of Service). Namun, dari sudut pandang etika profesi IT, tindakan ini...","options":["Bisa dibenarkan karena mematuhi hukum bisnis negara tersebut","Sangat terpuji karena menyelamatkan karyawan dari PHK massal","Legal tetapi sangat tidak etis karena mengkhianati amanah/privasi yang dititipkan user","Sesuai dengan etika dasar ACM"],"answer":2,"explanation":"Sesuatu yang legal (di mata hukum setempat) belum tentu etis. Menjual data diam-diam adalah pelanggaran moral profesi yang sangat berat (Legal but Unethical)."},
    {"bab":"bab6","q":"Seorang pengguna Instagram di Prancis memutuskan untuk menghapus akunnya dan secara hukum berhak menuntut agar pihak Meta menghapus data-data fotonya secara permanen dari server mereka, bukan sekadar dinonaktifkan. Hak kuat ini lahir dari regulasi GDPR yang dinamakan...","options":["Right to Data Portability","Right to be Forgotten (Right to Erasure)","Data Minimization","Breach Notification"],"answer":1,"explanation":"GDPR mempopulerkan Right to Erasure / Right to be Forgotten, yang mewajibkan perusahaan menghapus data pribadi konsumen bila konsumen menarik persetujuannya."},
    {"bab":"bab6","q":"Berdasarkan UU Pelindungan Data Pribadi (UU PDP) Indonesia, rekam medis pasien di rumah sakit, data sidik jari (biometrik) di kantor, dan informasi rekening tabungan tergolong ke dalam data pribadi yang bersifat...","options":["Umum (General)","Rahasia Negara","Spesifik (Specific)","Publik"],"answer":2,"explanation":"UU PDP mengklasifikasikan data super-sensitif seperti biometrik, rekam medis, keuangan, orientasi seksual, hingga pandangan politik sebagai Data Pribadi Spesifik."},
    {"bab":"bab6","q":"Menggunakan alat sniffer (seperti Wireshark) untuk secara diam-diam memonitor/merekam percakapan WhatsApp pimpinan perusahaan yang melintasi jaringan kantor merupakan pelanggaran berat UU ITE yaitu Intersepsi/Penyadapan. Ini diatur dalam...","options":["Pasal 30","Pasal 31","Pasal 33","Pasal 35"],"answer":1,"explanation":"Pasal 31 UU ITE mengatur larangan keras tentang Intersepsi atau Penyadapan atas informasi elektronik yang bukan milik publik."},
    {"bab":"bab6","q":"Tiktok sedang diadili oleh kongres Amerika Serikat, sebagian menyorot kemungkinan transfer rekam medis (jika ada platform sejenis). Aturan super ketat di AS yang melindungi data rekam medis pasien dan asuransi kesehatan adalah...","options":["DMCA","CFAA","HIPAA","ECPA"],"answer":2,"explanation":"HIPAA (Health Insurance Portability and Accountability Act) adalah tembok besar Amerika yang melindungi kerahasiaan informasi kesehatan medis warga negaranya."},
    {"bab":"bab6","q":"Seorang YouTuber me-review film bajakan secara utuh, lalu tiba-tiba videonya diturunkan paksa (takedown) karena teguran keras (strike) dari studio film Hollywood. Hukum perlindungan hak cipta digital dari Amerika yang mendasari teguran ini adalah...","options":["HIPAA","DMCA (Digital Millennium Copyright Act)","GDPR","CFAA"],"answer":1,"explanation":"DMCA sangat terkenal di internet (seperti YouTube/Twitch) sebagai hukum hak cipta AS yang melegalkan 'takedown notices' terhadap pelanggar konten digital berhak cipta."},
    {"bab":"bab6","q":"Pada masa awal, seorang mahasiswa di AS dipenjara karena melepaskan 'Worm Morris' ke jaringan internet yang menyebabkan kelumpuhan skala besar. Ia dituntut menggunakan hukum utama AS terkait kejahatan komputer/hacking, yaitu...","options":["HIPAA","CFAA (Computer Fraud and Abuse Act)","DMCA","SOX"],"answer":1,"explanation":"CFAA adalah hukum senjata pamungkas pemerintah AS untuk mengadili tindak pidana kejahatan komputer, akses ilegal, dan hacking sejak era 80an."},
    {"bab":"bab6","q":"Pemalsuan akun bank dengan membuat halaman Phishing palsu yang menyerupai BCA untuk mencuri kredensial internet banking korban, dalam UU ITE merupakan pelanggaran Manipulasi Data/Pencurian Identitas yang diatur dalam...","options":["Pasal 30","Pasal 31","Pasal 33","Pasal 35"],"answer":3,"explanation":"Pasal 35 UU ITE menjerat setiap tindakan manipulasi informasi elektronik dengan tujuan agar hal tersebut dianggap seolah-olah data yang otentik (asli), seperti web Phishing."},
    {"bab":"bab6","q":"Seorang mantan programmer sebuah Startup mencuri algoritma inti yang sangat dirahasiakan oleh perusahaannya, lalu menjual algoritma tersebut ke kompetitor seharga miliaran. Selain UU ITE, ia dapat dijerat dengan UU No. 30 Tahun 2000 tentang...","options":["Hak Cipta","Paten Eksklusif","Rahasia Dagang (Trade Secret)","Merek Dagang"],"answer":2,"explanation":"UU Rahasia Dagang (Trade Secret) melindungi metode operasional/resep rahasia/algoritma yang memiliki nilai ekonomi dan tidak diungkap ke publik."},
    {"bab":"bab6","q":"Anda membuat sebuah software canggih. Untuk melindungi karya Anda agar tidak diklaim dan dibajak oleh orang lain, Anda mendaftarkannya di Indonesia merujuk pada perlindungan Hak Cipta, termasuk Software (Program Komputer). Hal ini dinaungi oleh...","options":["UU No. 30 Tahun 2000","UU No. 28 Tahun 2014","UU ITE Tahun 2008","UU Telekomunikasi"],"answer":1,"explanation":"UU No. 28 Tahun 2014 adalah Undang-Undang Republik Indonesia yang mengatur tentang perlindungan Hak Cipta, dan Software (program komputer) secara gamblang dilindungi di dalamnya."},
    {"bab":"bab6","q":"Setelah berkarir di bidang pertahanan siber, Anda memutuskan untuk mengambil sertifikasi profesional bergengsi 'CISSP'. Organisasi profesional global manakah yang memayungi sertifikasi kemanan IT tingkat ahli ini?","options":["ACM","IEEE","ISACA","(ISC)²"],"answer":3,"explanation":"(ISC)² adalah konsorsium keamanan siber raksasa di dunia yang menaungi sertifikasi CISSP (Certified Information Systems Security Professional)."},
    {"bab":"bab6","q":"Perbedaan paling mendasar antara sanksi pelanggaran HUKUM dan pelanggaran ETIKA profesi IT adalah...","options":["Hukum ditegakkan dengan sanksi penjara/denda oleh negara, sedangkan etika ditegakkan melalui sanksi sosial/pemecatan/pencabutan sertifikasi oleh asosiasi","Hukum lebih longgar daripada etika","Etika hanya berlaku di dunia barat, hukum berlaku di seluruh dunia","Tidak ada perbedaannya, keduanya adalah sinonim"],"answer":0,"explanation":"Hukum selalu obyektif (negara punya aparat/penjara), sedangkan Etika lebih pada moral dan sanksinya berujung pada eksklusi sosial atau sanksi profesi (pencabutan gelar/blacklist)."},
    {"bab":"bab6","q":"'Data Minimization' adalah salah satu prinsip emas dalam GDPR (Eropa) maupun UU PDP. Prinsip ini mendikte perusahaan untuk...","options":["Mengkompres semua data menjadi file ZIP berukuran kecil","Hanya meminta dan menyimpan data pelanggan secukupnya saja, yang benar-benar relevan dengan tujuan bisnis, tidak boleh tamak mengumpulkan semua jenis data","Mengubah font data menjadi huruf berukuran minimal","Menghapus database setiap hari Minggu"],"answer":1,"explanation":"Data minimization (minimalisasi data) berarti jangan kumpulkan data yang tidak perlu. Jika fitur aplikasi hanya 'Senter', jangan minta izin akses GPS dan Kontak!"},
    {"bab":"bab6","q":"Jika kita menyingkat 4 pasal kejahatan teknis utama di UU ITE secara berurutan, pola yang paling gampang dihafal adalah: 30-31-33-35. Urutan kejahatannya adalah...","options":["Sadap - Palsu - Hack - Virus","Hack - Sadap - Virus - Palsu","Virus - Hack - Sadap - Palsu","Palsu - Virus - Hack - Sadap"],"answer":1,"explanation":"30: Hack (Akses Ilegal). 31: Sadap (Intersepsi). 33: Virus (Malware/Gangguan). 35: Palsu (Phishing/Manipulasi). Formula Hapal = Hack, Sadap, Virus, Palsu."}
];

const STORAGE_KEY = 'pkpl_uas_sim_answers';
const RESULT_KEY = 'pkpl_uas_simulation';
const SUBMITTED_KEY = 'pkpl_uas_submitted';

function getSaved() { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
function isSubmitted() { return localStorage.getItem(SUBMITTED_KEY) === 'true'; }

function renderNumberNav() {
    const nav = document.getElementById('numberNav');
    const saved = getSaved();
    nav.innerHTML = allQuestions.map((_, i) => {
        const answered = saved[i] !== undefined;
        return `<button class="${answered ? 'answered' : ''}" onclick="scrollToQ(${i})" title="Soal ${i+1}">${i+1}</button>`;
    }).join('');
}

function updateProgress() {
    const saved = getSaved();
    const answered = Object.keys(saved).length;
    const total = allQuestions.length;
    const pct = Math.round((answered / total) * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = `${answered}/${total} dijawab`;
    document.getElementById('progressPct').textContent = pct + '%';
    renderNumberNav();
}

function getBabLabel(bab) {
    const labels = { bab1: 'Bab 1: Database Security', bab2: 'Bab 2: Unit Testing', bab3: 'Bab 3: Regression Testing', bab4: 'Bab 4: Integration, System & Acceptance', bab5: 'Bab 5: Penetration Testing', bab6: 'Bab 6: Law, Ethics & Cyber Crime' };
    return labels[bab] || bab;
}

function renderQuiz(filter = 'all') {
    const container = document.getElementById('quizContainer');
    const saved = getSaved();
    const submitted = isSubmitted();
    let currentBab = '';
    let html = '';

    allQuestions.forEach((q, i) => {
        const show = filter === 'all' || filter === q.bab || (filter === 'unanswered' && saved[i] === undefined);
        if (!show) return;

        if (q.bab !== currentBab) {
            currentBab = q.bab;
            html += `<div class="section-divider">📚 ${getBabLabel(currentBab)}</div>`;
        }

        const answered = saved[i] !== undefined;
        html += `<div class="quiz-question ${answered ? 'answered' : ''}" id="qq-${i}">
            <div class="q-num">Soal ${i + 1} dari ${allQuestions.length}</div>
            <div class="q-text">${q.q}</div>
            ${q.options.map((opt, j) => {
                let cls = '';
                if (submitted) {
                    if (j === q.answer) cls = 'correct';
                    else if (parseInt(saved[i]) === j && j !== q.answer) cls = 'incorrect';
                }
                return `<label class="quiz-option ${cls}" id="opt-${i}-${j}">
                    <input type="radio" name="q${i}" value="${j}" ${saved[i] == j ? 'checked' : ''} ${submitted ? 'disabled' : ''} onchange="saveAnswer(${i},${j})">
                    <span>${opt}</span>
                    ${submitted && j === q.answer ? `<div class="explanation" style="display:block">💡 ${q.explanation}</div>` : ''}
                </label>`;
            }).join('')}
            ${submitted && parseInt(saved[i]) !== q.answer ? getReviewCardHTML(i) : ''}
        </div>`;
    });

    container.innerHTML = html;
    if (submitted) showResults();
}

function saveAnswer(qi, oi) {
    if (isSubmitted()) return;
    const s = getSaved();
    s[qi] = oi;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    updateProgress();
    const el = document.getElementById(`qq-${qi}`);
    if (el) el.classList.add('answered');
}

function scrollToQ(i) {
    const el = document.getElementById(`qq-${i}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function filterQuestions(filter) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderQuiz(filter);
}

function submitExam() {
    const saved = getSaved();
    const unanswered = allQuestions.length - Object.keys(saved).length;
    if (unanswered > 0) {
        if (!confirm(`Masih ada ${unanswered} soal yang belum dijawab. Yakin mau submit?`)) return;
    }
    localStorage.setItem(SUBMITTED_KEY, 'true');
    renderQuiz();
    showResults();
}

function showResults() {
    const saved = getSaved();
    let correct = 0;
    const babScores = {};

    allQuestions.forEach((q, i) => {
        if (!babScores[q.bab]) babScores[q.bab] = { correct: 0, total: 0 };
        babScores[q.bab].total++;
        if (parseInt(saved[i]) === q.answer) {
            correct++;
            babScores[q.bab].correct++;
        }
    });

    const total = allQuestions.length;
    const pct = Math.round((correct / total) * 100);
    const rb = document.getElementById('resultBox');
    rb.style.display = 'block';
    document.getElementById('scoreText').textContent = `${correct}/${total}`;

    let grade, gradeColor;
    if (pct >= 85) { grade = 'A — Luar Biasa! 🏆'; gradeColor = '#34d399'; }
    else if (pct >= 75) { grade = 'B — Bagus! 👍'; gradeColor = '#60a5fa'; }
    else if (pct >= 65) { grade = 'C — Cukup, perlu belajar lagi'; gradeColor = '#fbbf24'; }
    else if (pct >= 50) { grade = 'D — Kurang, banyak yang harus dipelajari'; gradeColor = '#f97316'; }
    else { grade = 'E — Belum siap, ayo belajar lagi! 📚'; gradeColor = '#ef4444'; }

    document.getElementById('gradeText').textContent = grade;
    document.getElementById('gradeText').style.color = gradeColor;

    const breakdownHTML = Object.entries(babScores).map(([bab, s]) => {
        const p = Math.round((s.correct / s.total) * 100);
        return `<div class="item"><div class="label">${getBabLabel(bab).replace('Bab ','').split(':')[0]}</div><div class="val">${s.correct}/${s.total} (${p}%)</div></div>`;
    }).join('');
    document.getElementById('breakdownBox').innerHTML = breakdownHTML;

    const weakBabs = Object.entries(babScores).filter(([_, s]) => (s.correct / s.total) < 0.7).map(([bab]) => getBabLabel(bab));
    document.getElementById('adviceText').textContent = weakBabs.length > 0
        ? `📚 Fokus pelajari lagi: ${weakBabs.join(', ')}`
        : '🎉 Semua materi sudah dikuasai dengan baik!';

    localStorage.setItem(RESULT_KEY, JSON.stringify({ correct, total }));
    document.getElementById('examStatus').textContent = `${pct}%`;

    // Show review button if there are wrong answers
    const wrongCount = total - correct;
    const reviewBtn = document.getElementById('reviewToggleBtn');
    if (wrongCount > 0) {
        reviewBtn.style.display = 'flex';
        reviewBtn.textContent = `📖 Lihat Materi Tambahan (${wrongCount} soal salah)`;
        buildReviewSummary(saved);
    } else {
        reviewBtn.style.display = 'none';
    }

    rb.scrollIntoView({ behavior: 'smooth' });
}

function getReviewCardHTML(qIndex) {
    const q = allQuestions[qIndex];
    const topicKey = questionTopics[qIndex];
    if (!topicKey) return '';
    const babData = reviewMaterial[q.bab];
    if (!babData || !babData.topics[topicKey]) return '';
    const topic = babData.topics[topicKey];
    return `<div class="review-card">
        <div class="review-title">📖 Materi yang Perlu Dipelajari: ${topic.title}</div>
        <div class="review-content">${topic.content}</div>
    </div>`;
}

function buildReviewSummary(saved) {
    const wrongByBab = {};
    allQuestions.forEach((q, i) => {
        if (parseInt(saved[i]) !== q.answer) {
            if (!wrongByBab[q.bab]) wrongByBab[q.bab] = new Set();
            const topicKey = questionTopics[i];
            if (topicKey) wrongByBab[q.bab].add(topicKey);
        }
    });

    let html = '';
    Object.entries(wrongByBab).forEach(([bab, topicSet]) => {
        const babData = reviewMaterial[bab];
        if (!babData) return;
        html += `<div class="review-bab"><h3>${babData.title}</h3>`;
        topicSet.forEach(topicKey => {
            const topic = babData.topics[topicKey];
            if (!topic) return;
            html += `<div class="concept"><h4>${topic.title}</h4>${topic.content}</div>`;
        });
        html += `</div>`;
    });

    document.getElementById('reviewContent').innerHTML = html;
}

function toggleReviewSummary() {
    const rs = document.getElementById('reviewSummary');
    const btn = document.getElementById('reviewToggleBtn');
    if (rs.style.display === 'block') {
        rs.style.display = 'none';
        btn.textContent = btn.textContent.replace('Sembunyikan', 'Lihat');
    } else {
        rs.style.display = 'block';
        btn.textContent = btn.textContent.replace('Lihat', 'Sembunyikan');
        rs.scrollIntoView({ behavior: 'smooth' });
    }
}

function resetExam() {
    if (!confirm('Yakin mau reset semua jawaban? Ini tidak bisa di-undo.')) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(RESULT_KEY);
    localStorage.removeItem(SUBMITTED_KEY);
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('reviewSummary').style.display = 'none';
    document.getElementById('reviewToggleBtn').style.display = 'none';
    document.getElementById('examStatus').textContent = 'Belum';
    renderQuiz();
    updateProgress();
    scrollToTop();
}

const unloadHandler = function (e) {
    if (!isSubmitted()) {
        const confirmationMessage = 'Yakin ingin meninggalkan halaman? Simulasi ujian sedang berjalan.';
        e.preventDefault(); // Standard modern browser (termasuk mobile)
        e.returnValue = confirmationMessage; // Chrome, Edge, Firefox, dll.
        return confirmationMessage; // Safari dan browser lama
    }
};

window.addEventListener('beforeunload', unloadHandler);
window.onbeforeunload = unloadHandler; // Fallback tambahan untuk iOS/Mobile Safari

// Intercept tombol back di HP (swipe back / tombol back android)
history.pushState(null, null, location.href);
window.addEventListener('popstate', function(event) {
    if (!isSubmitted()) {
        const leave = confirm('Yakin ingin kembali? Ujian sedang berjalan dan jawaban belum di-submit.');
        if (!leave) {
            // Cegah kembali dengan menambah state baru
            history.pushState(null, null, location.href);
        } else {
            // Biarkan user kembali
            history.back();
        }
    }
});

// Intercept navigasi dari klik link di navbar (Home, Ch 5, dll)
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!isSubmitted() && href && !href.startsWith('#')) {
            const leave = confirm('Yakin ingin pindah halaman? Ujian sedang berjalan dan jawaban belum di-submit.');
            if (!leave) {
                e.preventDefault(); // Batalkan pindah halaman
            }
        }
    });
});

// Init
renderQuiz();
updateProgress();
if (isSubmitted()) {
    document.getElementById('examStatus').textContent = 'Selesai';
}
