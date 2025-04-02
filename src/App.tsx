import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from "./pages/Home"
import ThemeProvider from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    }
  ]);

  return (
    <div>
     <ThemeProvider>
      <LanguageProvider>
      <RouterProvider router={router} />
      </LanguageProvider>
     </ThemeProvider>
    </div>
  )
}

export default App
