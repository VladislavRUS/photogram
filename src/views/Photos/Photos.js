import React from 'react';
import Photo from '../../components/Photo';
import { Wrapper } from './Photos.styles';
import user1 from '../../assets/users/1.png';
import user2 from '../../assets/users/2.png';
import user3 from '../../assets/users/3.png';
import user4 from '../../assets/users/4.png';
import cat from '../../assets/images/cat.png';

const user = {
  name: 'Mike Felton',
  img: user1
};

const users = [
  {
    img: user1
  },
  {
    img: user2
  },
  {
    img: user3
  },
  {
    img: user4
  }
];

class Photos extends React.Component {
  render() {
    return (
      <Wrapper>
        <Photo user={user} image={cat} likes={users} />
        <Photo user={user} image={cat} likes={users} />
        <Photo user={user} image={cat} likes={users} />
      </Wrapper>
    );
  }
}

export default Photos;
