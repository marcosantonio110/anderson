import React from 'react';

import {Button} from './styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const CnxButton: React.FC<Props> = ({ children, ...shared }) => {
  return <Button {...shared}>{children}</Button>;
};

CnxButton.defaultProps = {
  type: 'button',
};

export default CnxButton;
