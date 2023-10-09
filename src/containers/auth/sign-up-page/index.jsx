"use client";
import React, { Fragment } from "react";
import { Box, Container, Typography } from "@mui/material";
import { ICONS } from "@/assets";
import { useRouter } from "next/navigation";
import SignUpForm from "./components/sign-up-form";
import { Urls } from "@/utils/urls";

export default function SignUpPage() {
  const { push } = useRouter();
  return (
    <Fragment>
      <Container maxWidth="xs">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            {/* <ICONS.Shoppingbag color="primary"></ICONS.Shoppingbag> */}
            <Typography variant="h5">Sign Up</Typography>
            <Typography variant="subtitle2">
              Welcome & Join us by creating a free account !
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <SignUpForm />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <Typography variant="subtitle2">
                Already have an account?
              </Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                onClick={() => {
                  push(Urls.SignIn.url);
                }}
              >
                Sign in
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

