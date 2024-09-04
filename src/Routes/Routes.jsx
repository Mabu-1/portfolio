import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Hone/Home";
import NotFound from "../NotFound";
const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main> ,
        children:
        [
            {
                path:"/",
                element:<Home></Home>
            },
           
        ]
    },

    {
        path: '*',
        element: <NotFound />
    }  

])

export default router;