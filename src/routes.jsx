import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import BSTPage from "./components/BSTPage/BSTPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/bst",
        element: <BSTPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
