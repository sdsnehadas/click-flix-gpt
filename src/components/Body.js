import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import PlayMovie from './PlayMovie'
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    },
    {
      path:"/playMovie",
      element:<PlayMovie/>
  },
])

const Body = () => {

  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body