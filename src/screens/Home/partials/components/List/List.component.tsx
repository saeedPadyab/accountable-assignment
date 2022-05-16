import Loading from "./List.loading";
import Grid from "@core/components/atoms/Grid";
import Alert from "@core/components/molecules/Alert";
import Card from "@core/components/organisms/MovieCard";
import { IMovie } from "@core/types";
import useTranslation from "@core/hooks/useTranslation";

interface IListProps {
  isLoading: boolean;
  isError: boolean;
  list: IMovie[];
}

const MoviesList: React.FC<IListProps> = ({ isLoading, isError, list }) => {
  const { t } = useTranslation();
  // show skeleton while fetching movies
  if (isLoading) return <Loading />;

  // show Error Alert once we have issue
  if (isError)
    return (
      <Alert type="Error" title={t("oops")} description={t("api_error_desc")} />
    );
  // Show Empty list alert once there is no movies
  if (!list?.length)
    return (
      <Alert
        type="EmptyList"
        title={t("emptyList_title")}
        description={t("emptyList_desc")}
      />
    );

  // render list in a css grid layout
  return (
    <Grid
      css={{
        gridTemplateColumns: "repeat(1,1fr)",
        gridGap: "1em",
        "@tablet": {
          gridTemplateColumns: "repeat(2,1fr)",
        },
        "@desktop": {
          gridTemplateColumns: "repeat(3,1fr)",
        },
        "@bigDesktop": {
          gridTemplateColumns: "repeat(4,1fr)",
        },
      }}
    >
      {list?.map((x) => (
        <Card key={x.id} data={x} />
      ))}
    </Grid>
  );
};

export default MoviesList;
