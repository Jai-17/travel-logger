import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UsersPage from "./users/pages/Users";
import NewPlacePage from "./places/pages/NewPlace";
import HomePage from "./shared/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <UsersPage />, exact: true },
      { path: "/places/new", element: <NewPlacePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
