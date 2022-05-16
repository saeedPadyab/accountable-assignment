import Flex from "@core/components/atoms/Flex";
import Skeleton from "@core/components/atoms/Skeleton";

const MovieCardSkeleton = () => {
  return (
    <Flex
      direction="column"
      css={{
        background: "$white",
        boxShadow: "0 0 3px $colors$lightgray",
        borderRadius: "$2",
        overflow: "hidden",
      }}
    >
      <Skeleton variant="square" css={{ width: "100%", height: 250 }} />
      <Flex direction="column" css={{ p: "$3 $2" }}>
        <Skeleton variant="heading" css={{ mb: "$1", width: "70%" }} />
        <Skeleton variant="text" css={{ width: "40%" }} />
      </Flex>
    </Flex>
  );
};

export default MovieCardSkeleton;
