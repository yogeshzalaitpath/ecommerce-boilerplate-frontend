import { ICONS } from "../assets";

export const Urls = {
  SignIn: { name: "Sign In", url: "/auth/sign-in" },
  SignUp: { name: "Sign Up", url: "/auth/sign-up" },
  Home: { name: "Home", url: "/admin" },
  Users: { name: "Users", url: "/admin/users" },
  Products: { name: "Products", url: "/admin/products" },
};

export const MENUITEMS = [
  {
    id: 1,
    label: Urls.Home.name,
    icon: <ICONS.home />,
    path: Urls.Home.url,
  },
  {
    id: 2,
    label: Urls.Users.name,
    icon: <ICONS.users />,
    path: Urls.Users.url,
  },
  {
    id: 3,
    label: Urls.Products.name,
    icon: <ICONS.products />,
    path: Urls.Products.url,
  },
];
