import PhotosActiveImage from '../assets/Photos/Photos_active.png';
import PhotosInactiveImage from '../assets/Photos/Photos_inactive.png';
import ProfileActiveImage from '../assets/Profile/Profile_active.png';
import ProfileInactiveImage from '../assets/Profile/Profile_inactive.png';
import ActivityActiveImage from '../assets/Activity/Activity_active.png';
import ActivityInactiveImage from '../assets/Activity/Activity_inactive.png';
import FavoritesActiveImage from '../assets/Favorites/Favorites_active.png';
import FavoritesInactiveImage from '../assets/Favorites/Favorites_inactive.png';

import Camera from '../assets/Camera/Camera.png';

import { Image, TouchableOpacity } from 'react-native';
import React from 'react';

export const BAR_IMAGES = {
  PhotosActiveImage,
  PhotosInactiveImage,
  ProfileActiveImage,
  ProfileInactiveImage,
  ActivityActiveImage,
  ActivityInactiveImage,
  FavoritesActiveImage,
  FavoritesInactiveImage,
  Camera
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

export const getBarButton = (source, onPress) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ width: 50, height: 35 }}>
      <Image source={source} style={{ width: '100%', height: '100%' }} />
    </TouchableOpacity>
  );
};
