
const Books = ({ books }) => {
    const { bookName, author, image, review, totalPages, rating, category, publisher, yearOfPublishing } = books;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-3xl">
                <figure className=" bg-gray-100 py-10">
                    <img
                        src={image}
                        className="h-[250px]"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                     <div className="flex gap-16">
                        <h4 className="text-base py-0.5 px-4 rounded-3xl bg-gray-100 text-lime-500">Young Adult</h4>
                        <h4 className="text-base py-0.5 px-4 rounded-3xl bg-gray-100 text-lime-500">Identity</h4>
                     </div>
                     <h2 className="text-2xl font-bold my-2">The Catcher in the Rye</h2>
                     <h3 className="text-base font-normal">By : {author}</h3>
                      <hr className="border-r-2 border-dashed my-4" />
                    <div className="card-actions justify-between my">
                        <div className="badge ">Fiction</div>
                        <div className="badge ">{rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;