import { styled } from "../../../themes/stitches.config";

const Button = styled("button", {
  // Reset
  all: "unset",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "inline-flex",
  flexShrink: 0,
  justifyContent: "center",
  lineHeight: "1",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",

  height: "$5",
  px: "$2",
  fontSize: "$2",
  fontWeight: 500,

  "&:disabled": {
    opacity: 0.5,
  },

  variants: {
    size: {
      "1": {
        borderRadius: "$1",
        height: "$5",
        px: "$2",
        fontSize: "$1",
        lineHeight: "$sizes$5",
      },
      "2": {
        borderRadius: "$2",
        height: "$6",
        px: "$3",
        fontSize: "$3",
        lineHeight: "$sizes$6",
      },
      "3": {
        borderRadius: "$2",
        height: "$7",
        px: "$4",
        fontSize: "$4",
        lineHeight: "$sizes$7",
      },
    },
    variant: {
      ghost: {
        backgroundColor: "transparent",
        boxShadow: "none",
        color: "$black",
        "&:hover": {
          background: "$lightgray",
        },
      },
      primary: {
        backgroundColor: "$primary",
        boxShadow: "none",
        color: "$white",
      },
      secondary: {
        backgroundColor: "$darkBlue",
        color: "$white",
      },
    },
    state: {
      active: {},
      waiting: {},
    },
  },
  compoundVariants: [],
});
export default Button;
