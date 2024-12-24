import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import BTPage from "./components/BTPage/BTPage";
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
        path: "/bt",
        element: <BTPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
