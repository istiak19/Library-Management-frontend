import { useGetAllBookQuery } from "@/redux/api/baseApi";

const AllBooks = () => {
    const { data, isLoading, isError } = useGetAllBookQuery(undefined);
    console.log(data)
    
    return (
        <div>
            <h2>All Books</h2>
        </div>
    );
};

export default AllBooks;