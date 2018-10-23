import React from 'react';
import { Wrapper, Avatar, Image, Name } from './User.styles';

class User extends React.Component {
  render() {
    return (
      <Wrapper>
        <Avatar>
          <Image source={this.props.user.img} resizeMode={'contain'} />
        </Avatar>
        {this.props.showName && <Name>{this.props.user.name}</Name>}
      </Wrapper>
    );
  }
}

export default User;
