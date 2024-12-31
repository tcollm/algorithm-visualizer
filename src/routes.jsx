import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import BTPage from "./components/BTPage/BTPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ContactPage from "./components/ContactPage/ContactPage";
import SortPage from "./components/SortPage/SortPage";

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
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/bt",
        element: <BTPage />,
      },
      {
        path: "/sort",
        element: <SortPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
