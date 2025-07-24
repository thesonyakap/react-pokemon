import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root, {loader as rootLoader} from "./Root.jsx";
import ErrorPage from "./Error-page.jsx";
import Contact from "./Contact.jsx";
import Pokemon from "./Pokemon.jsx";
import Index from "./Index.jsx";

const router  = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        children: [
            {
                // errorElement: <ErrorPage/>,
                children: [
                    {errorElement: <ErrorPage/>},
                    {index: true, element: <Index/>},
                    {
                        path: "pokemon/:pokemonId",
                        element: <Pokemon/>,
                        loader: rootLoader,
                    },
                ]
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
