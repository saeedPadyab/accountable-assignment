import Grid from "@core/components/atoms/Grid";
import Card from "@core/components/organisms/MovieCard";
import { IMovie } from "@core/types";

interface IMoviesListProps {
  list: IMovie[];
}

const MoviesList: React.FC<IMoviesListProps> = ({ list }) => {
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
      {list?.map((x: any) => (
        <Card key={x.id} data={x} />
      ))}
    </Grid>
  );
};

export default MoviesList;
