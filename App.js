/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image, TextInput, TouchableOpacity, Pressable ,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from "react-native-modal";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = (props) => {
  const { chatTextWrapper, chatActionWrapper, replyActionWrapper,modalStyle,dotsStyle } = styles
  const isDarkMode = useColorScheme() === 'dark';
  const [showBackGround, setShowBackGround] = useState(false)
  const [messageText, setMessageText] = useState(false)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const chatData = [
    { id: 1, text: 'Go to back' },
    { id: 2, text: 'please help me i need new job' },
    { id: 3, text: 'go to park and wait for me' },
    { id: 4, text: 'Hi, how are you?' },
    { id: 5, text: 'Can you help me?' },
    { id: 6, text: 'Did you see my work' },
    { id: 7, text: 'Okay i agree' },
    { id: 8, text: 'leave me alone' },
    { id: 9, text: 'go to park and wait for me' },
    { id: 10, text: 'Hi, how are you?' },
    { id: 11, text: 'Can you help me?' },
    { id: 12, text: 'Did you see my work' },
    { id: 13, text: 'Okay i agree' },
    { id: 15, text: 'leave me alone' }
  ]
  const deviceWidth = Dimensions.get("window").width;
  const deviceHeight = Dimensions.get("window").height
  const emojiData = [
    { image: require('./assets/images/emj.png') },
    { image: require('./assets/images/emj.png') },
    { image: require('./assets/images/emj.png') },
    { image: require('./assets/images/emj.png') },
    { image: require('./assets/images/emj.png') },


  ]
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {
          chatData.map((item, key) => (
            <Pressable 
            activeOpacity={0.0}
            underlayColor="white"
             onLongPress={() => {
              setMessageText(item.text)
              setShowBackGround(!showBackGround)
            }} key={key} style={{ alignItems: 'baseline', alignItems: 'flex-end' }}>
              <View style={chatTextWrapper}>
                <Text style={{ color: 'white', fontSize: 20, }}>{item.text}</Text>
              </View>
            </Pressable >
          ))
        }
        {/* </View> */}
      </ScrollView>
      <Modal
        style={{ margin: 0}}
        animationIn="slideInUp"
        onBackButtonPress={() => { setShowBackGround(!showBackGround) }}
        onBackdropPress={() => { setShowBackGround(!showBackGround) }}
        animationInTiming={300}
        animationOutTiming={100}
        transparent={true}
        visible={showBackGround}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        onRequestClose={() => {
          setShowBackGround(!showBackGround)
        }}
      >

        <TouchableOpacity onPress={() => setShowBackGround(!showBackGround)} 
        style={modalStyle}>
          <View style={{
            backgroundColor: '#a9a9a9',
            width: '80%',
            borderRadius: 30,
            paddingVertical: 15,
            marginTop: 50

          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              paddingRight: 10,
            }}>
              <TouchableOpacity style={{
                width: '15%',
                height: 30
              }}>
                <Image source={require('./assets/images/emj.png')} style={{ height: '100%', width: '80%' }} />

              </TouchableOpacity>
              {
                emojiData.map((item, key) => (
                  <TouchableOpacity style={{
                    width: 40,
                    height: 30
                  }}>
                    <Image source={item.image} style={{ height: '100%', width: '80%' }} />
                  </TouchableOpacity>
                ))
              }
              {/* <Image source={require('./assets/images/emj.png')} style={[img]}/> */}
              <TouchableOpacity style={dotsStyle}>
                <Icon name="dots-three-horizontal" type="entypo" style={{ paddingHorizontal: 5, }} size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{ alignItems: 'baseline', alignItems: 'flex-end' }}>
            <View style={chatTextWrapper}>
              <Text style={{ color: 'white', fontSize: 20, }}>{messageText && messageText}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={
            replyActionWrapper
          }>
            <View>
              <Text style={{ color: 'white', fontSize: 20 }}>Reply</Text>
            </View>
            <View>
              <Icon name="reply" type="entypo" style={{ paddingHorizontal: 5}} size={25} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={
            chatActionWrapper
          }>
            <View>
              <Text style={{ color: 'white', fontSize: 20 }}>Forward</Text>
            </View>
            <View>
              <Icon name="forward" type="entypo" style={{ paddingHorizontal: 5 }} size={25} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={chatActionWrapper}>
            <View>
              <Text style={{ color: 'white', fontSize: 20 }}>Copy</Text>
            </View>
            <View>
              <Icon name="copy" type="entypo" style={{ paddingHorizontal: 5 }} size={25} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={chatActionWrapper}>
            <View>
              <Text style={{ color: 'white', fontSize: 20 }}>Select</Text>
            </View>
            <View>
              <Icon name="check-circle-o" type="font-awesome" style={{ paddingHorizontal: 5 }} size={25} color="white" />
              {/* <Entypo name="copy" style={{ paddingHorizontal: 5, }} size={25} color="white" /> */}
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={chatActionWrapper}>
            <View>
              <Text style={{ color: 'white', fontSize: 20 }}>Info</Text>
            </View>
            <View>
              <Icon name="ios-information-circle-outline" type="ionicon" style={{ paddingHorizontal: 5 }} size={25} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={chatActionWrapper}>
            <View>
              <Text style={{ color: 'red', fontSize: 20 }}>Delete</Text>
            </View>
            <View>
              <Icon name="delete" type="antdesign" style={{ paddingHorizontal: 5 }} size={25} color="white" />

              {/* <antdesign name="delete" style={{ paddingHorizontal: 5, }} size={25} color="red" /> */}
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  dotsStyle:{
    backgroundColor: 'gray',
     height: 30, 
     marginLeft: 5,
     justifyContent: 'center', 
     borderRadius: 20
  },
  modalStyle:{
    flex: 1, 
    justifyContent: 'flex-start', 
    backgroundColor: '#383838', 
    alignItems: 'flex-end',
    paddingRight:10,
  },
  chatTextWrapper: {
    backgroundColor: '#0073cf',
    alignItems: 'flex-end',
    // flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight: 10
  },
  replyActionWrapper: {
    backgroundColor: '#28282B',
    marginTop: 10,
    width: '70%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chatActionWrapper: {
    backgroundColor: '#28282B',
    marginTop: 3,
    width: '70%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default App;
