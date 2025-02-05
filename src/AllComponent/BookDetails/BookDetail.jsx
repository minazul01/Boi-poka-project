import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

    const { bookId } = useParams();


    const data = useLoaderData();

    const id = parseInt(bookId);




    const book = data.find(book => book.bookId === id);




    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;


    return (
        <div className="card card-side bg-base-100 shadow-sm my-10 w-full">
            <figure className="w-3/1 p-24 bg-gray-100 rounded-md">
                <img
                    src={image}
                    className="rounded-lg"
                    alt={bookName} />
            </figure>
            <div className="space-y-4 p-10">
                <h2 className="card-title text-3xl font-bold">{bookName}</h2>
                <p className="text-xl font-normal">by : {author}</p>
                <hr />
                <h4 className="text-base font-normal">{category}</h4>
                <hr />
                <p><span className="text-2xl font-medium">review : </span>{review}</p>
                <div className="flex gap-16">
                    <h4 className="">Tag : </h4>
                    <h5 className="text-base py-0.5 px-4 rounded-3xl bg-gray-100 text-lime-500">{tags[0]}</h5>
                    <h5 className="text-base py-0.5 px-4 rounded-3xl bg-gray-100 text-lime-500">{tags[1]}</h5>
                </div>
                <hr />
                <div className="space-y-5">
                    <h3 className="text-xl"><span className="text-gray-400">Number of Pages:</span> {totalPages}</h3>
                    <h3 className="text-xl"><span className="text-gray-400">Publisher: </span> {publisher}</h3>
                    <h3 className="text-xl"><span className="text-gray-400">Year of Publishing: </span> {yearOfPublishing}</h3>
                    <h3 className="text-xl"><span className="text-gray-400">Rating:</span> {rating}</h3>
                </div>

                <div className="card-actions justify-start mt-10 space-x-4">
                    <button className="btn">Read</button>
                    <button className="btn btn-info">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;