import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayouts";
import Home from "../../layouts/Home";
import AddCoffee from "../../Pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
        }
    ]
    },
    {
            path: "/addcoffee",
            element: <AddCoffee></AddCoffee>,
    }
]);

export default router;