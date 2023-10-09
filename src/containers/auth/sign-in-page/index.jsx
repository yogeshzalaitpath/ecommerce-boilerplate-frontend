"use client";
import { ICONS } from "@/assets";
import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";
import SignInForm from "./components/sign-in-form";
import { Urls } from "@/utils/urls";

export default function SignInPage() {
  const { push } = useRouter();
  return (
    <Fragment>
      <Container maxWidth="xs">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            {/* <ICONS.Shoppingbag color="primary" /> */}
            <Typography variant="h5">Sign In</Typography>
            <Typography variant="subtitle2">Welcome back !</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <SignInForm />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Typography variant="subtitle2">Don&apos;t have an account?</Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                onClick={() => {
                  push(Urls.SignUp.url);
                }}
              >
                Sign up
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}
