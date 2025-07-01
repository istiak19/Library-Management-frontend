import { Button } from "@/components/ui/button";
import type { IBook } from "@/type/type";
import { useState } from "react";
import { Link } from "react-router";

interface BookProps {
    book: IBook;
    onEdit?: (book: IBook) => void;
    onDelete?: (id: string) => void;
    onBorrow?: (updatedBook: IBook) => void;
}

const Card = ({ book, onEdit, onDelete, onBorrow }: BookProps) => {
    const [copies, setCopies] = useState(book?.copies);
    const [available, setAvailable] = useState(book?.available);

    const handleBorrow = () => {
        if (copies <= 0) return;

        const updatedCopies = copies - 1;
        const isAvailable = updatedCopies > 0;

        setCopies(updatedCopies);
        setAvailable(isAvailable);

        const updatedBook = { ...book, copies: updatedCopies, available: isAvailable };
        onBorrow?.(updatedBook);
    };

    return (
        <div className="card bg-gray-100 shadow-md border border-blue-200 p-3">
            <div className="card-body space-y-2">
                <h2 className="text-xl font-semibold text-blue-700">{book?.title}</h2>
                <p><span className="font-medium">Author:</span> {book?.author}</p>
                <p><span className="font-medium">Genre:</span> {book?.genre}</p>
                <p><span className="font-medium">ISBN:</span> {book?.isbn}</p>
                <p><span className="font-medium">Copies:</span> {copies}</p>
                <p>
                    <span className="font-medium">Available:</span>{" "}
                    {available ? (
                        <span className="text-green-600 font-semibold">Yes</span>
                    ) : (
                        <span className="text-red-500 font-semibold">No</span>
                    )}
                </p>

                <div className="pt-3 flex gap-3 justify-center flex-wrap">
                    {/* View Button */}
                    <Link
                        to={`/books/${book?._id}`}
                        className="px-4 py-2 rounded-md cursor-pointer text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    >
                        View
                    </Link>

                    {/* Edit Button */}
                    <Button
                        className="px-4 py-2 rounded-md cursor-pointer bg-yellow-500 text-white hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                        onClick={() => onEdit?.(book)}
                    >
                        Edit
                    </Button>

                    {/* Delete Button */}
                    <Button
                        className="px-4 py-2 rounded-md cursor-pointer bg-red-500 text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                        onClick={() => onDelete?.(book._id)}
                    >
                        Delete
                    </Button>

                    {/* Borrow Button */}
                    <Button
                        className={`px-4 py-2 rounded-md cursor-pointer text-white ${available ? "bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500" : "bg-gray-400 cursor-not-allowed"}`}
                        onClick={handleBorrow}
                        disabled={!available}
                    >
                        Borrow
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default Card;