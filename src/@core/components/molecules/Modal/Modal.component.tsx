import Flex from "@core/components/atoms/Flex";
import { useEffect } from "react";
import { BackDrop, Dialog } from "./styled";

interface IModalDialog {
  children: React.ReactNode;
}

const ModalDialog: React.FC<IModalDialog> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <Flex css={{ overflow: "auto" }}>
      <BackDrop />
      <Dialog direction="column">{children}</Dialog>
    </Flex>
  );
};

export default ModalDialog;
