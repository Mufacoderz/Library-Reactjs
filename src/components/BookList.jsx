function BookList({ books }) {
    return (
        <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-3">
            {books.map((book, index) => (
                <div key={index}>
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                    <div>
                        <p>{book.author}</p>
                    </div>
                </div>
            ))}
            </div>
           
        </div>
    );
}

export default BookList;
