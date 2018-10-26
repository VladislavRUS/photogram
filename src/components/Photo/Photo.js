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
import { observer } from 'mobx-react';
import { observable } from 'mobx';

@observer
class Photo extends React.Component {
  @observable
  isLikeActive = Math.random() > 0.5;
  @observable
  likesNumber = Math.floor(Math.random() * 100) + 1;
  @observable
  commentsNumber = Math.floor(Math.random() * 30);

  onLikePress = () => {
    this.isLikeActive = !this.isLikeActive;

    if (this.isLikeActive) {
      this.likesNumber++;
    } else {
      this.likesNumber--;
    }
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <User user={this.props.user} showName={true} />
          <Time>{this.props.date}</Time>
        </Header>
        <PhotoContent>
          <Image source={this.props.image} />
        </PhotoContent>
        <Info>
          <Likes>
            <LikeIconWrapper>
              <LikeIcon active={true} />
            </LikeIconWrapper>
            <LikesCount>{this.likesNumber} likes</LikesCount>
          </Likes>
          <Comments>
            <CommentIconWrapper>
              <CommentIcon active={true} />
            </CommentIconWrapper>
            <CommentsCount>{this.commentsNumber} comments</CommentsCount>
          </Comments>
          <Actions>
            <Like onPress={this.onLikePress}>
              <LikeIcon active={this.isLikeActive} />
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
