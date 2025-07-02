import { useGetAllBorrowQuery } from "@/redux/api/baseApi";
import Loading from "@/components/shared/Loading/Loading";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { IAllBorrow } from "@/type/type";

const BorrowSummary = () => {
    const { data: borrows, isLoading, isError } = useGetAllBorrowQuery(undefined);

    if (isLoading) return <Loading />;
    if (isError || !borrows) {
        return (
            <p className="text-red-500 text-center mt-10 text-3xl font-semibold">
                Failed to load borrow summary
            </p>
        );
    };

    console.log(borrows)

    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 w-11/12 mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Borrow Summary</h2>

            <div className="overflow-x-auto">
                <Table className="*:text-center">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center">Serial No</TableHead>
                            <TableHead className="text-center">Book Title</TableHead>
                            <TableHead className="text-center">ISBN</TableHead>
                            <TableHead className="text-center">Total Quantity Borrowed</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {borrows?.data?.map((borrow: IAllBorrow, idx: number) => (
                            <TableRow key={borrow?._id}>
                                <TableCell>{idx + 1}</TableCell>
                                <TableCell>{borrow?.book?.title}</TableCell>
                                <TableCell>{borrow?.book?.isbn}</TableCell>
                                <TableCell>{borrow?.totalQuantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default BorrowSummary;