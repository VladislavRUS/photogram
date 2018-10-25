import styled from 'styled-components';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const AvatarWrapper = styled.View`
  margin-right: 5px;
  width: 30px;
  height: 30px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Info = styled.View`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Name = styled.Text`
  margin-right: 5px;
  color: #494949;
  font-size: 13px;
  font-weight: 700;
`;

export const Highlight = styled.Text`
  margin-right: 5px;
  font-size: 13px;
  color: #f02861;
  letter-spacing: 0.52px;
`;

export const SimpleText = styled.Text`
  margin-right: 5px;
  color: #494949;
  font-size: 13px;
  font-weight: 400;
`;

export const Date = styled.Text`
  font-size: 9px;
  color: #cecece;
  font-weight: 400;
`;
