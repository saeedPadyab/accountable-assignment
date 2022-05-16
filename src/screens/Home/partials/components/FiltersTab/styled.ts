import Flex from "@core/components/atoms/Flex";
import Button from "@core/components/atoms/Button";
import { styled } from "@core/themes/stitches.config";

export const Container = styled(Flex, {
  background: "$white",
  p: "$2 $1",
  boxShadow: "0 0 3px $colors$lightgray",
  borderRadius: "$2",
  mb: "$5",
  flexWrap: "wrap",
});

export const StyledButton = styled(Button, {
  width: "auto",
  marginRight: "$4",
  cursor: "pointer",
  "@desktop": {
    width: 120,
  },
});
