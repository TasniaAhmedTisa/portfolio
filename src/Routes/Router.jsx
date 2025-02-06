import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Education from "../pages/Education";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import ProjectDetail from "../pages/ProjectDetail";

export const Router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/about",
                element:<About></About>

            },
            {
                path: "/skill",
                element:<Skills></Skills>
            },
            {
                path: "/education",
                element:<Education></Education>
            },
            {
                path: "/projects",
                element:<Projects></Projects>
            },
            {
                path: "/project-details/:projectId",
                element:<ProjectDetail></ProjectDetail>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
    }
]) 

export default Router;