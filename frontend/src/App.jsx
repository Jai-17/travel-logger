import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UsersPage from "./users/pages/Users";
import NewPlacePage from "./places/pages/NewPlace";
import HomePage from "./shared/HomePage";
import UserPlaces from "./places/pages/UserPlaces";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <UsersPage />, exact: true },
      { path: "/places/new", element: <NewPlacePage /> },
      {
        path: "/:userId/places",
        element: <UserPlaces />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
