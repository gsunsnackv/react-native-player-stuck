/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Video from 'react-native-video';


const videos = [
  "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "https://d301468hdcm00e.cloudfront.net/a4de002b375d79781a8d60f4fda38e6e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/459e06d07a0ea39ac87d9a10b7c357e4_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/5d1b000b0154f68c982de394cb32908a_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2226fa14a51982f411eb3f6e7707b092_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/9cc032b05e7368b18e72f0ebede3d163_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/5143b21e18c1db9b3ca01f2148312a4e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/254c978b2c06481a87849e89902a8bf3_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f1273873a1b2658bea0fa45569841d7e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/b59b6520b94ab25c33f3c81aa03b1a06_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/7feaf60b754476f18c62bb7b5d3e4f6f_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2a210b9b2bda8bb4224084625bada35e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/d387730b9c38efb727a6125d9f8a6e2e_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/068da8a77aff0a4d61e929bac08e01dc_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/2927fbcf59c7aa24bbc3465b7bc9a560_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/d34d3fc9e2635db655e8f75794f60282_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/453eb6e6d92541727b958ddb791a3bfe_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/27b092c69ee1668efd9a1867e5e0c7be_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/6409c5c9506b74f16deef81e32993cea_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/0c935335b6ddfbf8f1fa3abff69297c4_video-file.mp4",
  "https://d301468hdcm00e.cloudfront.net/f923370a50dcb58550e79d7808d07b13_video-file.mp4",
  ]

class HomeScreen extends React.Component {
  index = 0
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {index: this.index})
            this.index = this.index + 1
          }}
        />
      </View>
    );
  }
}

// Other code for HomeScreen here...

class DetailsScreen extends React.Component {
  render() {
    const index = this.props.navigation.getParam('index')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>{videos[index]}</Text>
        <Video source={{uri: videos[index]}}
              style={{width:300, height:300}} />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
})

const RouteConfigs = {
  Home: {
    screen: HomeStack,
  },
}

const _tabBarOnPress = async ({navigation, defaultHandler}) => {}

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#23afff',
    inactiveTintColor: '#e1dbdf',
    showLabel: true,
    style: {
      backgroundColor: '#ffffff'
    }
  },
  navigationOptions: {
    tabBarOnPress: _tabBarOnPress
  },
}

const BottomTabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig)

const AppNavigator = createStackNavigator({
  Home: {
    screen: BottomTabNavigator
  },
  Details: {
    screen: DetailsScreen,
  },
},{
  initialRouteName: "Home"
})

export default createAppContainer(AppNavigator);
