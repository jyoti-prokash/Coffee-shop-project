import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/MainLayouts";
import Home from "../../layouts/Home";
import AddCoffee from "../../Pages/AddCoffee";
import UpdateCoffee from "../../Pages/UpdateCoffee";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/coffee')
        }]
    },
    {
            path: "/addcoffee",
            element: <AddCoffee></AddCoffee>,
    },
    {
            path: "/updatecoffee/:id",
            element: <UpdateCoffee></UpdateCoffee>,
            loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
    }
]);

export default router;