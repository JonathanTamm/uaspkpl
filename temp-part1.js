const part1 = [
    {
        "bab": "bab1",
        "q": "Jika sebuah hardisk server dicuri dari data center, teknologi apa yang paling menjamin bahwa data nasabah di dalamnya tidak dapat dibaca oleh pencuri?",
        "options": [
            "Firewall jaringan",
            "Encryption in transit",
            "Data-at-rest encryption",
            "Role-Based Access Control"
        ],
        "answer": 2,
        "explanation": "Encryption at rest melindungi data secara fisik ketika tersimpan di dalam disk/media penyimpanan."
    },
    {
        "bab": "bab1",
        "q": "Dalam implementasi enkripsi database, mengapa administrator sangat disarankan untuk melakukan 'key rotation' secara berkala?",
        "options": [
            "Untuk menghemat ruang penyimpanan di server",
            "Membatasi periode berlakunya sebuah kunci sehingga kerugian bisa diminimalisir jika kunci tersebut bocor",
            "Mempercepat proses dekripsi data saat diakses oleh pengguna",
            "Mencegah terjadinya SQL Injection pada tabel enkripsi"
        ],
        "answer": 1,
        "explanation": "Key rotation bertujuan membatasi waktu paparan (exposure) sebuah kunci, memperkecil jendela waktu bagi attacker jika kunci berhasil diretas."
    },
    {
        "bab": "bab1",
        "q": "Ketika nasabah A mentransfer uang ke nasabah B, sistem menjamin bahwa saldo A berkurang dan saldo B bertambah. Jika saat proses penambahan saldo B server mati, sistem membatalkan pengurangan saldo A. Sifat ACID apakah yang mencegah terjadinya pembaruan sebagian (partial update) ini?",
        "options": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        "answer": 0,
        "explanation": "Atomicity adalah prinsip All-or-Nothing. Transaksi berhasil seluruhnya atau tidak sama sekali."
    },
    {
        "bab": "bab1",
        "q": "Seorang peretas memasukkan input ' UNION SELECT username, password FROM users -- pada sebuah fitur pencarian produk. Metode pertahanan manakah yang paling efektif mencegah kueri berbahaya ini dieksekusi?",
        "options": [
            "Mengganti database menjadi NoSQL",
            "Mengenkripsi seluruh data produk",
            "Memanfaatkan Parameterized Statements",
            "Menonaktifkan fitur pencarian"
        ],
        "answer": 2,
        "explanation": "Parameterized statements mencegah input (seperti UNION SELECT) dieksekusi sebagai perintah dan memaksanya menjadi sekadar teks data."
    },
    {
        "bab": "bab1",
        "q": "Sebuah transaksi A melakukan perhitungan total pendapatan hari ini. Di saat yang bersamaan, transaksi B berhasil menyisipkan data transaksi penjualan baru ke dalam tabel. Saat transaksi A mengulang kueri, ia mendapati total pendapatannya berubah karena adanya baris tambahan. Anomali konkurensi apakah ini?",
        "options": [
            "Dirty read",
            "Lost update",
            "Non-repeatable read",
            "Phantom read"
        ],
        "answer": 3,
        "explanation": "Phantom read terjadi ketika sebuah transaksi melihat adanya baris-baris 'hantu' (tambahan/kurangan) yang muncul karena transaksi lain saat kondisi pencarian yang sama diulang."
    },
    {
        "bab": "bab1",
        "q": "Manajer HRD baru saja dipromosikan. Administrator database cukup memindahkan akunnya dari grup 'Staff' ke grup 'Manager' tanpa perlu mengatur ulang izin per tabel. Mekanisme keamanan apa yang digunakan?",
        "options": [
            "Mandatory Access Control",
            "Role-Based Access Control (RBAC)",
            "Encryption at Rest",
            "Database Auditing"
        ],
        "answer": 1,
        "explanation": "RBAC memungkinkan pengaturan hak akses berbasis peran (grup), bukan mengaturnya per individu/tabel secara manual."
    },
    {
        "bab": "bab1",
        "q": "Sebuah aplikasi sering mengalami upaya serangan SQL Injection. Untuk mengurangi risiko secara mendasar, arsitek sistem memutuskan untuk menggunakan ORM (Object-Relational Mapping). Mengapa ORM membantu mencegah SQL Injection?",
        "options": [
            "Secara otomatis memblokir IP address penyerang",
            "Mengenkripsi semua kolom yang rentan secara default",
            "Menerapkan parameterized statements secara otomatis di bawah layar",
            "Menolak semua karakter khusus (spesial) dari input pengguna"
        ],
        "answer": 2,
        "explanation": "Kebanyakan ORM modern secara otomatis mengemas kuerinya dalam bentuk parameterized statements, menetralisir input berbahaya."
    },
    {
        "bab": "bab1",
        "q": "Dalam sistem perbankan, aturan menyatakan bahwa saldo tidak boleh di bawah nol (minus). Sifat ACID mana yang memastikan bahwa setelah suatu transaksi selesai, aturan saldo minimal ini tidak pernah dilanggar?",
        "options": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability"
        ],
        "answer": 1,
        "explanation": "Consistency memastikan bahwa database selalu berpindah dari satu kondisi valid ke kondisi valid lainnya tanpa melanggar constraints/aturan bisnis."
    },
    {
        "bab": "bab1",
        "q": "Prinsip Least Privilege dalam konteks RBAC diterapkan dengan cara...",
        "options": [
            "Memberikan hak akses Superadmin kepada semua pengguna untuk menghindari masalah akses",
            "Hanya memberikan privileges (izin) yang benar-benar dibutuhkan oleh suatu peran untuk melakukan pekerjaannya",
            "Menghapus semua peran (roles) setiap akhir minggu dan membuatnya ulang",
            "Melarang semua akses read/write ke tabel penting"
        ],
        "answer": 1,
        "explanation": "Least privilege berarti pengguna hanya diberi izin sekecil mungkin yang diperlukan untuk menjalankan perannya, meminimalisir risiko eksploitasi."
    },
    {
        "bab": "bab1",
        "q": "Selain menggunakan Parameterized Statements, praktik manakah yang juga direkomendasikan dalam konsep Defense in Depth untuk mencegah dampak SQL Injection?",
        "options": [
            "Menyimpan kata sandi database dalam file teks biasa",
            "Menerapkan Input Validation dan membatasi hak akses akun database (Least Privilege)",
            "Menjalankan aplikasi web dan database pada server fisik yang sama",
            "Menghilangkan semua validasi di sisi client (frontend)"
        ],
        "answer": 1,
        "explanation": "Input validation menolak data cacat di awal, dan Least Privilege memastikan penyerang tidak bisa merusak sistem terlalu jauh seandainya SQLi berhasil."
    },
    {
        "bab": "bab1",
        "q": "Dua staf mencoba memperbarui data kontak pelanggan yang sama secara bersamaan. Jika staf A memperbarui email dan staf B memperbarui nomor telepon, lalu sistem mengizinkan keduanya sehingga update A hilang tertimpa oleh B. Fenomena ini disebut...",
        "options": [
            "Deadlock",
            "Phantom read",
            "Lost update",
            "Dirty read"
        ],
        "answer": 2,
        "explanation": "Lost update terjadi saat pembaruan dari satu transaksi tertimpa (hilang) oleh transaksi lain tanpa terdeteksi."
    },
    {
        "bab": "bab1",
        "q": "Level isolasi 'Serializable' memberikan tingkat keamanan tertinggi terhadap anomali data, namun jarang digunakan secara default. Apa alasan utama keengganan menggunakan level isolasi ini?",
        "options": [
            "Menghapus data lama secara otomatis",
            "Mengurangi performa dan meningkatkan risiko terjadinya Deadlock karena banyaknya lock yang ditahan",
            "Tidak mendukung transaksi yang melibatkan banyak tabel",
            "Memicu terjadinya SQL Injection"
        ],
        "answer": 1,
        "explanation": "Serializable sangat aman tapi sangat lambat dan rawan Deadlock karena transaksi dikunci dan diproses seperti mengantre satu per satu."
    },
    {
        "bab": "bab1",
        "q": "Ketika seorang pegawai dipinjamkan ke departemen lain selama dua minggu, admin menambahkannya ke role departemen tersebut dan akan mencabutnya otomatis setelah dua minggu. Konsep RBAC apa yang ditunjukkan?",
        "options": [
            "Role Hierarchy",
            "Policy Administration",
            "Privilege Granularity",
            "Dynamic Assignment"
        ],
        "answer": 3,
        "explanation": "Dynamic assignment adalah penugasan ke dalam suatu role secara dinamis/sementara berdasarkan kebutuhan situasi."
    },
    {
        "bab": "bab1",
        "q": "Di antara pernyataan berikut, manakah yang merupakan salah kaprah (mitos) umum mengenai SQL Injection?",
        "options": [
            "Bisa dicegah sepenuhnya dengan memfilter karakter kutip tunggal (') saja",
            "Terjadi karena percampuran antara data dan perintah SQL",
            "Bisa berdampak pencurian seluruh data database",
            "Dapat dicegah secara efektif menggunakan prepared statements"
        ],
        "answer": 0,
        "explanation": "Hanya memfilter tanda kutip tidak cukup (masih bisa di-bypass, misalnya SQLi bertipe numerik yang tidak butuh kutip). Prepared statements adalah jalan keluarnya."
    },
    {
        "bab": "bab1",
        "q": "Transaksi X membaca stok barang berjumlah 10. Transaksi Y tiba-tiba membeli 5 barang dan sudah berhasil commit. Saat Transaksi X membaca ulang stok untuk konfirmasi, jumlahnya berubah menjadi 5. Anomali ini dinamakan...",
        "options": [
            "Phantom read",
            "Non-repeatable read",
            "Dirty read",
            "Lost update"
        ],
        "answer": 1,
        "explanation": "Non-repeatable read: membaca baris yang sama dua kali dan mendapatkan nilai (isi) yang berbeda karena sudah dimodifikasi oleh transaksi lain yang sudah commit."
    },
    {
        "bab": "bab1",
        "q": "Di perusahaan besar, sangat sulit mengelola ribuan akses individu. RBAC menyelesaikannya dengan cara 'Policy Administration' tersentralisasi. Keuntungan utama dari pendekatan ini adalah...",
        "options": [
            "Database tidak pernah mengalami crash",
            "Admin cukup mengelola privileges pada level Role, sehingga saat individu masuk/keluar hanya perlu diatur rolenya",
            "Enkripsi database berjalan 100% lebih cepat",
            "Setiap pengguna dapat menentukan hak aksesnya masing-masing"
        ],
        "answer": 1,
        "explanation": "Policy Administration tersentralisasi memudahkan admin mengatur hak akses via grup/Role, membuat administrasi pengguna masif menjadi jauh lebih efisien."
    },
    {
        "bab": "bab1",
        "q": "Level isolasi apa yang diperlukan secara minimum untuk mencegah 'Dirty Read' (membaca data yang belum di-commit oleh orang lain)?",
        "options": [
            "Read uncommitted",
            "Read committed",
            "Repeatable read",
            "Serializable"
        ],
        "answer": 1,
        "explanation": "Read committed adalah level isolasi paling minimum untuk memastikan transaksi hanya bisa membaca data yang sudah pasti di-commit (mencegah dirty read)."
    },
    {
        "bab": "bab1",
        "q": "Selain mengenkripsi data di dalam storage (at rest), aplikasi perbankan modern juga mengenkripsi data saat dikirim lewat jaringan menggunakan protokol SSL/TLS. Jenis perlindungan ini disebut...",
        "options": [
            "Data-in-use encryption",
            "Data-in-transit encryption",
            "Transparent Data Encryption",
            "Symmetric Cryptography"
        ],
        "answer": 1,
        "explanation": "Data-in-transit encryption bertugas melindungi data saat bergerak (ditransmisikan) melintasi jaringan."
    },
    {
        "bab": "bab1",
        "q": "Seorang analis keamanan menemukan bahwa sistem aplikasi rentan terhadap SQLi berjenis 'Blind SQL Injection'. Apa karakteristik utama dari serangan ini?",
        "options": [
            "Penyerang melihat pesan error database yang sangat detail di layar browser",
            "Aplikasi tidak mengembalikan pesan error sama sekali, sehingga penyerang harus menebak isi data berdasarkan perbedaan respons waktu atau halaman",
            "Penyerang mengekstrak jutaan baris data sekaligus dalam hitungan detik",
            "Serangan ini hanya bisa dilakukan oleh admin database internal"
        ],
        "answer": 1,
        "explanation": "Blind SQLi artinya penyerang tidak melihat hasil secara langsung (buta), tapi bisa mencuri data pelan-pelan dengan menanyakan kueri benar/salah (Yes/No)."
    },
    {
        "bab": "bab1",
        "q": "Salah satu cara memperkecil scope kerusakan saat SQL Injection terjadi adalah membatasi akun koneksi database di aplikasi agar hanya punya hak akses minimal (misal, tidak bisa DROP TABLE). Ini merupakan aplikasi dari prinsip...",
        "options": [
            "Defense in Depth (Least Privilege)",
            "Denial of Service",
            "Symmetric Encryption",
            "Database Clustering"
        ],
        "answer": 0,
        "explanation": "Menerapkan hak akses minimal (Least Privilege) pada kredensial koneksi memastikan bahwa attacker tak dapat menjebol/menghapus struktur penting meskipun SQLi tembus."
    },
    {
        "bab": "bab2",
        "q": "Sebuah unit test memeriksa logika diskon keranjang belanja, tetapi gagal saat dijalankan di server karena tidak ada koneksi internet. Prinsip unit test manakah yang telah dilanggar?",
        "options": [
            "Isolasi",
            "Cepat",
            "Fokus",
            "Lengkap"
        ],
        "answer": 0,
        "explanation": "Unit test harus terisolasi. Tes yang gagal hanya karena koneksi internet berarti ia tidak terisolasi dari sistem/jaringan eksternal."
    },
    {
        "bab": "bab2",
        "q": "Dalam pengembangan CI/CD yang berjalan setiap hari, unit test harus selesai dalam hitungan detik. Mengapa prinsip 'Cepat' sangat fundamental bagi Unit Testing?",
        "options": [
            "Supaya aplikasi tidak memakan banyak memori RAM",
            "Agar developer tidak malas menjalankan tes sesering mungkin dan segera mendapat feedback jika ada error",
            "Karena compiler bahasa pemrograman memaksa tes harus cepat",
            "Untuk mempercepat koneksi database"
        ],
        "answer": 1,
        "explanation": "Bila tes lambat, developer akan enggan menjalankannya. Tes yang cepat menjamin feedback instan saat coding."
    },
    {
        "bab": "bab2",
        "q": "Saat menguji modul input username, test case memasukkan string panjang dengan karakter kontrol seperti '; DROP TABLE users; --'. Apa nama kerentanan (OWASP) yang sedang dicegah dalam tes ini?",
        "options": [
            "Insecure Design",
            "Broken Access Control",
            "Injection",
            "SSRF"
        ],
        "answer": 2,
        "explanation": "Memasukkan syntax SQL berbahaya ke dalam input bertujuan menguji keamanan terhadap kerentanan Injection (SQLi)."
    },
    {
        "bab": "bab2",
        "q": "Developer menulis unit test untuk memastikan fungsi deleteUser(id) melempar error jika dipanggil oleh user yang memiliki role 'Customer'. Tes ini secara langsung memitigasi risiko keamanan OWASP yaitu...",
        "options": [
            "Security Misconfiguration",
            "Broken Access Control",
            "Vulnerable Components",
            "Cryptographic Failures"
        ],
        "answer": 1,
        "explanation": "Mencegah user biasa melakukan tugas admin (menghapus user) adalah perlindungan terhadap Broken Access Control."
    },
    {
        "bab": "bab2",
        "q": "Test case Anda membaca field password dari objek User yang tersimpan, lalu melakukan 'assert' bahwa isi password tersebut tidak sama dengan plaintext yang di-input saat registrasi. Ini menguji mitigasi dari...",
        "options": [
            "Security Logging Failures",
            "Cryptographic Failures",
            "SSRF",
            "Injection"
        ],
        "answer": 1,
        "explanation": "Menguji bahwa password disimpan dalam bentuk hash (tidak sama dengan plaintext) mencegah risiko Cryptographic Failures."
    },
    {
        "bab": "bab2",
        "q": "Di samping SQL Injection, memasukkan skrip JavaScript berbahaya ke dalam input nama pengguna untuk melihat apakah aplikasi menetralisirnya (escaping) adalah bentuk uji pencegahan tipe Injection yang dikenal sebagai...",
        "options": [
            "Cross-Site Scripting (XSS)",
            "SQLmap",
            "Burp Suite",
            "XML External Entities"
        ],
        "answer": 0,
        "explanation": "XSS juga masuk ke dalam rumpun Injection pada konteks browser klien (menyuntikkan skrip berbahaya)."
    },
    {
        "bab": "bab2",
        "q": "Fungsi checkout pembayaran memanggil API Payment Gateway Stripe. Untuk memastikan unit test tidak mendebit kartu kredit sungguhan setiap kali dijalankan, teknik apa yang wajib digunakan?",
        "options": [
            "Stress Testing",
            "Black Box Testing",
            "Mocking / Stubbing",
            "System Testing"
        ],
        "answer": 2,
        "explanation": "Mocking digunakan untuk memalsukan (mengganti) service eksternal seperti Stripe agar tes tetap lokal, cepat, dan aman."
    },
    {
        "bab": "bab2",
        "q": "Seorang programmer React (JavaScript) ingin menulis unit test untuk komponen frontend-nya. Framework populer manakah yang merupakan standar de-facto untuk kebutuhan ini?",
        "options": [
            "Pytest",
            "JUnit",
            "NUnit",
            "Jest"
        ],
        "answer": 3,
        "explanation": "Jest adalah framework testing paling dominan di ekosistem JavaScript (khususnya React)."
    },
    {
        "bab": "bab2",
        "q": "Tim backend menggunakan Java Spring Boot. Manajer proyek menanyakan framework apa yang perlu di-install untuk menulis unit testing. Jawabannya adalah...",
        "options": [
            "Jest",
            "Pytest",
            "JUnit",
            "xUnit"
        ],
        "answer": 2,
        "explanation": "JUnit adalah kerangka pengujian unit standar paling populer di ekosistem Java."
    },
    {
        "bab": "bab2",
        "q": "Developer membuat satu fungsi unit test panjang yang menguji 5 fungsi matematis berbeda sekaligus. Jika fungsi gagal, developer kesulitan mencari tahu mana dari ke-5 fungsi itu yang rusak. Prinsip apakah yang diabaikan?",
        "options": [
            "Isolasi",
            "Cepat",
            "Fokus",
            "Independen"
        ],
        "answer": 2,
        "explanation": "Prinsip Fokus menuntut satu unit test hanya menguji SATU skenario/perilaku saja agar saat gagal langsung ketahuan sumbernya."
    },
    {
        "bab": "bab2",
        "q": "Sebuah unit test gagal karena setelah 10 kali percobaan password yang salah secara berturut-turut, akun pengguna masih belum terkunci. Tes ini didesain untuk mencegah eksploitasi Brute-Force yang tergolong dalam kerentanan...",
        "options": [
            "SSRF",
            "Insecure Design",
            "Cryptographic Failures",
            "Broken Access Control"
        ],
        "answer": 1,
        "explanation": "Tidak adanya pembatasan/rate-limit (lockout) untuk perlindungan brute-force merupakan kelemahan arsitektur/Insecure Design."
    },
    {
        "bab": "bab2",
        "q": "Unit test: 'assert config.isDebug == false' jika env = Production. Tes ini dibuat semata-mata untuk mencegah tereksposnya pesan error sensitif kepada publik, yang termasuk dalam kerentanan...",
        "options": [
            "Security Misconfiguration",
            "Injection",
            "Broken Access Control",
            "Vulnerable Components"
        ],
        "answer": 0,
        "explanation": "Meninggalkan mode Debug menyala di server Production adalah contoh klasik Security Misconfiguration."
    },
    {
        "bab": "bab2",
        "q": "Developer menyertakan unit test yang memantau output konsol untuk memastikan tulisan 'ALERT: Failed Login' dipanggil ketika pengguna salah memasukkan password. Tes ini menjaga sistem dari kelemahan OWASP yaitu...",
        "options": [
            "Security Logging and Monitoring Failures",
            "Insecure Design",
            "Cryptographic Failures",
            "SSRF"
        ],
        "answer": 0,
        "explanation": "Memastikan aktivitas mencurigakan tercatat dengan baik di dalam log merupakan mitigasi dari Security Logging and Monitoring Failures."
    },
    {
        "bab": "bab2",
        "q": "Fungsi fetchImageFromURL() diuji dengan memberikan input 'http://127.0.0.1/admin-panel'. Tes berharap fungsi ini me-lempar peringatan akses ditolak. Ini adalah pengujian untuk mendeteksi kerentanan...",
        "options": [
            "SSRF (Server-Side Request Forgery)",
            "Injection",
            "Broken Access Control",
            "Security Misconfiguration"
        ],
        "answer": 0,
        "explanation": "Memaksa server untuk mengakses jaringan lokal internalnya (localhost/127.0.0.1) adalah definisi serangan SSRF."
    },
    {
        "bab": "bab2",
        "q": "Dalam tim yang sering melakukan refactoring (perombakan kode), unit test bertindak seperti 'jaring pengaman'. Apa makna dari analogi ini?",
        "options": [
            "Mencegah server mengalami down saat traffic tinggi",
            "Bila kode diubah dan merusak fitur lama, tes yang gagal akan langsung menangkapnya sebelum di-deploy",
            "Mengubah kode menjadi lebih cepat dieksekusi oleh mesin",
            "Menghindari kebutuhan melakukan code review secara manual"
        ],
        "answer": 1,
        "explanation": "Jaring pengaman (safety net) berarti developer bisa berani merombak kode karena jika ada yang rusak, lampu merah unit test akan menyala."
    },
    {
        "bab": "bab2",
        "q": "Aplikasi mengalami peretasan karena menggunakan pustaka pemroses gambar (ImageMagick) versi lama yang sudah diketahui berlubang. Untuk menghindari hal ini (OWASP: Vulnerable Components), strategi apa yang harus diterapkan di CI/CD?",
        "options": [
            "Menguji semua password menggunakan enkripsi",
            "Rutin menggunakan tool pemindai dependensi (seperti npm audit/Dependabot) untuk memastikan library selalu update",
            "Menggunakan firewall berbasis hardware",
            "Membuat unit test untuk mengecek SQL Injection"
        ],
        "answer": 1,
        "explanation": "Satu-satunya cara mengatasi Vulnerable & Outdated Components adalah mendeteksi secara otomatis dan rutin memperbarui versi dependensi library pihak ketiga."
    },
    {
        "bab": "bab3",
        "q": "Developer baru saja memperbaiki bug di fitur 'Lupa Password'. Untuk memastikan perubahan tersebut tidak merusak fitur 'Login' yang sebelumnya sudah berjalan normal, proses apa yang wajib dilakukan?",
        "options": [
            "Unit Testing",
            "Alpha Testing",
            "Regression Testing",
            "Performance Testing"
        ],
        "answer": 2,
        "explanation": "Regression testing dijalankan setelah ada perubahan kode (fix bug/fitur baru) untuk memastikan fungsionalitas lama tidak ikut rusak."
    },
    {
        "bab": "bab3",
        "q": "Seorang QA Tester memverifikasi perbaikan bug 'Tombol Submit tidak bisa di-klik'. Setelah dipastikan bisa, ia kemudian menjalankan 100 test case otomatis untuk memastikan fitur pendaftaran secara umum aman. Manakah pernyataan yang benar?",
        "options": [
            "Pengecekan tombol Submit adalah Regression, dan 100 test case adalah Retesting",
            "Keduanya adalah Regression Testing",
            "Keduanya adalah Retesting",
            "Pengecekan tombol Submit adalah Retesting, dan 100 test case adalah Regression Testing"
        ],
        "answer": 3,
        "explanation": "Retesting khusus untuk mengecek bug yang spesifik telah diperbaiki. Regression testing mengecek dampaknya secara meluas (100 test case lainnya)."
    },
    {
        "bab": "bab3",
        "q": "Dalam pipeline Continuous Integration (CI), regression testing otomatis sangat krusial karena ia...",
        "options": [
            "Secara otomatis memperbarui desain tampilan aplikasi web",
            "Menjaga stabilitas build; mencegah kode yang merusak fitur lama digabungkan (merge) ke production",
            "Menggantikan peran dari Penetration Testing",
            "Menghasilkan dokumentasi bisnis secara instan"
        ],
        "answer": 1,
        "explanation": "Peran regression test dalam CI adalah sebagai palang pintu otomatis yang menolak penggabungan kode jika terdeteksi ada regresi (fitur lama rusak)."
    },
    {
        "bab": "bab3",
        "q": "Karena menjalankan seluruh 5.000 test case memakan waktu berjam-jam, tim QA memutuskan untuk hanya menjalankan test case yang berfokus pada fitur transaksi pembayaran, karena perubahan kode terjadi pada modul diskon. Strategi seleksi ini disebut...",
        "options": [
            "Complete Regression",
            "Random Selection",
            "Dependency-based / Coverage-based selection",
            "Corrective Regression"
        ],
        "answer": 2,
        "explanation": "Memilih hanya test case yang berhubungan dengan modul yang berubah (atau saling bergantung) disebut Coverage/Dependency-based selection."
    },
    {
        "bab": "bab3",
        "q": "Selama setahun, tim selalu lulus regression test 100%, tetapi ternyata sering muncul bug kritis di fitur-fitur baru yang dilaporkan oleh klien. Apa kesalahan terbesar dalam strategi regression testing mereka?",
        "options": [
            "Mereka tidak menggunakan framework Jest",
            "Test suite tidak pernah diperbarui (update) dengan test case untuk fitur baru",
            "Mereka tidak melakukan Performance Testing",
            "Server database mereka tidak memakai SSD"
        ],
        "answer": 1,
        "explanation": "Bila test suite tidak pernah diupdate, fitur baru yang dikembangkan tidak akan terlindungi oleh tes. Akibatnya, tes lama lulus tapi bug fitur baru tak terdeteksi."
    },
    {
        "bab": "bab3",
        "q": "Regression Testing paling efektif dan efisien jika dilakukan dengan pendekatan...",
        "options": [
            "Dilakukan sepenuhnya secara manual oleh tim QA berulang kali",
            "Diotomatisasi (Automation) mengingat pengujiannya repetitif (berulang setiap ada rilis baru)",
            "Diserahkan kepada pelanggan saat tahap UAT",
            "Tidak perlu dilakukan jika developer sudah yakin dengan kodenya"
        ],
        "answer": 1,
        "explanation": "Karakteristik utama regression test adalah repetitif dan sering dijalankan (tiap commit/release), sehingga otomatisasi sangat direkomendasikan."
    },
    {
        "bab": "bab3",
        "q": "Tim IT hanya mengubah pengaturan konfigurasi server tanpa mengubah satu baris pun kode aplikasi. Mereka menjalankan regression test untuk memastikan aplikasi tetap berjalan. Tipe regression testing ini dinamakan...",
        "options": [
            "Progressive Regression Testing",
            "Corrective Regression Testing",
            "Partial Regression Testing",
            "Random Regression Testing"
        ],
        "answer": 1,
        "explanation": "Corrective regression testing dilakukan tanpa modifikasi source code (misal ubah spek server/konfig), hanya untuk memverifikasi ulang bahwa semua masih normal."
    },
    {
        "bab": "bab3",
        "q": "Untuk aplikasi lama (legacy) yang belum memiliki API, tim menggunakan alat seperti UI.Vision untuk merekam interaksi klik dan ketik layar (Record & Playback) guna menguji fungsionalitas UI secara otomatis. Teknologi ini dikenal sebagai...",
        "options": [
            "Performance Load Balancing",
            "Robotic Process Automation (RPA)",
            "Static Code Analysis",
            "Docker Containerization"
        ],
        "answer": 1,
        "explanation": "RPA (Robotic Process Automation) memanfaatkan bot software untuk meniru tindakan manusia di antarmuka UI secara otomatis, sangat berguna untuk UI regression test."
    },
    {
        "bab": "bab3",
        "q": "Seorang manajer bingung antara Regression Testing dan Load Testing. Penjelasan yang paling tepat adalah...",
        "options": [
            "Load Testing melihat seberapa kuat server menahan traffic, sedangkan Regression melihat apakah fungsionalitas berubah menjadi error pasca revisi",
            "Keduanya sama-sama berfokus pada kecepatan respon server",
            "Regression test harus dilakukan sebelum Unit test",
            "Load testing fokus pada keamanan, Regression fokus pada performa"
        ],
        "answer": 0,
        "explanation": "Regression = fungsionalitas (apakah ada fitur yang kembali rusak). Load = Performa (menahan beban pengguna)."
    },
    {
        "bab": "bab3",
        "q": "Dalam pengembangan versi mayor (Major Release) di mana hampir seluruh arsitektur database diubah secara besar-besaran, pendekatan regression testing manakah yang wajib diambil untuk menjamin keamanan rilis?",
        "options": [
            "Selective Regression Testing (hanya fitur tertentu)",
            "Corrective Regression Testing",
            "Complete/Full Regression Testing (seluruh 100% test suite)",
            "Progressive Random Testing"
        ],
        "answer": 2,
        "explanation": "Bila perubahannya radikal dan menyentuh bagian inti sistem, Full/Complete Regression Test harus dieksekusi pada seluruh aplikasi untuk mencegah bencana kegagalan sistem."
    },
    {
        "bab": "bab3",
        "q": "Tim mengidentifikasi bahwa modul 'Transfer Uang' memiliki dampak kerugian miliaran rupiah jika error, sedangkan modul 'Ganti Foto Profil' dampaknya kecil. Oleh karena itu, modul 'Transfer Uang' wajib masuk dalam setiap eksekusi regression test. Ini adalah penerapan strategi...",
        "options": [
            "Dependency-based selection",
            "Random-based selection",
            "Risk-based selection",
            "Time-based selection"
        ],
        "answer": 2,
        "explanation": "Risk-based selection berarti memprioritaskan tes pada area-area yang secara bisnis memiliki risiko paling tinggi jika terjadi kegagalan."
    },
    {
        "bab": "bab3",
        "q": "Sebuah sprint baru saja menambahkan fitur 'Wishlist' ke aplikasi toko online, dan test suite yang lama perlu ditambah dengan puluhan test case baru yang merepresentasikan fitur Wishlist tersebut. Proses adaptasi/penambahan tes baru ini termasuk tipe...",
        "options": [
            "Corrective Regression",
            "Complete Regression",
            "Progressive Regression",
            "Partial Regression"
        ],
        "answer": 2,
        "explanation": "Progressive Regression Testing terjadi ketika ada fitur baru yang membuat test case lama mungkin perlu disesuaikan atau perlu penambahan test case progresif."
    },
    {
        "bab": "bab3",
        "q": "Mitos yang salah mengenai Regression Testing adalah...",
        "options": [
            "Akan memakan banyak waktu jika dilakukan secara manual",
            "Hanya dapat mengecek regresi, bukan mencari cacat desain UX/UI yang rumit",
            "Apabila semua Unit Test sukses, maka Regression Testing sudah pasti 100% sukses dan tidak lagi dibutuhkan",
            "Regression Testing krusial untuk aplikasi berjangka panjang (agile)"
        ],
        "answer": 2,
        "explanation": "Suksesnya unit test pada fungsi individu tidak menjamin bahwa gabungan kode tidak merusak alur sistem yang lebih besar (regression bug). Keduanya saling melengkapi."
    },
    {
        "bab": "bab3",
        "q": "Istilah 'Retest All' merujuk pada strategi seleksi di mana...",
        "options": [
            "Semua tester diminta untuk istirahat",
            "Seluruh test case dalam library (gudang tes) dieksekusi tanpa kecuali untuk mendapat tingkat kepercayaan maksimal",
            "Hanya tes yang gagal sebelumnya yang dites ulang",
            "Semua laporan bug dihapus dari sistem"
        ],
        "answer": 1,
        "explanation": "Retest All adalah sinonim dari Complete/Full Regression Testing, menjalankan seluruh test case di repository."
    },
    {
        "bab": "bab3",
        "q": "Menjalankan Regression Testing terlalu sering (misal setiap menit) pada repository tes yang raksasa justru bisa berdampak buruk bagi developer karena...",
        "options": [
            "Membuat server menjadi lebih cepat",
            "Menghabiskan waktu tunggu (build time) berlebihan yang memperlambat laju produktivitas development",
            "Kode aplikasi menjadi usang otomatis",
            "Keamanan sistem akan menurun"
        ],
        "answer": 1,
        "explanation": "Terlalu lama menunggu hasil full regression test dapat merusak feedback loop. Itulah mengapa Selective/Risk-based regression sering digunakan untuk commit harian."
    },
    {
        "bab": "bab3",
        "q": "Keuntungan terbesar penggunaan tool RPA Open Source seperti UI.Vision (Kantu) dalam Regression Testing berbasis visual adalah...",
        "options": [
            "Dapat meretas kata sandi kompetitor secara otomatis",
            "Mampu mengenali pola visual (gambar) pada layar layaknya manusia, bahkan saat struktur HTML aplikasi berantakan",
            "Mampu menerjemahkan bahasa secara otomatis",
            "Menggantikan fungsi database sepenuhnya"
        ],
        "answer": 1,
        "explanation": "Tool RPA visual modern mampu melakukan image recognition/computer vision, sehingga ia bisa mengklik elemen berdasarkan 'penampakannya' di layar tanpa bergantung penuh pada DOM HTML."
    }
];