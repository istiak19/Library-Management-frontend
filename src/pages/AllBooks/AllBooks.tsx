import type { IBook } from "@/type/type";
import Card from "@/components/shared/Card/Card";
import Loading from "@/components/shared/Loading/Loading";
import { useGetAllBookQuery } from "@/redux/api/baseApi";

const AllBooks = () => {
    const { data: books, isLoading, isError } = useGetAllBookQuery(undefined);
    if (isLoading) return <Loading />;
    if (isError || !books) {
        return (
            <p className="text-red-500 text-center mt-10 text-3xl font-semibold">
                Failed to load book.
            </p>
        );
    };

    return (
        <div className="w-11/12 mx-auto py-16 p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    books?.data?.map((book: IBook) => <Card key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;