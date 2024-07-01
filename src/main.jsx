import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Home from './Pages&Components/Pages/Home/Home/Home';
import Login from './Pages&Components/Pages/Login/Login';
import SignUp from './Pages&Components/Pages/SignUp/SignUp';
import DashBoardPatient from './Pages&Components/Pages/DashBoardPatient/DashBoardPatient';
import DashBoardDoctor from './Pages&Components/Pages/DashBoardDoctor/DashBoardDoctor';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
          path: "register",
          element: <SignUp></SignUp>,
      },
      {
          path: "patient",
          element: <DashBoardPatient></DashBoardPatient>,
      },
      {
          path: "doctor",
          element: <DashBoardDoctor></DashBoardDoctor>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
