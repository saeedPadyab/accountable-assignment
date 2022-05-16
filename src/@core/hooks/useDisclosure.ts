import { useState } from "react";

export interface IUseDisclosureReturnProps {
  isOpen?: boolean;
  onToggle: Function;
  onOpen: Function;
  onClose: Function;
}

const useDisclosure = (initialState?: boolean): IUseDisclosureReturnProps => {
  const [isOpen, toggleIsOpen] = useState(!!initialState);

  const onClose = () => {
    toggleIsOpen(false);
  };

  const onOpen = () => {
    toggleIsOpen(true);
  };

  const onToggle = () => (isOpen ? onClose() : onOpen());

  return { isOpen, onOpen, onClose, onToggle };
};
export default useDisclosure;
