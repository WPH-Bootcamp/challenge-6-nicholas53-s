// Tugas 3: Implementasikan fungsi-fungsi manajemen buku

import { Book } from '../types/index';
import { books } from '../data/books';

// Fungsi addBook digunakan untuk menambahkan buku baru ke dalam koleksi
export function addBook(newBook: Book): void {
  books.push(newBook);

  console.log(
    `✅ Buku "${newBook.title}" karya ${newBook.author} berhasil ditambahkan!`
  );
}

// Fungsi ListBooks digunakan untuk menampilkan semua buku yang ada dalam koleksi

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

// Fungsi searchBook digunakan untuk mencari buku berdasarkan judul, jika parameter title tidak diberikan, maka akan menampilkan semua buku yang tersedia

export function searchBook(title?: string): void {
  if (title === undefined) {
    console.log(
      '\n tidak ada keyword pencarian, menampilkan semua buku yang tersedia...\n'
    );
    listBooks();
    return;
  }

  console.log(`\n🔍 Mencari buku dengan judul yang mengandung "${title}"...\n`);

  const result: Book[] = books.filter((book) =>
    book.title.toLowerCase().includes(title.toLowerCase())
  );

  if (result.length === 0) {
    console.log(
      `❌ Tidak ditemukan buku dengan judul yang mengandung "${title}"\n`
    );

    return;
  }

  console.log(`✅ Ditemukan ${result.length} buku yang cocok:\n`);
  result.forEach((book, index) => {
    console.log(` ${index + 1}. ${book.title}`);
    console.log(` Penulis: ${book.author}`);
    console.log(` Tahun: ${book.publicationonYear}\n`);
  });
}
