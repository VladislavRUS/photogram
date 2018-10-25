import React from 'react';
import { Image, Wrapper, LoaderWrapper } from './Camera.styles';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { ActivityIndicator } from 'react-native';

@observer
class Camera extends React.Component {
  @observable
  isLoading = false;

  render() {
    const { navigation } = this.props;
    const imageUri = navigation.getParam('uri');

    return (
      <Wrapper>
        <Image
          source={{ uri: imageUri }}
          resizeMode={'contain'}
          onLoadEnd={() => (this.isLoading = false)}
          onLoadStart={() => (this.isLoading = true)}
        />
        {this.isLoading && (
          <LoaderWrapper>
            <ActivityIndicator color={'#f02861'} />
          </LoaderWrapper>
        )}
      </Wrapper>
    );
  }
}

export default Camera;
