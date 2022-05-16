import Grid from "@core/components/atoms/Grid";
import { CardSkeleton } from "@core/components/organisms/MovieCard";

const MoviesList = () => {
  return (
    <Grid
      css={{
        gridTemplateColumns: "repeat(1,1fr)",
        gridGap: "1em",
        "@tablet": {
          gridTemplateColumns: "repeat(3,1fr)",
        },
        "@desktop": {
          gridTemplateColumns: "repeat(4,1fr)",
        },
      }}
    >
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Grid>
  );
};

export default MoviesList;
