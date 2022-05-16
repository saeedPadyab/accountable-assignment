import Flex from "@core/components/atoms/Flex";

interface IModalBodyProps {
  children: React.ReactNode;
}

const ModalBody: React.FC<IModalBodyProps> = ({ children }) => {
  return (
    <Flex
      direction="column"
      css={{ padding: "$4", flex: 1, maxHeight: 500, overflow: "auto" }}
    >
      {children}
    </Flex>
  );
};

export default ModalBody;
