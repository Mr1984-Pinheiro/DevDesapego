import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Default } from "./layouts/Default";
import { About } from "./pages/About";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: "/",
                element: <Home />,
              },
          
              {
                  path: "/about",
                  element: <About />,
                },
        ]
    }
  ]);