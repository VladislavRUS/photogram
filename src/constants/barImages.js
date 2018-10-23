import PhotosActiveImage from '../assets/Photos/Photos_active.png';
import PhotosInactiveImage from '../assets/Photos/Photos_inactive.png';
import ProfileActiveImage from '../assets/Profile/Profile_active.png';
import ProfileInactiveImage from '../assets/Profile/Profile_inactive.png';
import { Image } from 'react-native';
import React from 'react';

export const BAR_IMAGES = {
  PhotosActiveImage,
  PhotosInactiveImage,
  ProfileActiveImage,
  ProfileInactiveImage
};

export const getBarIcon = (isFocused, activeImage, inactiveImage) => {
  const image = isFocused ? activeImage : inactiveImage;

  return (
    <Image
      source={image}
      resizeMode={'cover'}
      style={{ width: 18, height: 18 }}
    />
  );
};
