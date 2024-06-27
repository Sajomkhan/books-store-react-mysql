import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Add from "./pages/Add";
import Nave from "./components/Nave";

const App = () => {
  const Layout = () => {
    return (
      <div className="layout">
        <Nave />
        <Outlet />
      </div>
    );
  };
  const Home = () => {
    return (
      <div className="home">
        <h1>This is Home page</h1>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/update/:id",
          element: <Update />,
        },
      ],
    },
  ]);

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       {
  //         path: "/books",
  //         element: <Books />
  //       },
  //       {
  //         path: "/add",
  //         element: <Add />
  //       },
  //       {
  //         path: "/update",
  //         element: <Update />
  //       },
  //     ]
  //   }
  // ])

  return <RouterProvider router={router} />;
};

export default App;
