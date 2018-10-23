import styled from 'styled-components';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Header = styled.View`
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  background-color: #fff;
`;

export const Time = styled.Text`
  margin-left: auto;
  color: #cecece;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.36px;
`;
export const PhotoContent = styled.View`
  margin-bottom: 12px;
  width: 100%;
  height: 185px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
export const Info = styled.View`
  margin-bottom: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Likes = styled(InfoWrapper)`
  margin-right: 20px;
`;

export const LikeIconWrapper = styled.View`
  margin-right: 7px;
`;

export const CommentIconWrapper = styled.View`
  margin-right: 7px;
`;

export const Comments = styled(InfoWrapper)``;

const Count = styled.Text`
  color: #494949;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.44px;
`;

export const LikesCount = styled(Count)``;
export const CommentsCount = styled(Count)``;

export const Actions = styled.View`
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Action = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 22px;
  border-radius: 2px;
  background-color: #cecece;
`;

export const Like = styled(Action)`
  margin-right: 6px;
`;

export const Comment = styled(Action)``;
export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ShowAll = styled.TouchableOpacity`
  margin-left: auto;
`;

export const ShowAllText = styled.Text`
  color: #494949;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.44px;
`;

export const UserWrapper = styled.View`
  margin-right: 6px;
`;
