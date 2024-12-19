import App from "./App";
import HomePage from "./components/HomePage/HomePage";
// import Pages

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
];

export default routes;
