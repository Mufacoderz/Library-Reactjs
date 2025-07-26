function BookList({ books }) {
    return (
        <div>
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
    );
}

export default BookList;
