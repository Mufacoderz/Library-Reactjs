import { useState } from "react";

function AddBookForm({onAdd}){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title.trim() == '' || author.trim() == '') return
        onAdd({title, author})
        setTitle('')
        setAuthor('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Judul Buku" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)}
                className="border-2"
                />
                <input 
                type="text" 
                placeholder="Penulis" 
                value={author} 
                onChange={(e)=> setAuthor(e.target.value)}
                className="border-2"
                />
                <button className="border-2" type="submit">Tambah Buku</button>
            </form>
        </div>
    )

}

export default AddBookForm