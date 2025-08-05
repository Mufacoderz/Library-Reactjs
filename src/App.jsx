import Header from './components/Header'
import BookList from './components/BookList'
import AddBookForm from './components/AddBook'
import SearchBook from './components/SearchBook';
import { useEffect, useState } from 'react'

function App() {
  const [books, setBooks] = useState(() => {
    try {
      const savedBooks = localStorage.getItem('books');
      const parsed = savedBooks ? JSON.parse(savedBooks) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  });

  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const editBook = (index, updatedBook) => {
    const newBooks = [...books];
    newBooks[index] = updatedBook;
    setBooks(newBooks);
  };

  const deleteBook = (index) => {
    const newBooks = books.filter((_, i) => i !== index);
    setBooks(newBooks);
  };

  const FilterBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />
      <AddBookForm onAdd={addBook} />
      <SearchBook query={query} setQuery={setQuery} />
      <BookList books={FilterBooks} onEdit={editBook} onDelete={deleteBook} />
    </>
  );
}

export default App;
