import React from 'react';
import { Image } from 'react-native';
import activeImg from './like_active.png';
import inactiveImg from './like_incative.png';

const LikeIcon = props => (
  <Image
    style={{ width: 13, height: 10 }}
    resizeMode={'cover'}
    source={props.active ? activeImg : inactiveImg}
  />
);

export default LikeIcon;
