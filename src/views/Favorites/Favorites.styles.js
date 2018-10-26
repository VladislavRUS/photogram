import styled from 'styled-components';

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const Images = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.View``;
export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const HeaderImageWrapper = styled.TouchableOpacity`
  margin-right: 14px;
  width: 14px;
  height: 14px;
`;

export const HeaderImage = styled.Image`
  width: 100%;
  height: 100%;
`;
