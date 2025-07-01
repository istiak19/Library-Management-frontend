import App from "@/App";
import AllBooks from "@/pages/AllBooks/AllBooks";
import { createBrowserRouter } from "react-router";
import CreateBook from "@/pages/CreateBook/CreateBook";
import SingleBook from "@/pages/SingleBook/SingleBook";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/books",
                Component: AllBooks
            },
            {
                path: "/books/:id",
                Component: SingleBook
            },
            {
                path: "/create-book",
                Component: CreateBook
            },
            {
                path: "/borrow-summary",
                Component: BorrowSummary
            }
        ]
    }
]);

export default router;