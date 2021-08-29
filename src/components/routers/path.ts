import { RouteProps } from "react-router-dom";
import { Login, NotFound, Splash } from "../screens";

export const PathLogin: RouteProps = {
  path: "/login",
  component: Login,
  exact: true,
};

export const PathSplash: RouteProps = {
  path: "/",
  component: Splash,
  exact: true,
};

export const PathDashboard: RouteProps = {};

export const PathConsole: RouteProps = {};

export const PathOrganization: RouteProps = {};

export const PathAdminOrganizationManagerUsers: RouteProps = {};

export const PathAdminSystemManagerUsers: RouteProps = {};

export const PathNotFound: RouteProps = {
  path: "*",
  component: NotFound,
  exact: true,
};
