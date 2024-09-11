import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import ImportantDocuments from "../components/ImportantDocuments";
import ReligiousTours from "../components/ReligiousTours";
import Treks from "../pages/Treks";
import Religious from "../pages/Religious";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "important-docs",
        element: <ImportantDocuments />,
      },
      {
        path: "religious-tours",
        element: <ReligiousTours />,
      },
      {
        path: "treks",
        element: <Treks />,
      },
      {
        path: "religious",
        element: <Religious />,
      },
    ],
  },
]);

export default routes;
