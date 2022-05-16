import Flex from "@core/components/atoms/Flex";
import Text from "@core/components/atoms/Text";

interface IModalFooterProps {
  children: React.ReactNode;
}

const ModalFooter: React.FC<IModalFooterProps> = ({ children }) => {
  return (
    <Flex
      align="center"
      css={{ padding: "$4", borderTop: ".5px solid $colors$lightgray" }}
    >
      {children}
    </Flex>
  );
};

export default ModalFooter;
