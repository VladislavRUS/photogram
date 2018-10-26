import React from 'react';
import {
  Wrapper,
  Header,
  Background,
  Overlay,
  UserInfo,
  AvatarWrapper,
  Avatar,
  Name,
  Location,
  Statistics,
  Info,
  Value,
  Title,
  Images,
  ImageWrapper,
  TouchableImageWrapper,
  AnimatedBackground,
  AnimatedImageWrapper,
  Image,
  SettingsImageWrapper,
  SettingsImage
} from './Profile.styles';

import { Dimensions, Animated, Easing, StatusBar } from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import cover from '../../assets/Profile/cover.png';
import gradient from '../../assets/Profile/gradient.png';
import profile from '../../assets/Profile/profile.png';
import { TAB_NAVIGATOR_HEIGHT } from '../../entry/App';
import images, { SCREEN_WIDTH, IMAGES_SIZE } from '../../mocks/images';
import settingsImg from '../../assets/Profile/settings.png';
const SCREEN_HEIGHT = Dimensions.get('window').height;

const animationConfig = {
  duration: 350,
  easing: Easing.in(Easing.ease)
};

@observer
class Profile extends React.Component {
  static navigationOptions = () => ({
    header: null
  });

  @observable
  sharedImg = null;
  @observable
  imagesRef = [];
  @observable
  showSharedImage = false;
  @observable
  sharedImagePosition = null;
  @observable
  scrollOffset = 0;
  @observable
  sharedImageSize = null;
  @observable
  sharedImageBackgroundOpacity = null;

  onImage = (img, idx) => {
    this.imagesRef[idx].measure((fx, fy, width, height, px, py) => {
      this.sharedImg = img;
      this.sharedImageBackgroundOpacity = new Animated.Value(0);
      this.sharedImageSize = new Animated.Value(IMAGES_SIZE);
      this.sharedImagePosition = {
        left: new Animated.Value(px),
        top: new Animated.Value(this.scrollOffset + py)
      };

      const PADDING_TOP =
        (SCREEN_HEIGHT - SCREEN_WIDTH) / 2 -
        TAB_NAVIGATOR_HEIGHT +
        StatusBar.currentHeight / 2;

      const widthAnimation = Animated.timing(this.sharedImageSize, {
        toValue: SCREEN_WIDTH,
        ...animationConfig
      });

      const xAnimation = Animated.timing(this.sharedImagePosition.left, {
        toValue: 0,
        ...animationConfig
      });

      const yAnimation = Animated.timing(this.sharedImagePosition.top, {
        toValue: this.scrollOffset + PADDING_TOP,
        ...animationConfig
      });

      const opacityAnimation = Animated.timing(
        this.sharedImageBackgroundOpacity,
        {
          toValue: 1,
          ...animationConfig
        }
      );

      Animated.parallel([
        widthAnimation,
        xAnimation,
        yAnimation,
        opacityAnimation
      ]).start();

      this.showSharedImage = true;
    });
  };

  onSharedWrapper = () => {
    if (!this.sharedImg) {
      return;
    }

    Animated.timing(this.sharedImageBackgroundOpacity, {
      toValue: 0,
      duration: 150
    }).start(() => {
      this.showSharedImage = false;
      this.sharedImagePosition = null;
      this.sharedImg = null;
    });
  };

  render() {
    return (
      <Wrapper
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        onScroll={event => {
          this.onSharedWrapper();
          this.scrollOffset = event.nativeEvent.contentOffset.y;
        }}
      >
        <Header>
          <Background source={cover} resizeMode={'cover'} />
          <Overlay source={gradient} resizeMode={'cover'} />
          <SettingsImageWrapper>
            <SettingsImage source={settingsImg} />
          </SettingsImageWrapper>
          <UserInfo>
            <AvatarWrapper>
              <Avatar source={profile} resizeMode={'cover'} />
            </AvatarWrapper>
            <Name>John Lee</Name>
            <Location>Los Angeles, Usa</Location>
          </UserInfo>
        </Header>

        <Statistics>
          <Info>
            <Value>721</Value>
            <Title>Photos</Title>
          </Info>
          <Info>
            <Value>2498</Value>
            <Title>Followers</Title>
          </Info>
          <Info>
            <Value>541</Value>
            <Title>Following</Title>
          </Info>
        </Statistics>

        <Images>
          {images.map((img, idx) => (
            <ImageWrapper
              key={idx}
              ref={element => this.imagesRef.push(element)}
              style={{ width: IMAGES_SIZE, height: IMAGES_SIZE }}
              onPress={() => this.onImage(img, idx)}
              activeOpacity={0.9}
            >
              <Image source={img} resizeMode={'contain'} />
            </ImageWrapper>
          ))}
        </Images>

        {this.showSharedImage && (
          <TouchableImageWrapper
            onPress={this.onSharedWrapper}
            activeOpacity={0.9}
          >
            <AnimatedBackground
              style={{
                opacity: this.sharedImageBackgroundOpacity
              }}
            >
              <AnimatedImageWrapper
                style={{
                  left: this.sharedImagePosition.left,
                  top: this.sharedImagePosition.top,
                  width: this.sharedImageSize,
                  height: this.sharedImageSize
                }}
              >
                <Image source={this.sharedImg} resizeMode={'contain'} />
              </AnimatedImageWrapper>
            </AnimatedBackground>
          </TouchableImageWrapper>
        )}
      </Wrapper>
    );
  }
}

export default Profile;
