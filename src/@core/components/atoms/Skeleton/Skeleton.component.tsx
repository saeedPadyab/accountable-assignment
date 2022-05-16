import { styled, keyframes } from "../../../themes/stitches.config";

const pulse = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: "100%" },
});

export default styled("div", {
  backgroundColor: "$whitesmoke",
  position: "relative",
  overflow: "hidden",

  "&::after": {
    animationName: `${pulse}`,
    animationDuration: "2000ms",
    animationDirection: "alternate",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    backgroundColor: "$lightgray",
    borderRadius: "inherit",
    bottom: 0,
    content: '""',
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },

  variants: {
    variant: {
      avatar1: {
        borderRadius: "$round",
        height: "$3",
        width: "$3",
      },
      square: {
        height: "$5",
        width: "$5",
      },
      text: {
        height: "$1",
      },
      title: {
        height: "$5",
      },
      heading: {
        height: "$3",
      },
      button: {
        borderRadius: "$1",
        height: "$5",
        width: "$8",
      },
    },
  },
  defaultVariants: {
    variant: "text",
  },
});
