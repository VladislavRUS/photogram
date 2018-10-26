import styled from 'styled-components';
import { Animated } from 'react-native';

export const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.View`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
`;

export const Background = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const UserInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarWrapper = styled.View`
  margin-bottom: 8px;
  width: 60px;
  height: 60px;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Name = styled.Text`
  margin-bottom: 7px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.8px;
`;

export const Location = styled.Text`
  color: #cecece;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.44px;
`;

export const Statistics = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #fff;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-grow: 1;
`;

export const Value = styled.Text`
  color: #f02861;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.64px;
`;

export const Title = styled.Text`
  color: #cecece;
  font-size: 9px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.36px;
`;

export const Images = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.TouchableOpacity``;
export const TouchableImageWrapper = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const AnimatedBackground = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #000;
`;

export const AnimatedImageWrapper = styled(Animated.View)`
  position: absolute;
`;

export const SettingsImageWrapper = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 30px;
  width: 14px;
  height: 14px;
`;

export const SettingsImage = styled.Image`
  width: 100%;
  height: 100%;
`;
