import App from "@/App";
import AllBooks from "@/pages/AllBooks/AllBooks";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import CreateBook from "@/pages/CreateBook/CreateBook";
import { createBrowserRouter } from "react-router";

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