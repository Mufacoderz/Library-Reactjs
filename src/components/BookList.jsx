import { useState } from "react";

function BookList({ books, onEdit, onDelete }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  const startEdit = (index, book) => {
    setEditIndex(index);
    setEditTitle(book.title);
    setEditAuthor(book.author);
  };

  const saveEdit = (index) => {
    if (editTitle.trim() && editAuthor.trim()) {
      onEdit(index, { title: editTitle, author: editAuthor });
      setEditIndex(null);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
          >
            {editIndex === index ? (
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Judul Buku"
                />
                <input
                  type="text"
                  value={editAuthor}
                  onChange={(e) => setEditAuthor(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Penulis"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(index)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Simpan
                  </button>
                  <button
                    onClick={() => setEditIndex(null)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Batal
                  </button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-slate-800 text-lg mb-2">
                  {book.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">{book.author}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEdit(index, book)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Hapus
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
