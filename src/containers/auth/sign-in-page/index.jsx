"use client";
import { ICONS } from "@/assets";
import CommonButton from "@/components/common-button";
import CommonInput from "@/components/common-input";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const { push } = useRouter();
  return (
    <Fragment>
      <Container maxWidth="xs">
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          <Typography variant="h5">Sign In</Typography>
          <Typography variant="subtitle2">Welcome back Jhon !</Typography>
        </Box>

        <Box sx={{ width: "100%", marginTop: "20px" }}>
          <Stack spacing={1}>
            <CommonInput placeholder="User Name" title="User Name" />
            <CommonInput
              placeholder="Password"
              title="Password"
              type="password"
            />
          </Stack>
          <Stack sx={{ marginTop: "20px" }}>
            <CommonButton
              title="Sign In"
              size="large"
              width="100%"
              // disabled={true}
              // loading={true}
            />
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
            <Typography variant="subtitle2">Dont have an account?</Typography>
            <Typography
              variant="subtitle2"
              color="primary"
              onClick={() => {
                push("/auth/sign-up");
              }}
            >
              Sign up
            </Typography>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}
