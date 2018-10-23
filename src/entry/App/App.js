import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Photos from '../../views/Photos';
import Profile from '../../views/Profile';
import { BAR_IMAGES, getBarIcon } from '../../constants/barImages';
import * as Routes from '../../constants/routes';

const headerStyle = {
  backgroundColor: '#f02861'
};

const headerTitleStyle = {
  color: '#ffffff',
  fontSize: 16
};

const PhotosStack = createStackNavigator(
  {
    Photos
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: Routes.PHOTOS,
      headerStyle,
      headerTitleStyle
    })
  }
);

PhotosStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: () =>
      getBarIcon(
        navigation.isFocused(),
        BAR_IMAGES.PhotosActiveImage,
        BAR_IMAGES.PhotosInactiveImage
      )
  };
};

const ProfileStack = createStackNavigator(
  {
    Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: Routes.PROFILE,
      headerStyle,
      headerTitleStyle
    })
  }
);

ProfileStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: () =>
      getBarIcon(
        navigation.isFocused(),
        BAR_IMAGES.ProfileActiveImage,
        BAR_IMAGES.ProfileInactiveImage
      )
  };
};

const createNavigator = () =>
  createBottomTabNavigator(
    {
      PhotosStack,
      ProfileStack
    },
    {
      navigationOptions: () => ({
        tabBarOptions: {
          showLabel: false,
          style: {
            height: 42
          }
        }
      })
    }
  );

export default class App extends Component {
  constructor(props) {
    super(props);

    this.Navigator = createNavigator();
  }

  render() {
    const { Navigator } = this;

    return <Navigator />;
  }
}
