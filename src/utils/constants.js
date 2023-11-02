export const DRAWER_WIDTH = 240;
export const HEADER_HEIGHT = 58;
export const FOOTER_HEIGHT = 52;

export const NAME_REGEX = /^[a-zA-Z\s]+$/;
export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const UPPERCASE_REGEX = /[A-Z]/;
export const LOWERCASE_REGEX = /[a-z]/;
export const NUMBER_REGEX = /[0-9]/;
export const SPACIAL_CHAR_REGEX = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
export const PASSWORD_LENGTH = 8;

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

export const ROLES_LIST = [
  { id: 1, title: "Admin", value: ROLES.ADMIN },
  { id: 2, title: "User", value: ROLES.USER },
];
