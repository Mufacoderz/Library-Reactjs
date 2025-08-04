

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
  
  // const [books, setBooks] = useState(()=>{
  //   const savedBooks = localStorage.getItem('books')
  //   return savedBooks ? JSON.parse(savedBooks) : []
  // })

  const [query, setQuery] = useState('')

  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])



  const addBook = (book)=>{
    setBooks([...books, book])
  }

  const FilterBooks = books.filter((book) => 
    book.title.toLowerCase().includes(query.toLowerCase())
  );
  

  return (
    <>
     <Header/>
     <AddBookForm onAdd={addBook}/>
     <SearchBook query={query} setQuery={setQuery}/>
     <BookList books={FilterBooks}/>
    </>
  )
}

export default App
