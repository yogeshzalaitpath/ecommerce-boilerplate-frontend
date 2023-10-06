import * as Yup from "yup";

export const signupValidation = Yup.object({
  first_name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First Name Required"),
  last_name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Last Name Required"),
  email: Yup.string()
    .email("Invalid email addresss`")
    .required("Email Required"),
  password: Yup.string()
    .required("Password Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords Must Match")
    .required("Confirm Password is Required"),
  role: Yup.string().required("Required").oneOf(
    ["Admin", "User"]
    //   "Invalid Job Type"
  ),
  // acceptedTerms: Yup.boolean()
  //   .required("Required")
  //   .oneOf([true], "You must accept the terms and conditions."),
});


export const signinValidation = Yup.object({
    email: Yup.string()
      .email("Invalid email addresss`")
      .required("Email Required"),
    password: Yup.string()
      .required("Password Required")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });
