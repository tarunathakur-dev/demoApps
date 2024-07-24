import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, HintText, TextInputStyled } from './textInput.style';

export interface TextInputFieldProps extends TextInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: any;
  showError?: boolean;
}

const CustomTextInput: React.FC<TextInputFieldProps> = ({ ...rest }) => {
  return (
    <Container>
      <TextInputStyled placeholderTextColor={'gray'} {...rest} />
      {rest.showError && rest.error && <HintText>{rest.error}</HintText>}
    </Container>
  );
};

export default CustomTextInput;
