import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import BreweryDetails from "./pages/BreweryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "breweries/:id", element: <BreweryDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
