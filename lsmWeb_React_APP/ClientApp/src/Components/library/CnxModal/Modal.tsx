import React from "react";

import { Modal } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isOpenModal: boolean;
}

export const cnxModal: React.FC<Props> = ({
  isOpenModal,
  children,
  ...shared
}) => {
  return (
    <Modal isOpenModal={isOpenModal} {...shared}>
      {children}
    </Modal>
  );
};

export default cnxModal;
