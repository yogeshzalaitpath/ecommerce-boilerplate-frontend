import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common-input";
import { signInValidation } from "@/utils/validations";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import React, { Fragment } from "react";

const SignInForm = () => {
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
      email: "",
      password: "",
    },
    validationSchema: signInValidation,
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
      </Stack>
      <Stack>
        <CommonButton
          title="Sign In"
          size="large"
          width="100%"
          // disabled={true}
          // loading={true}
          onClick={handleSignup}
        />
      </Stack>
    </Fragment>
  );
};

export default SignInForm;
