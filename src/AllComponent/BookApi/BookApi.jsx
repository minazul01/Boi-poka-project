import { useEffect, useState } from "react";
import Books from "../Books/Books";

const BookApi = () => {
    const [book, setBook] = useState([]);

    useEffect(()=>{
      fetch('../../../public/data/booksData.json')
      .then(res => res.json())
      .then(data => {
        setBook(data)
      })
    } ,[])

    return (
        <>
        <div className="text-center my-14">
            <h1 className="text-3xl font-bold">Books</h1>
            <p>{book.length}</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                book.map(books => <Books key={books.bookId} books={books}></Books>)
            }
        </div>
        </>
    );
};

export default BookApi;