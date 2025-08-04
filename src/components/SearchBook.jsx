function SearchBook({query, setQuery}){
    return(
        <div>
            <div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Cari judul buku"
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBook