import BannerImg from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannerImg} />
                <div className="space-y-10">
                    <h1 className="text-5xl font-bold leading-16">Books to freshen up your bookshelf.</h1>
                    <button className="btn btn-primary text-white hover:bg-gray-300">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;