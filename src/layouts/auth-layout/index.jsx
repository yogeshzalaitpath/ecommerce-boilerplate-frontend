import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import Image from "next/image";
import { IMAGES } from "@/assets";

export default function AuthLayout({ children }) {
  return (
    <Fragment>
      <Grid container minHeight="100vh">
        <Grid
          item
          xs={12}
          lg={7}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {children}
        </Grid>
        <Grid item lg={5} sx={{ display: { xs: "none", lg: "block" } }}>
          <div
            style={{
              position: "relative",
              height: "100vh",
            }}
          >
            <Image
              src={IMAGES.authside}
              alt="Description"
              layout="fill"
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
