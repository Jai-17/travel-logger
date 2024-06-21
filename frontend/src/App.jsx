import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UsersPage from "./users/pages/Users";
import NewPlacePage from "./places/pages/NewPlace";

const router = createBrowserRouter([
  { path: "/", element: <UsersPage />, exact: true },
  { path: "/places/new", element: <NewPlacePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
