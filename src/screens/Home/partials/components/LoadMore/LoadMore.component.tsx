import Button from "@core/components/atoms/Button";
import useApp from "@core/contexts/App/useApp";
import useTranslation from "@core/hooks/useTranslation";

const MovieFilters = () => {
  const { loadMore } = useApp();
  const { t } = useTranslation();
  return (
    <Button
      variant="secondary"
      size="2"
      css={{
        width: "60%",
        m: "auto",
        mt: "$5",
      }}
      onClick={loadMore}
    >
      {t("loadMore")}
    </Button>
  );
};

export default MovieFilters;
