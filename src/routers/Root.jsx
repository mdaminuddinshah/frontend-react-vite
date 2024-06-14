import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Profile from "../pages/Profile.jsx";
import Error404 from "../pages/Error404.jsx";


export const routerList = [ {
  path: "/",
  name: "Index",
  element: <Home />,
  errorElement: <Error404 />
},
{
  path: "/home",
  name: "Home",
  element: <Home />
},
{
  path: "/about",
  name: "About",
  element: <About />
},
{
    path: "/profile",
    name: "Profile",
    element: <Profile />
},
{
    path: "/Contact",
    name: "Contact",
    element: <Contact />
}]
export const router = createBrowserRouter(routerList);