import React from 'react';
import { Image, Wrapper } from './Camera.styles';
import { observer } from 'mobx-react';

@observer
class Camera extends React.Component {
  render() {
    const { navigation } = this.props;
    const imageUri = navigation.getParam('uri');

    return (
      <Wrapper>
        <Image source={{ uri: imageUri }} resizeMode={'contain'} />
      </Wrapper>
    );
  }
}

export default Camera;
