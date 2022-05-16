import React from "react";
import Flex from "../../atoms/Flex";

const MainLayoutHeader: React.FC = () => {
  return (
    <Flex
      css={{
        height: "$topHeaderHeight",
        backgroundColor: "$primary",
        p: "0 $5",
        position: "fixed",
        width: "100%",
        zIndex: "$max",
      }}
    />
  );
};

export default MainLayoutHeader;
