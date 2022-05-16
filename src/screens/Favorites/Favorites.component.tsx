import Flex from "@core/components/atoms/Flex";
import Alert from "@core/components/molecules/Alert";
import useApp from "@core/contexts/App/useApp";
import Description from "./partials/components/Description";
import FavoriteList from "./partials/components/List";

const Favorites = () => {
  const { favoritesList } = useApp();
  return (
    <Flex direction="column">
      {!favoritesList?.length ? (
        <Alert
          type="EmptyList"
          title="Empty list!!"
          description="Unfortunately list is empty. You don't have any movies as your favorites list. Please go back to home screen and pick the ones you like."
        />
      ) : (
        <>
          <Description />
          <FavoriteList list={favoritesList} />
        </>
      )}
    </Flex>
  );
};

export default Favorites;
