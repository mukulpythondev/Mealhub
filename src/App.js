
import { createRoot } from 'react-dom/client';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './Components/Error';
import Restaurant from './Components/Restaurant';
import { lazy, Suspense } from 'react';
const Grocery= lazy(()=> import("./Components/Grocery"))
const App = () => {
    return (
        <div className="app">
            <Navbar />
             <Outlet/>
            <Footer />
        </div>
    );
};
const AppRouter= createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/restaurant/:id",
                element:<Restaurant/>
            },
            {
                path: "/grocery",
                element:<Suspense ><Grocery/></Suspense>
            }
        ],
        errorElement: <Error/>
    },
   
])
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
