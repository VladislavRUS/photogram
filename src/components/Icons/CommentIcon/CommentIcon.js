import React from 'react';
import { Image } from 'react-native';
import activeImg from './comment_active.png';
import inactiveImg from './comment_inactive.png';

const CommentIcon = props => (
  <Image
    style={{ width: 12, height: 10 }}
    resizeMode={'cover'}
    source={props.active ? activeImg : inactiveImg}
  />
);

export default CommentIcon;
