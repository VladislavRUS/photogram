import React from 'react';
import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  Info,
  Content,
  Name,
  Commented,
  OnYourPhoto,
  Comment,
  Date
} from './CommentActivity.styles';

class CommentActivity extends React.Component {
  render() {
    const { comment } = this.props;

    return (
      <Wrapper>
        <AvatarWrapper>
          <Avatar source={comment.user.image} resizeMode={'contain'} />
        </AvatarWrapper>
        <Info>
          <Content>
            <Name>{comment.user.name}</Name>
            <Commented>commented</Commented>
            <OnYourPhoto>on your photo:</OnYourPhoto>
            <Comment>{'"' + comment.text + '"'}</Comment>
          </Content>
          <Date>{comment.date}</Date>
        </Info>
      </Wrapper>
    );
  }
}

export default CommentActivity;
