import React from "react";
import Flex from "../../atoms/Flex";
import Header from "./MainLayout.header";
import Menu from "./MainLayout.menu";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Flex direction="column" css={{ height: "100vh" }}>
      <Header />
      <Menu />
      <Flex
        direction="column"
        css={{
          width: "100%",
          maxWidth: "100%",
          m: "0 auto",
          p: "calc( $sizes$topHeaderHeight + $sizes$headerMenuHeight + 20px ) $5 $5 $5",
          "@tablet": {
            maxWidth: "$contentMaxWidth",
          },
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default MainLayout;
