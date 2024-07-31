
import { createRoot } from 'react-dom/client';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Footer from './Components/Footer';
import About from './Components/About';
import Cart from './Components/Cart';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './Components/Error';
import Restaurant from './Components/Restaurant';
import { lazy, Suspense, useEffect, useState } from 'react';
import UserContext from './Utils/Context';
import { Provider } from 'react-redux';
import Store from './Store/Store';
const Grocery= lazy(()=> import("./Components/Grocery"))
const App = () => {
    const [user, setuser] = useState("")
    useEffect(() => {
        const data= {
            name:"Mukul Rana"
        }
    setuser(data.name)
     
    }, [])
    
   return (
    <Provider store={Store}>
          <UserContext.Provider value={{username: user,setuser}} >
          <div className=" w-full min-h-[100vh] flex flex-col">
            <Navbar />
             <Outlet/>
            <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
            },
            {
                path: "/cart",
                element:<Cart/>
            }
        ],
        errorElement: <Error/>
    },
   
])
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter} />);
