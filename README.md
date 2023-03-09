# Bookshelf_API

PERHATIAN : Untuk menjalankan pastikan hapus dulu berkas node_modules. Dalam proyek ini berkas node_modules sengaja saya sertakan sebagai dokumentasi akhir.

Terdapat 7 kriteria utama yang harus dipenuhi dalam membuat proyek Bookshelf API.
- Kriteria 1 : Aplikasi menggunakan port 9000
- Kriteria 2 : Aplikasi dijalankan dengan perintah npm run start
- Kriteria 3 : API dapat menyimpan buku 
- Kriteria 4 : API dapat menampilkan seluruh buku
- Kriteria 5 : API dapat menampilkan detail buku
- Kriteria 6 : API dapat mengubah data buku
- Kriteria 7 : API dapat menghapus buku

Berikut merupakan dokumentasi dari masing-masing kriteria yang telah terpenuhi.

<img width="1280" alt="Screen Shot 2023-03-09 at 18 07 50" src="https://user-images.githubusercontent.com/114632917/224011945-7b6562f7-afcb-48d4-86d6-10baf490e2d4.png">

---------------------------------------------------------------------------------------------------------------------------------------
Untuk menguji apakah API berjalan sesuai dengan kriteria yang ada silahkan unduh berkas Postman Collection dan Environment yang dapat digunakan untuk pengujian melalui tautan berikut https://github.com/dicodingacademy/a261-backend-pemula-labs/raw/099-shared-files/BookshelfAPITestCollectionAndEnvironment.zip 

Lalu import kedua berkas tersebut pada Postman untuk digunakan. Caranya, ekstrak berkas yang sudah diunduh hingga menghasilkan dua berkas file JSON. Setelah itu klik klik tombol import yang berada di atas panel kiri aplikasi Postman lalu klik tombol Upload Files untuk meng-import kedua berkas JSON hasil ekstraksi. 

Proyek Bookshelf API harus memenuhi seluruh pengujian otomatis pada Postman request yang bertanda [Mandatory] seperti dokumentasi berikut.

![Bookshelf API](https://user-images.githubusercontent.com/114632917/224010810-f799a158-0665-46ce-b930-9d61993b63c0.jpeg)

---------------------------------------------------------------------------------------------------------------------------------------
Submission akan ditolak apabila.
- Kriteria wajib Bookshelf API tidak terpenuhi.
- Ketentuan berkas submission tidak terpenuhi.
- Menggunakan port selain 9000.
- Pada package.json tidak tersedia script start.
- Script start menggunakan nodemon.
- Menggunakan database seperti Postgres, MSSQL, MySQL, MariaDB, atau MongooDB untuk menyimpan data.
- Menggunakan JSON sebagai tempat penyimpanan data yang menyebabkan postman test menjadi gagal.
- Proyek yang dikirim tidak dapat dijalankan dengan baik (Reviewer menggunakan Node.js versi LTS 18.13.0).
- Menggunakan bahasa pemrograman dan teknologi lain, selain JavaScript dan Node.js.
- Menggunakan Framework Node.js selain Hapi Framework.
- Melakukan kecurangan seperti tindakan plagiasi.
