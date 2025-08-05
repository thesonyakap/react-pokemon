import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root, {loader as rootLoader,
action as rootAction} from "./Root.jsx";
import ErrorPage from "./Error-page.jsx";
import Pokemon from "./Pokemon.jsx";
import Index from "./Index.jsx";
import EditPokemon from "./Edit.jsx";
import MyPoks from "./MyPoks.jsx"
import {loader as pokLoader} from "./Edit.jsx"

const router  = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        action: rootAction,
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
                    {
                        path: "pokemon/edit",
                        element: <EditPokemon/>,
                        loader: rootLoader,
                    },
                    {
                        path: "pokemon/my",
                        element: <MyPoks/>,
                        loader: pokLoader,
                    }
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
