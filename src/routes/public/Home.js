import Page from "../../page";
import { Route } from "react-router-dom";

const layout = Route;

const homeRoutes = {
  layout,
  path: "/",
  exact: true,
  component: Page,
};

export default homeRoutes;
