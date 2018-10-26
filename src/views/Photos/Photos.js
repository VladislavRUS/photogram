import React from 'react';
import Photo from '../../components/Photo';
import photos from '../../mocks/photos';
import { Wrapper, HeaderImage, HeaderImageWrapper } from './Photos.styles';
import viewMode from '../../assets/Photos/viewMode.png';

class Photos extends React.Component {
  static navigationOptions = {
    headerRight: (
      <HeaderImageWrapper>
        <HeaderImage source={viewMode} />
      </HeaderImageWrapper>
    )
  };

  render() {
    return (
      <Wrapper>
        {photos.map((photoInfo, idx) => (
          <Photo
            key={idx}
            user={photoInfo.user}
            image={photoInfo.image}
            likes={photoInfo.likes}
            date={photoInfo.date}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Photos;
