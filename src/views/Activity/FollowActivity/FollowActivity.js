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
} from './FollowActivity.styles';

class FollowActivity extends React.Component {
  render() {
    const { follow } = this.props;

    return (
      <Wrapper>
        <AvatarWrapper>
          <Avatar source={follow.user.image} resizeMode={'contain'} />
        </AvatarWrapper>
        <Info>
          <Content>
            <Name>{follow.user.name}</Name>
            <SimpleText>is now</SimpleText>
            <Highlight>following</Highlight>
            <SimpleText>you!</SimpleText>
          </Content>
          <Date>{follow.date}</Date>
        </Info>
      </Wrapper>
    );
  }
}

export default FollowActivity;
