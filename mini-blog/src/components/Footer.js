import React from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  border: "1px solid purple",
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  bottom: "0px",
  width: "100%",
  padding: "8px",
  backgroundColor: "#FFFFFF",
});

export default function Footer() {
  const d = new Date();

  return <Wrapper>User; &#169; Blog {d.getFullYear()}</Wrapper>;
}
