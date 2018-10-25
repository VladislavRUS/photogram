import React from 'react';
import { Wrapper, Image } from './Camera.styles';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Camera extends React.Component {
  @observable
  imageUri: null;

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.imageUri = navigation.getParam('uri');
  }

  render() {
    return (
      <Wrapper>
        <Image source={{ uri: this.imageUri }} resizeMode={'contain'} />
      </Wrapper>
    );
  }
}

export default Camera;
