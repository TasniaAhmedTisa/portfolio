import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout";

export const Router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>
    }
]) 

export default Router;