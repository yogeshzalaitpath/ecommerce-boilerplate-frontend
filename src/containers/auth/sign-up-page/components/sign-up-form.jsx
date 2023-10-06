import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common-input";
import CommonSelect from "@/components/common-select";
import { Stack } from "@mui/material";
import React, { Fragment } from "react";
import { useFormik } from "formik";
import { signupValidation } from "@/utils/validation";

const SignUpForm = () => {
  const {
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
    values,
    errors,
    isValidating,
    resetForm,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      role: "",
    },
    validationSchema: signupValidation,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await api.auth.register(values);
        resetForm();
        setLoading(false);
      } catch (error) {
        _.isString(error.message.message) &&
          enqueueSnackbar(error.message.message, { variant: "error" });
        setLoading(false);
      }
    },
  });

  const handleSignup = () => {
    if (!isValidating) {
      handleSubmit();
    }
  };
 
  return (
    <Fragment>
      
        <Stack spacing={1}>
          <CommonInput
            placeholder="First Name"
            label="First Name"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.first_name && errors.first_name}
          />
          <CommonInput
            placeholder="Last Name"
            label="Last Name"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.last_name && errors.last_name}
          />
          <CommonInput
            placeholder="Email"
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
          <CommonInput
            placeholder="Password"
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
          />
          <CommonInput
            placeholder="Confirm Password"
            label="Confirm Password"
            type="password"
            name="confirm_password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.confirm_password && errors.confirm_password}
          />
          {/* <CommonSelect
          label="Select Role"
          options={ROLESLIST}
          name="role"
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.role && errors.role}
        /> */}
        </Stack>
        <Stack>
          <CommonButton title="Create Account" size="large" width="100%" onClick={handleSignup}/>
        </Stack>

    </Fragment>
  );
};

export default SignUpForm;
