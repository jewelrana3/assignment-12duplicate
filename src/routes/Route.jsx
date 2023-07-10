import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        
      ]
    }
   
  ]);
  