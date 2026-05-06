// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

// Fungsi addBook
// Fungsi ini digunakan untuk menambahkan buku baru ke dalam koleksi
// Parameter yang dibutuhkan: data buku sesuai tipe Book
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan bagaimana cara menambahkan buku ke array yang sudah disediakan

// Fungsi listBooks
// Fungsi ini digunakan untuk menampilkan semua buku yang tersimpan
// Tidak memerlukan parameter
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: pikirkan cara menampilkan data buku dengan format yang mudah dibaca

// Fungsi searchBook
// Fungsi ini digunakan untuk mencari buku berdasarkan judul
// Parameter title bersifat opsional (bisa ada atau tidak)
// Fungsi ini tidak mengembalikan nilai (void)
// Petunjuk: jika parameter title diberikan, cari buku yang cocok
//           jika tidak diberikan, tampilkan semua buku atau berikan informasi yang sesuai

import { Book } from '../types/index';
import { books } from '../data/books';

// Fungsi addBook
export function addBook(newBook: Book): void {
  books.push(newBook);

  console.log(
    `✅ Buku "${newBook.title}" karya ${newBook.author} berhasil ditambahkan!`
  );
}

// Fungsi ListBooks

export function listBooks(): void {
  console.log('📚 Daftar Buku:');
  if (books.length === 0) {
    console.log(' (Belum ada koleksi buku yang tersedia.)');
    return;
  }

  books.forEach((book, index) => {
    console.log(`\n ${index + 1}. Judul: ${book.title}`);
    console.log(`    Penulis: ${book.author}`);
    console.log(`    Tahun: ${book.publicationonYear}`);
  });

  console.log('\n================================\n');
}
