import Text from "@core/components/atoms/Text";
import useTranslation from "@core/hooks/useTranslation";

const MovieFilters = () => {
  const { t } = useTranslation();
  return (
    <Text css={{ color: "$gray", mb: "$5", lineHeight: "21px" }}>
      {t("home_desc")}
    </Text>
  );
};

export default MovieFilters;
