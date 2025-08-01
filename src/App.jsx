

import Header from './components/Header'
import BookList from './components/BookList'
import { useEffect, useState } from 'react'
import AddBookForm from './components/AddBook'


function App() {

  const [books, setBooks] = useState([])

  useEffect(()=>{
    const sampleBook = 
    [
      { title : "Hujan", author : "Tere Liye" },
      { title : "Atomic Habbits", author : "James Clear" },
      { title : "How to Win Friends", author : "Dale Carnegie" }
    ]
    setBooks(sampleBook)
  }, [])


  const addBook = (book)=>{
    setBooks([...books, book])
  }


  return (
    <>
     <Header/>
     <BookList books={books}/>
     <AddBookForm onAdd={addBook}/>
    </>
  )
}

export default App
