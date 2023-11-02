import * as Yup from "yup";
import {
  EMAIL_REGEX,
  LOWERCASE_REGEX,
  NAME_REGEX,
  NUMBER_REGEX,
  PASSWORD_LENGTH,
  SPACIAL_CHAR_REGEX,
  UPPERCASE_REGEX,
} from "./constants";

export const signUpValidation = Yup.object().shape({
  first_name: Yup.string()
    .trim()
    .required("First Name can't be empty !")
    .min(3, "First name must contain at least 3 characters !")
    .max(50, "First name cannot exceed 50 characters !")
    .matches(NAME_REGEX, "First name can only contain letters and spaces !"),
  last_name: Yup.string()
    .trim()
    .required("Last Name can't be empty !")
    .min(3, "Last name must contain at least 3 characters !")
    .max(50, "Last name cannot exceed 50 characters !")
    .matches(NAME_REGEX, "Last name can only contain letters and spaces !"),
  email: Yup.string()
    .trim()
    .max(255, "Email cannot exceed 255 characters !")
    .required("Email can't be empty !")
    .matches(EMAIL_REGEX, "Must be a valid email !"),
  password: Yup.string()
    .trim()
    .required("Password can't be empty !")
    .min(PASSWORD_LENGTH, "Must contain at least 8 characters !")
    .max(20, "Password cannot exceed 20 characters !")
    .matches(UPPERCASE_REGEX, "Must contain uppercase letters !")
    .matches(LOWERCASE_REGEX, "Must contain lowercase letters !")
    .matches(NUMBER_REGEX, "Must contain numbers !")
    .matches(SPACIAL_CHAR_REGEX, "Must contain one special character !"),
  confirm_password: Yup.string()
    .trim()
    .max(20, "Confirm Password cannot exceed 20 characters !")
    .required("Confirm Password can't be empty !")
    .oneOf([Yup.ref("password")], "Confirm password does not match !"),
  role: Yup.string().trim().required("Role can't be empty !"),
});

export const signInValidation = Yup.object().shape({
  email: Yup.string()
    .trim()
    .max(255, "Email cannot exceed 255 characters !")
    .required("Email can't be empty !"),
  password: Yup.string()
    .trim()
    .max(20, "Password cannot exceed 20 characters !")
    .required("Password can't be empty !"),
});
