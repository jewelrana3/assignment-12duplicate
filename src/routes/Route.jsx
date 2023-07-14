import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllPopular from "../pages/AllPopular/AllPopular";
import AllInstructor from "../pages/Instructor/AllInstructor";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome";
import Select from "../Dashboard/Student/Select/Select";
import Payment from "../Dashboard/Student/Select/Payment";



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
          path:'popular',
          element:<AllPopular></AllPopular>
        },
        {
          path:'instructor',
          element:<AllInstructor></AllInstructor>
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
    },
   {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'/dashboard',
        element:<DashboardHome></DashboardHome>
      },
      {
        path:'select',
        element:<Select></Select>
      }
      ,
      {
        path:'payment/:id',
        element:<Payment></Payment>,
        // loader:({params}) =>fetch(`http://localhost:3000/select/${params.id}`)
      }
    ]
   }
  ]);
  