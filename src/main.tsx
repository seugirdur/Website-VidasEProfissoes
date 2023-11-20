import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./Pages/ErrorPage";
import './index.css'
import { QuemSomos } from "./Pages/QuemSomos";
import { Vagas } from "./Pages/Vagas";
import { Servicos } from "./Pages/Servicos";
import { Contato } from "./Pages/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,

  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/quem-somos",
    element: <QuemSomos/>,
  },
  {
    path: "/vagas",
    element: <Vagas/>,

  },
  {
    path: "/servicos",
    element: <Servicos/>,

  },
  {
    path: "/contato",
    element: <Contato/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
