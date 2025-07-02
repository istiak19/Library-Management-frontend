import { useGetAllBookQuery } from "@/redux/api/baseApi";
import Loading from "../shared/Loading/Loading";
import Card from "../shared/Card/Card";
import type { IBook } from "@/type/type";

const LandBook = () => {
    const { data: books, isLoading, isError } = useGetAllBookQuery(undefined);
    if (isLoading) return <Loading />;
    if (isError || !books) {
        return (
            <p className="text-red-500 text-center mt-10 text-3xl font-semibold">
                Failed to load book.
            </p>
        );
    };
    const limitedBooks = books?.data?.slice(0, 4);

    return (
        <div className="py-8 px-4 w-11/12 mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
                    Discover Your Next Book
                </h2>
                <div className="mt-2 w-40 h-[1px] bg-blue-300 mx-auto rounded-full" />
            </div>

            {/* Book cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {limitedBooks.map((book: IBook) => (
                    <Card key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default LandBook;