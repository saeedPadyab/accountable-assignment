import Flex from "@core/components/atoms/Flex";
import Text from "@core/components/atoms/Text";
import Button from "@core/components/atoms/Button";

interface IModalHeader {
  title: string;
  onClose: Function;
}

const ModalHeader: React.FC<IModalHeader> = ({ title, onClose }) => {
  return (
    <Flex
      align="center"
      css={{ padding: "$4", borderBottom: ".5px solid $colors$lightgray" }}
    >
      <Text size="4" css={{ fontWeight: "bold", flex: 1 }}>
        {title}
      </Text>
      <Button
        variant="ghost"
        size="2"
        //@ts-ignore
        onClick={onClose}
      >
        <Text>&#x2715;</Text>
      </Button>
    </Flex>
  );
};

export default ModalHeader;
