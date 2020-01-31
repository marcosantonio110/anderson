import React from 'react';

import { Input } from './styles';

interface Props
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
  > {
  value: string;
  placeholder: string;
  onChange(value: string): void;
}

const CnxInput: React.FC<Props> = ({placeholder, children, onChange, ...shared }) => {
  return <Input placeholder={placeholder} onChange={e => onChange(e.target.value)} {...shared} />;
};

CnxInput.defaultProps = {
  type: 'text',
};

export default CnxInput;
