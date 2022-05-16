import { styled } from "@stitches/react";
import Flex from "@core/components/atoms/Flex";

export const Container = styled(Flex, {
  background: "$white",
  boxShadow: "0 0 3px $colors$lightgray",
  borderRadius: "$2",
  overflow: "hidden",
  cursor: "pointer",
  transition: ".2s",
  position: "relative",
  "&:hover": {
    boxShadow: "0 0 5px $colors$gray",
  },
});
