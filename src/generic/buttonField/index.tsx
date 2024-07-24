import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonStyled, TitleText } from './button.style';

export interface ButtonInputProps extends TouchableOpacityProps {
  title?: string;
}

const Button: React.FC<ButtonInputProps> = ({ ...rest }) => {
  return (
    <ButtonStyled {...rest}>
      <TitleText>{rest.title}</TitleText>
    </ButtonStyled>
  );
};

export default Button;
