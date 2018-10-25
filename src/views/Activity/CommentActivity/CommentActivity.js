import React from 'react';
import {
  Wrapper,
  AvatarWrapper,
  Avatar,
  Info,
  Content,
  Name,
  Highlight,
  SimpleText,
  ItalicText,
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
            <Highlight>commented</Highlight>
            <SimpleText>on your photo:</SimpleText>
            <ItalicText>{'"' + comment.text + '"'}</ItalicText>
          </Content>
          <Date>{comment.date}</Date>
        </Info>
      </Wrapper>
    );
  }
}

export default CommentActivity;
