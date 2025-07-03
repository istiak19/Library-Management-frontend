const Newsletter = () => {
    return (
        <div className="w-11/12 mx-auto px-2 sm:px-4 lg:px-6">
            <div className="bg-gray-100 py-12 rounded-md shadow-lg my-16 border border-blue-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-blue-500 mb-3">
                        Stay Updated with BookBase
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Be the first to know about new arrivals, exclusive offers, and book news.
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full sm:w-[300px] px-5 py-3 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-md font-medium shadow-md transition duration-300 cursor-pointer"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;