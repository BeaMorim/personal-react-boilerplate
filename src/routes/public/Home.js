import Home from "../../pages/Home";
import { Route } from "react-router-dom";
import DefaultLayout from '../../layouts/DefaultLayout';

const layout = Route;

const homeRoutes = [
  {
    layout,
    path: "/",
    exact: true,
    component: Home
  },
  {
    layout: DefaultLayout,
    path: "/default-layout",
    exact: true,
    component: Home
  }
];

export default homeRoutes;
