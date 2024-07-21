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
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./shared/hooks/auth-hook";

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

let logoutTimer;

function App() {

  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
