import styled from 'styled-components/native';
import {TextInputFieldProps} from '.';
import {I18nManager} from 'react-native';

export const Container = styled.View`
  margin-horizontal: 20px;
`;

export const TextInputStyled = styled.TextInput`
  border-width: 2px;
  border-color: ${(props: TextInputFieldProps) =>
    props.error ? '#dd571c' : '#ddd'};
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  color: black;
  font-weight: 500;
  text-align: ${I18nManager.isRTL ? 'right' : 'left'};
`;

export const HintText = styled.Text`
  width: 100%;
  color: #b56727;
  font-weight: bold;
  margin-top: 10px;
`;
