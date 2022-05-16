import Flex from "@core/components/atoms/Flex";
import Description from "./partials/components/Description";
import Filters from "./partials/components/FiltersTab";
import List from "./partials/components/List";
import LoadMore from "./partials/components/LoadMore";

import useGetMovies from "@core/hooks/api-hooks/useGetMovies";

const Home = () => {
  const { data, isLoading, isError, hasNextPage } = useGetMovies();

  return (
    <Flex direction="column">
      <Description />
      <Filters />
      <List list={data} isLoading={isLoading} isError={isError} />
      {hasNextPage && <LoadMore />}
    </Flex>
  );
};

export default Home;
