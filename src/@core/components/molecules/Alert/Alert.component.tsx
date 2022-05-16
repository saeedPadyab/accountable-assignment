import Flex from "@core/components/atoms/Flex";
import Image from "@core/components/atoms/Image";
import Text from "@core/components/atoms/Text";
import EmptySvg from "@core/icons/noData.svg";
import Error from "@core/icons/error.svg";
import NotFound from "@core/icons/notFound.svg";

interface IAlertProps {
  type: "EmptyList" | "Error" | "NotFound";
  title: string;
  description?: string;
}

const Alert: React.FC<IAlertProps> = ({ type, title, description }) => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Image
        src={
          type === "EmptyList" ? EmptySvg : type === "Error" ? Error : NotFound
        }
        css={{ width: 250, mt: "$3", mb: "$3" }}
      />
      <Text size="7">{title}</Text>
      <Text
        css={{
          color: "$gray",
          mb: "$5",
          lineHeight: "21px",
          textAlign: "center",
          mt: "$3",
          maxWidth: "500px",
        }}
      >
        {description}
      </Text>
    </Flex>
  );
};

export default Alert;
