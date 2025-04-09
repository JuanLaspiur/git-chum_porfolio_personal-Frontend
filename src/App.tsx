import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Home from "./pages/Home"
import ThemeProvider from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { PageProvider } from './context/PageContext';


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
        <PageProvider>
         <RouterProvider router={router} />
        </PageProvider>
      </LanguageProvider>
     </ThemeProvider>
    </div>
  )
}

export default App
