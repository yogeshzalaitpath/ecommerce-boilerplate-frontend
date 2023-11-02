import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common-input";
import CommonSelect from "@/components/common-select";
import { Stack } from "@mui/material";
import React, { Fragment } from "react";
import { useFormik } from "formik";
import { signUpValidation } from "@/utils/validations";
import { ROLES_LIST } from "@/utils/constants";

const SignUpForm = () => {
  const {
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
    values,
    errors,
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
    validationSchema: signUpValidation,
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

  return (
    <Fragment>
      <Stack spacing={1}>
        <CommonInput
          name="first_name"
          label="First Name"
          placeholder="First Name"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.first_name && errors.first_name}
        />
        <CommonInput
          name="last_name"
          label="Last Name"
          placeholder="Last Name"
          value={values.last_name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.last_name && errors.last_name}
        />
        <CommonInput
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />
        <CommonInput
          name="password"
          label="Password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
        />
        <CommonInput
          name="confirm_password"
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirm_password && errors.confirm_password}
        />
        <CommonSelect
          name="role"
          label="Role"
          placeholder="Select Role"
          options={ROLES_LIST}
          value={values.role}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.role && errors.role}
        />
      </Stack>
      <CommonButton
        title="Create Account"
        size="large"
        onClick={handleSubmit}
        // sx={{ marginTop: "4px" }}
        // loading={true}
        // disabled={true}
      />
    </Fragment>
  );
};

export default SignUpForm;
