import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Image from "next/image";
import { IMAGES } from "@/assets";

export default function AuthLayout({ children }) {
  return (
    <Fragment>
      <Grid container sx={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {children}
        </Grid>
        <Grid
          item
          lg={5}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Image
            src={IMAGES.authCover}
            alt="Auth Cover"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "right",
              marginBottom: "-4px",
            }}
            priority={true}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
