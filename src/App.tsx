import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import DefinitionPage from "./pages/DefinitionPage"
import GamesPage from "./pages/GamesPage"
import StudyToolsPage from "./pages/StudyToolsPage"
import NotFoundPage from "./pages/NotFoundPage"
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import { RandomWordsProvider } from "./context/RandomWordsContext"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        { index: true, element: <HomePage/>},
        { path: "/search/:word", element: <DefinitionPage/>},
        { path: "/games", element: <GamesPage/>},
        { path: "/study", element: <StudyToolsPage/>},
        { path: "*", element: <NotFoundPage/>},
      ],
    }
  ]);

  return (
    <RandomWordsProvider>
      <RouterProvider router={router}/>
    </RandomWordsProvider>
  ) 
}

export default App
