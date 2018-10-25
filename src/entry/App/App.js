import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Photos from '../../views/Photos';
import Profile from '../../views/Profile';
import Activity from '../../views/Activity';
import {
  BAR_IMAGES,
  getBarButton,
  getBarIcon
} from '../../constants/barImages';
import * as Routes from '../../constants/routes';
import Camera from '../../views/Camera';
import ImagePicker from 'react-native-image-picker';

export const TAB_NAVIGATOR_HEIGHT = 42;

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
    navigationOptions: () => ({
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

const ActivityStack = createStackNavigator(
  {
    Activity
  },
  {
    navigationOptions: () => ({
      title: Routes.ACTIVITY,
      headerStyle,
      headerTitleStyle
    })
  }
);

ActivityStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: () =>
      getBarIcon(
        navigation.isFocused(),
        BAR_IMAGES.ActivityActiveImage,
        BAR_IMAGES.ActivityInactiveImage
      )
  };
};

const CameraStack = createStackNavigator(
  {
    Camera
  },
  {
    initialRouteName: Routes.CAMERA,
    mode: 'modal',
    headerMode: 'none'
  }
);

CameraStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: () =>
      getBarButton(BAR_IMAGES.Camera, () => {
        const options = {};

        ImagePicker.showImagePicker(options, response => {
          if (!response.didCancel && !response.error) {
            navigation.navigate(Routes.CAMERA, {
              uri: response.uri
            });
          }
        });
      })
  };
};

const ProfileStack = createStackNavigator({
  Profile
});

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
      ActivityStack,
      CameraStack,
      ProfileStack
    },
    {
      initialRouteName: Routes.ACTIVITY_STACK,
      navigationOptions: () => ({
        tabBarOptions: {
          showLabel: false,
          style: {
            height: TAB_NAVIGATOR_HEIGHT
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
