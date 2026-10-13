import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import DefinitionPage from "./pages/DefinitionPage"
import GamesPage from "./pages/GamesPage"
import StudyToolsPage from "./pages/StudyToolsPage"
import NotFoundPage from "./pages/NotFoundPage"
import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import { RandomWordsProvider } from "./context/RandomWordsContext"

// TODOs
// General
//  - [] responsive design implementation
//    - [x] mobile
//    - [x] tablet
//    - [] laptop/desktop (mainly just navbar text size and general component spacing)
//  - [] implement different layouts for other pages
//  - [] customize toast design to better match UI
// Word of the Day
//  - [] create JSON file to store WOD info
//  - [] implement Random Word Search functionality (except we maintain the state of the word once a suitable option is found)
//  - [] implement animations for the section as it expands and condenses

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
