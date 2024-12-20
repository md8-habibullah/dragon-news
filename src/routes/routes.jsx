import { createBrowserRouter } from "react-router-dom"
import HomeLayoutes from "../layouts/HomeLayoutes"

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutes></HomeLayoutes>,
    children:[
      {
        path:'category/:id',
        element: <h3>I am from category</h3>
      }
    ] 
  },
  {
    path: 'news',
    element: <div>I am news</div>
  },
  {
    path: 'auth',
    element: <div>I am login  </div>
  },
  {
    path: '*',
    element: <div>Error IG huh, path not foud</div>
  }
])

export default routes