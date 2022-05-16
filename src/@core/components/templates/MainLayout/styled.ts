import { styled } from "@stitches/react";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink, {
  textDecoration: "none",
  marginRight: "$3",
  fontSize: "$5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$3",
  position: "relative",
  color: "$black",
  "&:before": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: "3px",
    background: "$primary",
    transition: ".2s",
  },
  "&.active": {
    "&:before": {
      margin: "auto",
      width: "100%",
    },
  },
});
