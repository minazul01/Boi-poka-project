import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Books = ({ books }) => {
    const { bookName, author, image, rating, tags ,bookId, category} = books;
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-3xl">
                <figure className=" bg-gray-100 py-10">
                    <img
                        src={image}
                        className="h-[250px] rounded-sm"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-16">
                        <h4 className="text-base py-0.5 px-4 rounded-3xl bg-gray-100 text-lime-500">{tags[0]}</h4>
                        <h4 className="text-base py-0.5 px-4 rounded-3xl bg-gray-100 text-lime-500">{tags[1]}</h4>
                    </div>
                    <h2 className="text-2xl font-bold my-2">The Catcher in the Rye</h2>
                    <h3 className="text-base font-normal">By : {author}</h3>
                    <hr className="border-r-2 border-dashed my-4" />
                    <div className="card-actions justify-between my">
                        <div className="badge ">{category}</div>
                        <div className="badge ">{rating}
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Books.propTypes = {
    books: PropTypes.object,
}

export default Books;