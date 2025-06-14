import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './Pages/Home/Home';
import Books from "./Pages/Browsebook/Books";
//import AddBooks from "./Pages/Addbooks/AddBooks";
import AddBooks from "./Pages/Bookdetail/Addbooks/AddBooks";
import BookDetail from "./Pages/Bookdetail/BookDetail";
import Error from "./Pages/Error/Error";
//import BookPage from "./Components/BookPage";
import BookPage from "./components/BookPage";
const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'',
                element:<Home />
            },
            {
                path:'browsebook',
                element:<Books />
            },{
                path:'addbooks',
                element:<AddBooks />
            },{
                path:'book/:id',
                element:<BookDetail />
            },{
                path:'books/:category',
                element:<BookPage />
            }
        ],
        errorElement:<Error />
    },
    
])

export default router;