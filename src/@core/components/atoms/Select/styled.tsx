import { styled } from "../../../themes/stitches.config";

export default styled("select", {
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
  border: "1px solid #ccc",
  borderRadius: "4px",

  state: {
    invalid: {
      boxShadow: "inset 0 0 0 1px $colors$red7",
      "&:focus": {
        boxShadow:
          "inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8",
      },
    },
    valid: {
      boxShadow: "inset 0 0 0 1px $colors$green7",
      "&:focus": {
        boxShadow:
          "inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8",
      },
    },
  },
  defaultVariants: {},
});
