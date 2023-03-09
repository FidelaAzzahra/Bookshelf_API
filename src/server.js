const Hapi = require('@hapi/hapi');
const {nanoid} = require('nanoid');

const server = new Hapi.Server({
    port: 9000,
    host: 'localhost'
});

const start = async () => {
    await server.start();
    console.log(`Server started at: ${server.info.uri}`);
}

start();

// Data
let books = []

// Routes

server.route({
    method: 'POST',
    path: '/books',
    handler: (req, res) => {
        const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;

        // Checks
        if (!name) {
            return res.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. Mohon isi nama buku'
            }).code(400);
        }

        if (readPage > pageCount) {
            return res.response({
                status: 'fail',
                message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
            }).code(400);
        }

        const id = nanoid();
        const insertedAt = new Date().toISOString();
        const updatedAt = insertedAt;

        const finished = pageCount === readPage;

        const newBook = {
            id: id,
            name: name,
            year: year,
            author: author,
            summary: summary,
            publisher: publisher,
            pageCount: pageCount,
            readPage: readPage,
            finished: finished,
            reading: reading,
            insertedAt: insertedAt,
            updatedAt: updatedAt
        };

        books.push(newBook);
        return res.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id
            }
        }).code(201);
    }
});
server.route({
  method: 'GET',
  path: '/books',
  handler: (req, res) => {
    const { name, reading, finished } = req.query;

    let filteredBooks = books;

    if (name) {
      filteredBooks = filteredBooks.filter(book => {
        return book.name.toLowerCase().includes(name.toLowerCase());
      });
    }

    if (reading !== undefined) {
      const isReading = reading === '1';
      filteredBooks = filteredBooks.filter(book => book.reading === isReading);
    }

    if (finished !== undefined) {
      const isFinished = finished === '1';
      filteredBooks = filteredBooks.filter(book => book.finished === isFinished);
    }

    return res.response({
      status: 'success',
      data: {
        books: filteredBooks.map(({ id, name, publisher }) => ({ id, name, publisher })),
      },
    }).code(200);
  },
});


server.route({
    method: 'GET',
    path: '/books/{bookId}',
    handler: (req, res) => {
        const { bookId } = req.params;
        const book = books.find((b) => b.id === bookId);

        if (!book) {
            return res.response({
                status: 'fail',
                message: 'Buku tidak ditemukan'
            }).code(404);
        }

        return res.response({
            status: 'success',
            data: {
                book: book
            }
        }).code(200);
    }
});

server.route({
    method: 'PUT',
    path: '/books/{bookId}',
    handler: (req, res) => {
      const { bookId } = req.params;
      const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;
  
      const bookIndex = books.findIndex((book) => book.id === bookId);
  
      if (bookIndex === -1) {
        return res.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Id tidak ditemukan',
        }).code(404);
      }
  
      if (!name) {
        return res.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku',
        }).code(400);
      }
  
      if (readPage > pageCount) {
        return res.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        }).code(400);
      }
  
      const finished = pageCount === readPage;
      const updatedAt = new Date().toISOString();
  
      books[bookIndex] = {
        ...books[bookIndex],
        name: name,
        year: year,
        author: author,
        summary: summary,
        publisher: publisher,
        pageCount: pageCount,
        readPage: readPage,
        reading: reading,
        finished: finished,
        updatedAt: updatedAt,
      };
  
      return res.response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      }).code(200);
    },
  });

  server.route({
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: (req, res) => {
      const { bookId } = req.params;
  
      const bookIndex = books.findIndex((book) => book.id === bookId);
  
      if (bookIndex === -1) {
        return res.response({
          status: 'fail',
          message: 'Buku gagal dihapus. Id tidak ditemukan',
        }).code(404);
      }
  
      books.splice(bookIndex, 1);
      
      return res.response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      }).code(200);
      

    },
  });

  
  