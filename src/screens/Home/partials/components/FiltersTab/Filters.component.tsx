import Button from "@core/components/atoms/Button";
import { StyledButton, Container } from "./styled";
import AddMovieModal from "../AddMovieModal";

import { MovieEnumFilters } from "@core/types";
import useApp from "@core/contexts/App/useApp";
import useDisclosure from "@core/hooks/useDisclosure";
import useTranslation from "@core/hooks/useTranslation";

const MovieFilters = () => {
  const { changeFilterTab, selectedFilter } = useApp() || {};
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();

  const tabsList = [
    {
      id: "top",
      displayName: t("filter_top"),
      onClick: () => changeFilterTab?.(MovieEnumFilters.top),
    },
    {
      IDBIndex: "upcoming",
      displayName: t("filter_upcoming"),
      onClick: () => changeFilterTab?.(MovieEnumFilters.upcoming),
    },
    {
      id: "nowPlaying",
      displayName: t("filter_nowPlaying"),
      onClick: () => changeFilterTab?.(MovieEnumFilters.nowPlaying),
    },
  ];

  const handleAddNewClicked = () => {
    onToggle();
  };

  return (
    <>
      <AddMovieBtn isMobile onClick={handleAddNewClicked} />
      <Container>
        {tabsList.map((tab) => (
          <StyledButton
            key={tab.id}
            variant={selectedFilter === tab.id ? "primary" : "ghost"}
            size="2"
            onClick={tab.onClick}
          >
            {tab.displayName}
          </StyledButton>
        ))}
        <AddMovieBtn onClick={handleAddNewClicked} />
      </Container>
      {isOpen && <AddMovieModal onClose={onToggle} />}
    </>
  );
};

const AddMovieBtn = ({ isMobile, ...rest }: any) => (
  <Button
    variant={isMobile ? "secondary" : "ghost"}
    size="2"
    css={
      isMobile
        ? { mb: "$2", display: "flex", "@tablet": { display: "none" } }
        : { ml: "auto", display: "none", "@tablet": { display: "flex" } }
    }
    {...rest}
  >
    + Add Movie
  </Button>
);

export default MovieFilters;
