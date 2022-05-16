import Flex from "@core/components/atoms/Flex";
import { styled, keyframes } from "@stitches/react";

const fadeInDown = keyframes({
  "0%": { transform: "translateY(-20px)" },
  "100%": { transform: "translateY(0px)" },
});

export const BackDrop = styled(Flex, {
  top: 0,
  left: 0,
  right: 0,
  position: "fixed",
  width: "100%",
  height: "100vh",
  background: "rgba(0,0,0,.5)",
  zIndex: 1000,
});
export const Dialog = styled(Flex, {
  position: "fixed",
  width: "100%",
  maxWidth: 600,
  left: 0,
  right: 0,
  top: 30,
  borderRadius: "$2",
  background: "$white",
  zIndex: 1001,
  animation: `${fadeInDown} .3s`,
  margin: "auto",
});
