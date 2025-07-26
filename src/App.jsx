

import Header from './components/Header'
import BookList from './components/BookList'
import { useEffect, useState } from 'react'


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



  return (
    <>
     <Header/>
     <BookList books={books}/>
    </>
  )
}

export default App
