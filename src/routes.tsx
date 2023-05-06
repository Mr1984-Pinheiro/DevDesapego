import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "./layouts/Default";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
              },
          
              {
                  path: "/about",
                  element: <About />,
              },

              {
                element: <NotFound />,
            },
        ]
    }
  ]);