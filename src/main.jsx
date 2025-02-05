import './index.css'
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routes/Router';
import React from 'react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
