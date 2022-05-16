import Flex from "@core/components/atoms/Flex";
import Button from "@core/components/atoms/Button";
import Image from "@core/components/atoms/Image";
import Text from "@core/components/atoms/Text";
import APP_CONFIG from "@core/constants/app-config";
import Star from "@core/icons/star.png";
import StarGold from "@core/icons/starGold.png";
import { Container } from "./styled";

import { IMovie } from "@core/types";
import useApp from "@core/contexts/App/useApp";
import useTranslation from "@core/hooks/useTranslation";

interface IMovieCardProps {
  data: IMovie;
}

const MovieCard: React.FC<IMovieCardProps> = ({ data }) => {
  const { handleFavoriteClicked, favoritesList } = useApp();
  const { t } = useTranslation();

  // this function control whether a movie is in favorite list or not to add or remove it from local storage
  const handleFavorite = () => {
    handleFavoriteClicked?.(data);
  };

  const isFavorite = favoritesList?.some((x: any) => x.id === data.id);

  return (
    <Container direction="column">
      <Image
        src={
          data.isAddedLocally
            ? data.poster_path
            : APP_CONFIG.fileBaseUrl + data.poster_path
        }
        css={{ height: "250px" }}
      />
      <Flex direction="column" css={{ p: "$3 $2", flex: 1 }}>
        <Text css={{ mb: "$1", flex: 1 }}>{data.title}</Text>
        <Flex align="center">
          <Text css={{ color: "$gray", flex: 1 }}>{data.release_date}</Text>
          <Button
            variant="ghost"
            size="1"
            onClick={handleFavorite}
            title={isFavorite ? t("remove_fav_title") : t("add_fav_title")}
          >
            <Image src={isFavorite ? StarGold : Star} css={{ width: 18 }} />
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MovieCard;
