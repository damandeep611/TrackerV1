import { createBrowserRouter } from "react-router";
import App from "../App";
import Dashboard from "../Dashboard/Dashboard";
import Landing from "../components/LandingPage/Landing";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
