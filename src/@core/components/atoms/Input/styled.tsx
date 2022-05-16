import { styled } from "../../../themes/stitches.config";

export default styled("input", {
  // backgroundColor: "$lightgray",
  // fontVariantNumeric: "tabular-nums",

  // "&:-webkit-autofill": {
  //   boxShadow: "inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3",
  // },

  // "&:-webkit-autofill::first-line": {
  //   fontFamily: "$untitled",
  //   color: "$hiContrast",
  // },
  fontSize: "$3",
  "&:focus": {
    boxShadow: "0px 0px 0px 1px $colors$primary",
  },
  "&::placeholder": {
    fontSize: "$3",
  },
  flex: 1,
  padding: "12px",
  border: "1px solid $colors$gray",
  borderRadius: "4px",

  variants: {
    isError: {
      true: {
        border: "1px solid $colors$red",
        boxShadow: "unset !important",
      },
    },
  },
  // defaultVariants: {},
});
