import React, { Fragment } from "react";

export default function PlainLayout({ children }) {
  return (
    <Fragment>
      <h1>PlainLayout</h1>
      {children}
    </Fragment>
  );
}
