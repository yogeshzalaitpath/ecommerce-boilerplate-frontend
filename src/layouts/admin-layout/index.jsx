import React, { Fragment } from "react";
import Dashboard from "./dashhboard";

export default function AdminLayout({ children }) {
  return (
    <Fragment>
      <Dashboard>{children}</Dashboard>
    </Fragment>
  );
}
