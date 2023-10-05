import { ICONS } from "@/assets";

export const DRAWERWIDTH = 240;

export const MENUITEMS = [
  {
    id: 1,
    label: "Users",
    icon: <ICONS.users />,
    path: "/admin/users",
  },
  {
    id: 2,
    label: "Products",
    icon: <ICONS.products />,
    path: "/admin/products",
  },
];

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const ROLESLIST = [
  { id: 1, title: "Admin", value: ROLES.ADMIN },
  { id: 2, title: "User", value: ROLES.USER },
];
