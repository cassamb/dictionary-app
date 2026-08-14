import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import GamesPage from "./pages/GamesPage"
import StudyToolsPage from "./pages/StudyToolsPage"
import NotFoundPage from "./pages/NotFoundPage"
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"

function App() {

  // Instantiating the router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        { index: true, element: <HomePage/>},
        { path: "/games", element: <GamesPage/>},
        { path: "/study", element: <StudyToolsPage/>},
        { path: "*", element: <NotFoundPage/>},
      ],
    }
  ]);

  // Enabling routing throughout the program
  return <RouterProvider router={router}/>
}

export default App
