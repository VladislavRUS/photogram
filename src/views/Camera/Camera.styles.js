import styled from 'styled-components';

export const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 1;
  background-color: #fff;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const LoaderWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
`;
