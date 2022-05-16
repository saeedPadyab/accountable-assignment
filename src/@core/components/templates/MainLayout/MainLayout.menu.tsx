import React from "react";
import Flex from "../../atoms/Flex";
import Image from "../../atoms/Image";
import { StyledNavLink } from "./styled";
import Logo from "@core/icons/accountable-logo.svg";
import useTranslation from "@core/hooks/useTranslation";

const MainLayoutHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Flex
      css={{
        height: "$headerMenuHeight",
        backgroundColor: "$white",
        boxShadow: "0 0 5px lightgray",
        p: "0 $5",
        position: "fixed",
        width: "100%",
        top: "$sizes$topHeaderHeight",
        zIndex: "$max",
      }}
    >
      <Flex
        css={{
          width: "$contentMaxWidth",
          m: "0 auto",
        }}
      >
        <StyledNavLink to="/">{t("home")}</StyledNavLink>
        <StyledNavLink to="/favorites">{t("favorites")}</StyledNavLink>
        <Image
          src={Logo}
          css={{
            width: "200px",
            marginLeft: "auto",
            display: "none",
            "@tablet": { display: "flex" },
          }}
        />
      </Flex>
    </Flex>
  );
};

export default MainLayoutHeader;
