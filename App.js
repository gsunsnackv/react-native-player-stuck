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
import Video, { TextTrackType } from 'react-native-video'


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

  const captions = [
    "https://d301468hdcm00e.cloudfront.net/8662c629e12920ee89437c96dcbd0d58_c42daf2d9d508d56ba5a2b14eb347a4b_TAnb7QZ2BN.vtt",
    "https://d301468hdcm00e.cloudfront.net/eeb223f0bf040eda1c14ec27ad69bbb2_DibrCBcgDG.vtt",
    "https://d301468hdcm00e.cloudfront.net/8d7f9e756e1ab6ba99d0676fb95ba48a_2xiQ4AOskZ.vtt",
    "https://d301468hdcm00e.cloudfront.net/98a5f01ab5be488138a8bed0463f06c4_9RQYEgdCRT.vtt",
    "https://d301468hdcm00e.cloudfront.net/05e2e28c1a0b9ce4a71766642b3a96d1_CRS7D9iNrZ.vtt",
    "https://d301468hdcm00e.cloudfront.net/9904cc90cd7fff166b7c5953d0428b76_3UrvzhAHhd.vtt",
    "https://d301468hdcm00e.cloudfront.net/b18db2683ad62781f0fa10cfd1e3bd07_cleESbkH05.vtt",
    "https://d301468hdcm00e.cloudfront.net/07d2af85e8ac87610ebee85f55f1bd36_yycNcFGToZ.vtt",
    "https://d301468hdcm00e.cloudfront.net/02d9b61e9c9349ab4f8aed4c482a60e6_PpJuHghbQo.vtt",
    "https://d301468hdcm00e.cloudfront.net/66888cffa777355a45faf17d32023b26_QKybxe3qhc.vtt",
    "https://d301468hdcm00e.cloudfront.net/bb753269074977b76b27f5bc5bc66fbe_eh3oSjlFhM.vtt",
    "https://d301468hdcm00e.cloudfront.net/836f694380c825bd57fba5fe366d4f04_rwEPfNhzuk.vtt",
    "https://d301468hdcm00e.cloudfront.net/b1eec6622150b814f036d7fd7e2bc49b_HQOYVUpC76.vtt",
    "https://d301468hdcm00e.cloudfront.net/a83dee3b2bde64eaf1ffdf42dda812ca_FSZeejT9PF.vtt",
    "https://d301468hdcm00e.cloudfront.net/1a8b0a224be8c35444e0117e6885b578_WFHp8aJQ13.vtt",
    "https://d301468hdcm00e.cloudfront.net/7ea188c337d23952fee588a90cb5176c_2SjlZEsztY.vtt",
    "https://d301468hdcm00e.cloudfront.net/e49f6041eeb3163da3ea5cd0afd85bd4_e042EjKLvx.vtt",
    "https://d301468hdcm00e.cloudfront.net/70c746e8c98c9b22071c90f8885dec81_KmddLiS8eN.vtt",
    "https://d301468hdcm00e.cloudfront.net/f3e6fb399f3ea9c2dccfa2d409da083f_gQCdqMCDAt.vtt",
    "https://d301468hdcm00e.cloudfront.net/5a0ec9a9d804b34c0f0ef77b0be51398_DZoPyZ4oHK.vtt",
    "https://d301468hdcm00e.cloudfront.net/76c577829ecb0b6fc10330282c75680b_us8tgGzfuq.vtt",
    "https://d301468hdcm00e.cloudfront.net/86832da097999fee69c98193aabc03ed_LnPSxzQ69O.vtt",
    "https://d301468hdcm00e.cloudfront.net/d7a3ef71cf6eb0738677782b091fe762_WUVijhdpzg.vtt",
    "https://d301468hdcm00e.cloudfront.net/ba2d304e0349cd4487afcee04c9406df_27F6glNW4P.vtt",
    "https://d301468hdcm00e.cloudfront.net/7625bbb64590f15413ed60291c568770_weQXD7I77h.vtt",
    "https://d301468hdcm00e.cloudfront.net/eb884034a3ce17fab26ed80bd632c000_WRD6nA7VFu.vtt",
    "https://d301468hdcm00e.cloudfront.net/152c9e739c36c0bc6e5f80047525f7cf_54w57o3xxH.vtt",
    "https://d301468hdcm00e.cloudfront.net/553f5f407818ecd87fd109957d823f70_G2dF40DP0f.vtt",
    "https://d301468hdcm00e.cloudfront.net/a4ad2a0a0a63a337e467878af1df4dcc_eRmMYykoXZ.vtt",
    "https://d301468hdcm00e.cloudfront.net/170d566ff9011baa67414f448fee8817_cuNDzGWCJT.vtt",
    "https://d301468hdcm00e.cloudfront.net/d581177896bbe62d1e4db5d4a014efc4_GE1POxgPcQ.vtt",
    "https://d301468hdcm00e.cloudfront.net/7d4bbc4ae24a5daeee4564581139c4a7_R-2PsI7NEqM.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/98b6646bd4719d8bce0a08e1bbac142f_Cfg11qQwPzQ.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/b011b6a6bb9d93dd15b560dfa3c06e34_ykgc4DcuUT.vtt",
    "https://d301468hdcm00e.cloudfront.net/b0a8dc914031ace0e0d344dc6625786b_QPgZ46Bcry.vtt",
    "https://d301468hdcm00e.cloudfront.net/68a0ffa132088266930f103baab0f6da_r1lpI4asPQ.vtt",
    "https://d301468hdcm00e.cloudfront.net/2a20ebfddecfbfb916c5806ba1c9cf90_RsHsCHteMC.vtt",
    "https://d301468hdcm00e.cloudfront.net/6c9e84f174f98d40479d97098c2bb0c7_LGZmyGkcmx.vtt",
    "https://d301468hdcm00e.cloudfront.net/560f1227cd1e5e66c17a9c698da85519_6fHiXBjTiT.vtt",
    "https://d301468hdcm00e.cloudfront.net/4dd2270b0dd6b9842212e191f233de57_GAXYZcdicH.vtt",
    "https://d301468hdcm00e.cloudfront.net/649e4bcc77aae0eb8c4c883453ff8ed6_QuJYlAEGDd.vtt",
    "https://d301468hdcm00e.cloudfront.net/7557fa8266faaf45e1affb04ba3b0a82_OiqU6LVoFT.vtt",
    "https://d301468hdcm00e.cloudfront.net/a0f41d0252f00b37bde07a932faf730d_lYAWLL0P8W.vtt",
    "https://d301468hdcm00e.cloudfront.net/33c449f608e4e82e2f9f22f4c6a66833_ex4h9EjM6W.vtt",
    "https://d301468hdcm00e.cloudfront.net/e1a63b342eb0f08e73d01c9b0bddc6e0_EyQV6Mz529.vtt",
    "https://d301468hdcm00e.cloudfront.net/e1a17ff2371e9050050fa228fef36343_iS1TgZyqFs.vtt",
    "https://d301468hdcm00e.cloudfront.net/9272dbb146b839de262267e4d0711f66_2nUJTMpGMQ.vtt",
    "https://d301468hdcm00e.cloudfront.net/5f1e3773ddf9502f9bcaaf2468425868_kiZUp8f4yP.vtt",
    "https://d301468hdcm00e.cloudfront.net/a6cc09e8f3baba7f2fe821ce03932f7a_cxE8vUpmQk.vtt",
    "https://d301468hdcm00e.cloudfront.net/d8ecf049964c3ff643c5d917c3895ae2_Clw2wJxbZK.vtt",
    "https://d301468hdcm00e.cloudfront.net/591a19a612f026585430759cb1bdc155_DY4qUONxi4.vtt",
    "https://d301468hdcm00e.cloudfront.net/066307b7490737c4f0d3619b78ddd4c0_wAzFGW0rv6.vtt",
    "https://d301468hdcm00e.cloudfront.net/8d4392b1dc500fac606e1d065f033836_QR1FEjXHB6.vtt",
    "https://d301468hdcm00e.cloudfront.net/9b96bc13eabf3cb0b013a60ef031d6d7_LjDEuL8j5l.vtt",
    "https://d301468hdcm00e.cloudfront.net/571bc0d8f497fd2c181f11b2f6eee153_igYPFgEMqeM.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/35d9e82b19dc1df026d9b4470bb60375_zBr9YiSwdzM.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/e1e6bf2ca4bb50a7477f67063a48d78b_VRyewievj-c.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/9a063ee3605a8bb2d9f2998be15a238c_Ph3d-ByEA7Q.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/80af6701b8d46cf6bf140dd473ffab68_rVzDP8SMhPo.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/2d5343e1d22b3cb869efe3495f71f08f_ft3vTaYbkdE.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/0caf7fc6c97a1e7aaf805bee04c0faae_LKjaBPVtvms.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/9d0147ede24fff16037b4294ffad3a66_j3LXPmiEB-w.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/cf5a3c00ddcc2b05da1900cdc719e4d5_p-naWB6pxhc.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/89d77f3c85736574ed7555c8c3d5de92_U2Agx3txXDM.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/fc8fc000a533065f492d040b7825e962_qtrv2vgXYBU.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/1df8e73e9b147e3cc67cac4746d6e224_SSoV5gDGeN4.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/10155cf2c5f2c260463585332a324806_8foJxXtF-z4.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/f40d1958ec3050b55bbae2496bd8f503_o2Rho_GMclQ.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/81bb5035becd10891d27a8e4da099548_lYTeMIWByBo.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/9080a0c27b83e03104fee57bc425483d_iHLKc_zM4-I.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/b61ba7cb790d83dccb29cb7ad15f6465_Hn-U8QOYgpc.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/dcbae6d53f605831ba2ddb60b90c8f4f_jCpIKLRkdLc.en.vtt",
    "https://d301468hdcm00e.cloudfront.net/3d4f06606893f2e6aefef0f009187010_bwWtPsug4Ls.en.vtt",
    ]

class HomeScreen extends React.Component {
  index = 0
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title= "Watch a Video "
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
  constructor(props){
    super(props)
    this.state = {
      paused: false
    }
  }
  render() {
    const index = this.props.navigation.getParam('index')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Text>{videos[index]}</Text>
        <Video source={{uri: videos[index]}}
              style={{width:300, height:300}}
              textTracks={[
                {
                  title: 'English CC',
                  language: 'en',
                  type: TextTrackType.VTT,
                  uri: captions[index],
                },
              ]}
              selectedTextTrack={{type: 'title', value: 'English CC'}}
              paused={this.state.paused}
               />
          <Button
          title="Play or Pause"
          onPress={() => {
            this.setState({ paused: !this.state.paused})
          }}
        />
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
