import React from 'react';
import {
  Wrapper,
  Image,
  Images,
  ImageWrapper,
  HeaderImageWrapper,
  HeaderImage
} from './Favorites.styles';
import images, { IMAGES_SIZE } from '../../mocks/images';
import { observer } from 'mobx-react';
import viewMode from '../../assets/Favorites/viewMode.png';

@observer
class Favorites extends React.Component {
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
        <Images>
          {images.map((img, idx) => (
            <ImageWrapper
              key={idx}
              style={{ width: IMAGES_SIZE, height: IMAGES_SIZE }}
            >
              <Image source={img} resizeMode={'contain'} />
            </ImageWrapper>
          ))}
        </Images>
      </Wrapper>
    );
  }
}

export default Favorites;
