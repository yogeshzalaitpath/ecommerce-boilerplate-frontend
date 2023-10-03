import { Button } from "@mui/material";
import React, { Fragment } from "react";

export default function LoginPage() {
  return (
    <Fragment>
      <h1>Login</h1>
      <Button variant="contained" color="primary">
        Button
      </Button>
      <Button variant="contained" color="secondary">
        Button
      </Button>
      <Button variant="contained" color="error">
        Button
      </Button>
      <Button variant="contained" color="warning">
        Button
      </Button>
      <Button variant="contained" color="info">
        Button
      </Button>
      <Button variant="contained" color="success">
        Button
      </Button>
    </Fragment>
  );
}
