import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import HeaderOnly from "../components/Layout/HeaderOnly";

// public routes
export const publicRoutes = [
  { path: "/", element: Home },
  { path: "/following", element: Following },
  { path: "/profile", element: Profile },
  { path: "/upload", element: Upload, layout: HeaderOnly },
];

// private routes
export const privateRoutes = [];
