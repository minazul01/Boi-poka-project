import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {
  
    const {bookId} = useParams();


    const data = useLoaderData();

    const id = parseInt(bookId);
  

 

    const book = data.find(book => book.bookId === id);
    console.log(book);

  



  
    return (
        <div>
            <h1>Hello Book , how are you? {bookId}</h1>
        </div>
    );
};

export default BookDetail;