import React from 'react';
import {
  Actions,
  Comment,
  Comments,
  CommentsCount,
  CommentIconWrapper,
  Footer,
  Header,
  Image,
  Info,
  Like,
  LikeIconWrapper,
  Likes,
  LikesCount,
  PhotoContent,
  ShowAll,
  ShowAllText,
  Time,
  Wrapper,
  UserWrapper
} from './Photo.styles';
import User from '../User';
import LikeIcon from '../Icons/LikeIcon';
import CommentIcon from '../Icons/CommentIcon';

class Photo extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <User user={this.props.user} showName={true} />
          <Time>11m</Time>
        </Header>
        <PhotoContent>
          <Image source={this.props.image} />
        </PhotoContent>
        <Info>
          <Likes>
            <LikeIconWrapper>
              <LikeIcon active={true} />
            </LikeIconWrapper>
            <LikesCount>127 likes</LikesCount>
          </Likes>
          <Comments>
            <CommentIconWrapper>
              <CommentIcon active={true} />
            </CommentIconWrapper>
            <CommentsCount>34 comments</CommentsCount>
          </Comments>
          <Actions>
            <Like>
              <LikeIcon active={false} />
            </Like>
            <Comment>
              <CommentIcon active={false} />
            </Comment>
          </Actions>
        </Info>
        <Footer>
          {this.props.likes.map((item, idx) => (
            <UserWrapper key={idx}>
              <User user={item} />
            </UserWrapper>
          ))}
          <ShowAll>
            <ShowAllText>show all</ShowAllText>
          </ShowAll>
        </Footer>
      </Wrapper>
    );
  }
}

export default Photo;
