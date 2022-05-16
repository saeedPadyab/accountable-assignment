import Alert from "@core/components/molecules/Alert";
import useTranslation from "@core/hooks/useTranslation";
const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Alert
      type="NotFound"
      title={t("pageNotFound")}
      description={t("pageNotFound_desc")}
    />
  );
};

export default NotFound;
