import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import UsersPage from "./users/pages/Users";
import NewPlacePage from "./places/pages/NewPlace";
import HomePage from "./shared/HomePage";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./users/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useCallback, useState } from "react";

let routes;

// if (isLoggedIn) {
//   routes = {
//     path: "/",
//     element: <HomePage />,
//     children: [
//       { index: true, element: <UsersPage />, exact: true },
//       { path: "/places/new", element: <NewPlacePage /> },
//       { path: "/places/:placeId", element: <UpdatePlace /> },
//       {
//         path: "/:userId/places",
//         element: <UserPlaces />,
//       },
//       { path: "*", element: <Navigate to="/auth" replace /> },
//     ],
//   };
// } else {
//   routes = {
//     path: "/",
//     element: <HomePage />,
//     children: [
//       { index: true, element: <UsersPage />, exact: true },
//       {
//         path: "/:userId/places",
//         element: <UserPlaces />,
//       },
//       { path: "/auth", element: <Auth /> },
//       { path: "*", element: <Navigate to="/auth" replace /> },
//     ],
//   };
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <UsersPage />, exact: true },
      { path: "/places/new", element: <NewPlacePage /> },
      { path: "/places/:placeId", element: <UpdatePlace /> },
      {
        path: "/:userId/places",
        element: <UserPlaces />,
      },
      { path: "/auth", element: <Auth /> },
    ],
  },
]);

// const router = createBrowserRouter([routes]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, userId: userId, login: login, logout: logout }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
