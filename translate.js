const fs = require('fs');

const replacements = [
    {
        oldQ: "Which scenario best illustrates the use of encryption at rest in a DBMS?",
        newQ: "Skenario manakah yang paling baik menggambarkan penggunaan encryption at rest dalam DBMS?",
        oldOpts: ["Obscuring column names in queries so attackers cannot guess their purpose.", "Encrypting the network connection between the application and database using a secure protocol.", "Storing data on disk in encrypted form, decrypted only when accessed.", "Hashing user passwords at insert operation time into the database."],
        newOpts: ["Menyamarkan nama kolom dalam kueri agar penyerang tidak dapat menebak tujuannya.", "Mengenknripsi koneksi jaringan antara aplikasi dan database menggunakan protokol yang aman.", "Menyimpan data pada disk dalam bentuk terenkripsi, dan dideskripsi hanya saat diakses.", "Melakukan hashing pada password pengguna saat operasi insert ke dalam database."]
    },
    {
        oldQ: "Which statement about key management for database encryption is most accurate from a security perspective?",
        newQ: "Pernyataan manakah tentang key management untuk enkripsi database yang paling akurat dari perspektif keamanan?",
        oldOpts: ["Once generated, encryption keys should never be rotated to avoid data loss.", "Manage it separately from the encrypted data, with access controls, rotation policies, and secure storage.", "Keys should be stored in the same location and format as the encrypted database files for fast and secure access.", "Keys should be embedded into application source code to simplify deployment."],
        newOpts: ["Setelah dibuat, encryption keys tidak boleh dirotasi (diganti) untuk menghindari hilangnya data.", "Dikelola secara terpisah dari data terenkripsi, dengan access control, kebijakan rotasi, dan penyimpanan yang aman.", "Kunci (keys) harus disimpan di lokasi dan format yang sama dengan file database terenkripsi untuk akses yang cepat dan aman.", "Kunci (keys) harus disematkan (embedded) ke dalam source code aplikasi untuk menyederhanakan deployment."]
    },
    {
        oldQ: "What does the consistency property in ACID primarily ensure when a transaction completes successfully in a well-designed database schema?",
        newQ: "Apa yang utamanya dijamin oleh sifat consistency dalam ACID ketika sebuah transaksi berhasil diselesaikan pada skema database yang dirancang dengan baik?",
        oldOpts: ["The transaction transforms the database from one valid state to another, preserving all integrity constraints.", "The transaction never experiences deadlock because it uses timeout-based lock acquisition only.", "The transaction is executed without ever waiting for locks, ensuring maximum throughput under heavy load.", "The transaction uses optimistic concurrency control, assuming conflicts will be rare during normal operation."],
        newOpts: ["Transaksi mengubah database dari satu state yang valid ke state valid lainnya, dengan menjaga seluruh constraint integritas.", "Transaksi tidak pernah mengalami deadlock karena hanya menggunakan akuisisi lock berbasis timeout.", "Transaksi dieksekusi tanpa pernah menunggu lock, sehingga menjamin throughput maksimum di bawah beban berat.", "Transaksi menggunakan optimistic concurrency control, dengan asumsi konflik akan jarang terjadi pada operasi normal."]
    },
    {
        oldQ: "An attacker discovers a search field that directly concatenates user input into a query used for customer data lookup. They submit input that always evaluates to true, such as injecting a tautology into the WHERE clause, and gain access to all customer rows. Which outcome best describes this SQL injection scenario?",
        newQ: "Penyerang menemukan field pencarian yang menggabungkan (concatenate) input pengguna secara langsung ke kueri pencarian data pelanggan. Mereka memasukkan input yang selalu bernilai true, seperti menyisipkan tautology ke klausa WHERE, dan mendapatkan akses ke semua baris pelanggan. Hasil manakah yang paling baik menggambarkan skenario SQL injection ini?",
        oldOpts: ["Unauthorized access to data beyond the intended result set without altering stored records.", "Authorized access to data with an audit trail clearly capturing all user actions.", "Unauthorized modification of existing data values while limiting access to a single row.", "Temporary corruption of database metadata without exposure of table contents."],
        newOpts: ["Akses tidak sah ke data (Unauthorized access) melebihi set hasil yang dituju tanpa mengubah record yang disimpan.", "Akses sah ke data dengan audit trail yang dengan jelas menangkap seluruh aktivitas pengguna.", "Modifikasi tidak sah pada nilai data yang ada sembari membatasi akses ke satu baris tunggal.", "Korupsi sementara pada metadata database tanpa mengekspos isi tabel."]
    },
    {
        oldQ: "Which example best describes a phantom read?",
        newQ: "Contoh manakah yang paling baik mendeskripsikan phantom read?",
        oldOpts: ["Two transactions update the same row and one overwrite the other’s changes without detecting the conflict.", "A transaction reads a row twice and gets different values each time.", "A transaction reads rows matching a condition, then later repeats the query and gets additional rows that now match.", "A transaction reads data that another transaction has modified but not yet committed."],
        newOpts: ["Dua transaksi mengupdate baris yang sama dan salah satunya menimpa perubahan yang lain tanpa mendeteksi konflik.", "Sebuah transaksi membaca satu baris dua kali dan mendapatkan nilai yang berbeda setiap kalinya (Non-repeatable read).", "Sebuah transaksi membaca baris yang cocok dengan suatu kondisi, lalu mengulang kueri tersebut dan mendapatkan baris tambahan yang kini cocok.", "Sebuah transaksi membaca data yang telah dimodifikasi oleh transaksi lain namun belum di-commit (Dirty read)."]
    },
    {
        oldQ: "Which of the following best describes a key security benefit of implementing RBAC in a database system?",
        newQ: "Manakah dari berikut ini yang paling baik mendeskripsikan manfaat keamanan utama dari penerapan RBAC dalam sistem database?",
        oldOpts: ["It automatically detects and blocks SQL injection attempts at the database layer.", "It eliminates the need for data encryption by controlling access at the role level.", "It ensures users only have permissions necessary for their role, limiting breach impact.", "It replaces authentication mechanisms by managing identity through role assignments."],
        newOpts: ["RBAC secara otomatis mendeteksi dan memblokir percobaan SQL injection di lapisan database.", "RBAC mengeliminasi kebutuhan enkripsi data dengan mengontrol akses pada level role.", "RBAC memastikan pengguna hanya memiliki permission yang diperlukan untuk peran (role) mereka, membatasi dampak dari pembobolan (Least Privilege).", "RBAC menggantikan mekanisme autentikasi dengan mengelola identitas melalui penugasan role."]
    },
    {
        oldQ: "Which practice best aligns with using security audits to strengthen defenses against SQL injection over time in a vendor-neutral environment?",
        newQ: "Praktik manakah yang paling sejalan dengan penggunaan security audits untuk memperkuat pertahanan terhadap SQL injection dari waktu ke waktu?",
        oldOpts: ["Relying solely on deadlock detection algorithms to reveal potential security issues in the query workload.", "Disabling all shared locks for read operations to allow unrestricted access to data during audits.", "Regularly reviewing query patterns, logs, and schema permissions to identify unsafe constructions and unnecessary privileges.", "Automatically lowering transaction isolation levels whenever performance issues are detected in production."],
        newOpts: ["Hanya mengandalkan algoritma deteksi deadlock untuk mengungkapkan potensi masalah keamanan pada beban kerja kueri.", "Menonaktifkan semua shared locks untuk operasi read guna mengizinkan akses tak terbatas ke data selama audit.", "Secara rutin meninjau pola kueri, log, dan permission skema untuk mengidentifikasi konstruksi yang tidak aman dan privileges yang tidak perlu.", "Secara otomatis menurunkan level isolasi transaksi kapanpun masalah performa terdeteksi di production."]
    },
    {
        oldQ: "In the context of ACID properties, what does atomicity guarantee for a database transaction that updates several related tables as part of a single logical operation?",
        newQ: "Dalam konteks sifat ACID, apa yang dijamin oleh atomicity untuk transaksi database yang mengupdate beberapa tabel terkait sebagai bagian dari satu operasi logis tunggal?",
        oldOpts: ["Either all of the transaction’s changes are committed together or none of them are, leaving the database without partial updates.", "Every read within the transaction sees only the latest committed data from other transactions, avoiding dirty reads.", "The transaction always acquires locks in a consistent order to prevent cycles, avoiding deadlock among concurrent sessions.", "The transaction’s changes are visible to other transactions as soon as they are written, even before commit completes."],
        newOpts: ["Semua perubahan transaksi di-commit bersama-sama atau tidak sama sekali, meninggalkan database tanpa adanya update parsial (All-or-nothing).", "Setiap read di dalam transaksi hanya melihat data yang terakhir di-commit dari transaksi lain, menghindari dirty reads.", "Transaksi selalu mengakuisisi lock dalam urutan yang konsisten untuk mencegah siklus, menghindari deadlock di antara sesi yang konkuren.", "Perubahan transaksi terlihat oleh transaksi lain segera setelah ditulis, bahkan sebelum commit selesai."]
    },
    {
        oldQ: "Which access control concept is central to Role-Based Access Control (RBAC)?",
        newQ: "Konsep kontrol akses manakah yang menjadi pusat dari Role-Based Access Control (RBAC)?",
        oldOpts: ["Using a single shared account for all users and tracking actions externally.", "Granting all authenticated users the same set of permissions.", "Grouping permissions into roles and assigning users to those roles.", "Directly assigning individual permissions to each user for every resource."],
        newOpts: ["Menggunakan satu akun bersama untuk semua pengguna dan melacak aktivitas secara eksternal.", "Memberikan set permission yang sama kepada semua pengguna yang terautentikasi.", "Mengelompokkan permission ke dalam roles (peran) dan menugaskan pengguna ke dalam roles tersebut.", "Menugaskan permission individu secara langsung ke setiap pengguna untuk setiap sumber daya."]
    },
    {
        oldQ: "Which scenario best illustrates a classic SQL injection vulnerability?",
        newQ: "Skenario manakah yang paling baik menggambarkan kerentanan SQL injection klasik?",
        oldOpts: ["A transaction fails due to a deadlock between two concurrent updates.", "User input is concatenated directly into an SQL string used to query the database.", "A query uses parameter placeholders and binds values at execution time.", "The database rejects a query because the user lacks sufficient privileges."],
        newOpts: ["Sebuah transaksi gagal karena deadlock antara dua update yang konkuren.", "Input pengguna digabungkan (concatenated) secara langsung ke dalam string SQL yang digunakan untuk melakukan kueri ke database.", "Sebuah kueri menggunakan parameter placeholders dan mengikat (bind) nilai pada saat eksekusi.", "Database menolak kueri karena pengguna tidak memiliki privileges yang memadai."]
    },
    {
        oldQ: "In a lock-based concurrency control system, which situation most clearly indicates a deadlock?",
        newQ: "Dalam sistem kontrol konkurensi berbasis lock, situasi manakah yang paling jelas mengindikasikan adanya deadlock?",
        oldOpts: ["A transaction experiences a timeout while waiting for a single lock and is rolled back.", "Two transactions each wait indefinitely for locks held by the other, forming a cycle of waiting.", "A transaction repeatedly restarts because its optimistic validation fails at commit time.", "A transaction is blocked waiting for a lock that will be released when another transaction commits."],
        newOpts: ["Sebuah transaksi mengalami timeout saat menunggu satu lock dan di-rollback.", "Dua transaksi saling menunggu lock yang dipegang satu sama lain tanpa batas waktu, membentuk siklus tunggu (cycle of waiting).", "Sebuah transaksi berulang kali restart karena validasi optimistic-nya gagal pada saat commit.", "Sebuah transaksi terblokir saat menunggu lock yang akan dilepaskan ketika transaksi lain melakukan commit."]
    },
    {
        oldQ: "Which situation best illustrates a violation of the \"Isolation\" property of ACID?",
        newQ: "Situasi manakah yang paling baik menggambarkan pelanggaran terhadap sifat \"Isolation\" dari ACID?",
        oldOpts: ["A transaction updates multiple rows but only some are written before a failure.", "After a crash, committed transactions are permanently preserved.", "A set of business rules is enforced through constraints.", "A transaction reads changes made by another transaction that later rolls back."],
        newOpts: ["Sebuah transaksi mengupdate banyak baris tetapi hanya beberapa yang tertulis sebelum terjadi kegagalan.", "Setelah sistem crash, transaksi yang telah di-commit secara permanen dipertahankan.", "Seperangkat aturan bisnis ditegakkan melalui constraints.", "Sebuah transaksi membaca perubahan yang dibuat oleh transaksi lain yang kemudian di-rollback (Dirty read)."]
    },
    {
        oldQ: "A user is temporarily given access to a \"Project Team\" role only for the duration of a specific project, then reverted to their original role afterward. Which RBAC concept is being applied?",
        newQ: "Seorang pengguna diberikan akses sementara ke role \"Project Team\" hanya selama durasi proyek tertentu, kemudian dikembalikan ke role aslinya. Konsep RBAC manakah yang sedang diterapkan?",
        oldOpts: ["Dynamic assignment", "Privilege granularity", "Role hierarchy", "Policy administration"],
        newOpts: ["Dynamic assignment (Penugasan dinamis)", "Privilege granularity", "Role hierarchy", "Policy administration"]
    },
    {
        oldQ: "Which SQL statement most clearly demonstrates the principle of restricting results with a precise predicate to reduce data exposure risk?",
        newQ: "Statement SQL manakah yang paling jelas mendemonstrasikan prinsip pembatasan hasil dengan predikat yang persis untuk mengurangi risiko tereksposnya data (data exposure risk)?",
        oldOpts: ["SELECT id, name FROM Customers;", "SELECT id, name FROM Customers WHERE status = 'ACTIVE';", "SELECT * FROM Customers WHERE status = 'ACTIVE';", "SELECT * FROM Customers;"],
        newOpts: ["SELECT id, name FROM Customers;", "SELECT id, name FROM Customers WHERE status = 'ACTIVE';", "SELECT * FROM Customers WHERE status = 'ACTIVE';", "SELECT * FROM Customers;"]
    },
    {
        oldQ: "Which statement best captures the benefit of the \"Durability\" property in ACID for database security?",
        newQ: "Pernyataan manakah yang paling baik menangkap manfaat dari sifat \"Durability\" dalam ACID untuk keamanan database?",
        oldOpts: ["It ensures that all scheduled operations are equivalent to some serial order of transactions.", "It allows transactions to be rolled back at any time, even after committing to follow flexibilty principles of database.", "It ensures that transactions do not see each other's uncommitted changes to prevent dirty reads and phantom reads.", "It guarantees that once a transaction commits, its changes will survive crashes and power failures."],
        newOpts: ["Menjamin bahwa semua operasi yang dijadwalkan akan setara dengan urutan transaksi yang serial.", "Mengizinkan transaksi untuk di-rollback kapan saja, bahkan setelah commit untuk mengikuti prinsip fleksibilitas database.", "Menjamin bahwa transaksi tidak melihat perubahan dari transaksi lain yang belum di-commit untuk mencegah dirty reads dan phantom reads.", "Menjamin bahwa setelah transaksi di-commit, perubahannya akan selamat dan bertahan dari crash dan kegagalan daya (mati listrik)."]
    },
    {
        oldQ: "A database administrator creates, modifies, and deletes roles and their associated privileges from a central location. Which RBAC concept does this describe?",
        newQ: "Seorang administrator database membuat, memodifikasi, dan menghapus roles beserta hak akses (privileges) terkait dari sebuah lokasi pusat. Konsep RBAC manakah yang mendeskripsikan hal ini?",
        oldOpts: ["Dynamic assignment", "Role hierarchy", "Policy administration", "Privilege granularity"],
        newOpts: ["Dynamic assignment", "Role hierarchy", "Policy administration (Administrasi kebijakan)", "Privilege granularity"]
    },
    {
        oldQ: "Which description best captures a \"lost update\" anomaly?",
        newQ: "Deskripsi manakah yang paling baik menangkap apa itu anomali \"lost update\"?",
        oldOpts: ["A transaction repeatedly reads data and sees different committed values each time.", "A transaction holds locks that prevent others from progressing, causing a deadlock.", "A transaction reads a value that another uncommitted transaction has written.", "Two transactions both update same data, and one transaction’s update is overwritten without detection."],
        newOpts: ["Sebuah transaksi berulang kali membaca data dan melihat nilai-nilai commit yang berbeda setiap kali (Non-repeatable read).", "Sebuah transaksi menahan lock yang mencegah transaksi lain untuk berprogres, menyebabkan deadlock.", "Sebuah transaksi membaca nilai yang telah ditulis oleh transaksi lain yang belum di-commit (Dirty read).", "Dua transaksi sama-sama mengupdate data yang sama, dan salah satu update tertimpa (overwritten) tanpa terdeteksi."]
    },
    {
        oldQ: "An architect is designing a key management strategy for a database system. Which practice best helps reduce the damage if an encryption key is exposed for a long-lived production database?",
        newQ: "Seorang arsitek merancang strategi key management untuk sistem database. Praktik manakah yang paling mengurangi kerusakan jika encryption key (kunci enkripsi) terekspos/bocor pada database production yang berumur panjang?",
        oldOpts: ["Storing keys in plaintext next to the encrypted data files for easier recovery", "Relying solely on strong passwords with multiple type of string (e.g., lowercase, uppercase, special characters) for database user accounts", "Using a single, never-changing master key stored physically in three-tier data center to prevent remote hijacking", "Rotating encryption keys on a regular schedule and re-encrypting data as needed"],
        newOpts: ["Menyimpan keys (kunci) dalam format plaintext di sebelah file data terenkripsi untuk pemulihan yang lebih mudah.", "Hanya mengandalkan password yang kuat dengan berbagai tipe string untuk akun pengguna database.", "Menggunakan single master key yang tidak pernah diganti yang disimpan secara fisik di data center tiga lapis untuk mencegah peretasan.", "Merotasi (mengganti) encryption keys dengan jadwal yang reguler dan mengenkripsi ulang data sesuai kebutuhan (Key Rotation)."]
    },
    {
        oldQ: "Which practice most directly reduces the risk of SQL injection when constructing queries that depend on user-supplied values such as identifiers, search terms, or filter criteria?",
        newQ: "Praktik manakah yang secara paling langsung mengurangi risiko SQL injection ketika menyusun kueri yang bergantung pada nilai-nilai yang diberikan pengguna (seperti term pencarian atau kriteria filter)?",
        oldOpts: ["Hashing user input before concatenating it into query strings to obfuscate special characters", "Caching previously executed query strings so that user input is reused instead of re-parsed", "Storing all user-supplied values in a separate logging table before executing dynamic queries", "Using parameterized statements that bind user input as data rather than concatenating it into query text"],
        newOpts: ["Melakukan hashing pada input pengguna sebelum menggabungkannya ke dalam string kueri untuk mengaburkan karakter khusus.", "Menyimpan dalam cache string kueri yang sebelumnya dieksekusi sehingga input pengguna digunakan kembali tanpa di-parse ulang.", "Menyimpan semua nilai dari pengguna dalam tabel logging terpisah sebelum mengeksekusi kueri dinamis.", "Menggunakan parameterized statements (prepared statements) yang mengikat (bind) input pengguna sebagai data daripada menggabungkannya."]
    },
    {
        oldQ: "Which measure most directly reduces the risk of SQL injection in an application that builds search queries from user input?",
        newQ: "Tindakan manakah yang secara paling langsung mereduksi risiko SQL injection dalam sebuah aplikasi yang membangun kueri pencarian dari input pengguna?",
        oldOpts: ["Relying on client-side input validation and JavaScript checks only.", "Encrypting the database files on disk with strong algorithms.", "Using parameterized queries with bound variables for all user-supplied values.", "Running the database on a separate network segment from the application."],
        newOpts: ["Hanya mengandalkan validasi input dari sisi klien (client-side) dan pengecekan menggunakan JavaScript.", "Mengenknripsi file database pada disk menggunakan algoritma yang kuat (Encryption at rest).", "Menggunakan parameterized queries dengan variabel-variabel terikat (bound variables) untuk seluruh nilai yang diberikan pengguna.", "Menjalankan database di segmen jaringan yang terpisah dari aplikasi."]
    }
];

const files = ['uas-simulation.html', 'ch01-database-security.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    replacements.forEach(r => {
        // Replace exact string matches
        content = content.replace(r.oldQ, r.newQ);
        
        r.oldOpts.forEach((oldOpt, i) => {
            content = content.replace(oldOpt, r.newOpts[i]);
        });
    });
    
    fs.writeFileSync(file, content);
});

console.log('Translated successfully!');
