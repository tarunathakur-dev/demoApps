import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #fcae1e;
`;

export const Container = styled.View`
  position: absolute;
  top: 55px;
  right: 15px;
  z-index: 999;
`;

export const ImageContainer = styled.Image`
  height: 35px;
  width: 35px;
`;

export const TitleText = styled.Text`
  width: 100%;
  text-align: center;
  align-self: center;
  color: #fff;
  margin: 20px;
  margin-top: 50px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

