import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Add from "./pages/Add";

const App = () => {
  const Layout = () => {
    return (
      <div className="layout">
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
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
