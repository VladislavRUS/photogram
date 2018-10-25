import React from 'react';
import {
  Avatar,
  AvatarWrapper,
  Content,
  Date,
  Highlight,
  Info,
  Name,
  SimpleText,
  Wrapper
} from './LikeActivity.styles';

class LikeActivity extends React.Component {
  render() {
    const { like } = this.props;

    return (
      <Wrapper>
        <AvatarWrapper>
          <Avatar source={like.user.image} resizeMode={'contain'} />
        </AvatarWrapper>
        <Info>
          <Content>
            <Name>{like.user.name}</Name>
            <Highlight>liked</Highlight>
            <SimpleText>your photo</SimpleText>
          </Content>
          <Date>{like.date}</Date>
        </Info>
      </Wrapper>
    );
  }
}

export default LikeActivity;
