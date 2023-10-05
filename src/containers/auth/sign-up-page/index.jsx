"use client";
import React, { Fragment } from "react";
import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common-input";
import { Box, Container, Typography } from "@mui/material";
import { ICONS } from "@/assets";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const { push } = useRouter();
  return (
    <Fragment>
      <Container maxWidth="xs">
        <Box>
          <Typography variant="h5" sx={{ marginY: "10px" }}>
            Sign Up
          </Typography>
          <Typography variant="subtitle2" sx={{ marginBottom: "10px" }}>
            Welcome & Join us by creating a free account !
          </Typography>
        </Box>

        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Stack spacing={1}>
            <CommonInput placeholder="First Name" title="First Name" />
            <CommonInput placeholder="Last Name" title="Last Name" />
            <CommonInput
              placeholder="Password"
              title="Password"
              type="password"
            />
            <CommonInput
              placeholder="Confirm Password"
              title="Confirm Password"
              type="password"
            />
          </Stack>
          <Stack sx={{ marginTop: "20px" }}>
            <CommonButton title="Create Account" size="large" width="100%" />
          </Stack>
          <Box
            sx={{
              marginY: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="subtitle2">
              Already have an account?
            </Typography>
            <Typography
              variant="subtitle2"
              color="primary"
              onClick={() => {
                push("/auth/sign-in");
              }}
            >
              Sign in
            </Typography>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

