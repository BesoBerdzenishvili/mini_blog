import React from "react";
import { styled } from "../stitches.config";

const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  border: "1px solid purple",
  padding: "10px",
  backgroundColor: "#FFFFFF",
});

const Button = styled("button", {
  outline: "none",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: "4px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "$yellow200",
  },
});

export default function Header() {
  return (
    <Wrapper>
      <Button>Main</Button>
      <Button>New Post</Button>
    </Wrapper>
  );
}
