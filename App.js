import React, {Component} from 'react';
import {Text, TextInput, View, Image} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Hello</Text>
      <Home />
      <Text>World</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxRed />
      <Profile />
    </View>
  );
};

const Home = () => {
  return <Text>Home in the Hills</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/people'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxRed extends Component {
  render() {
    return <Text>Ini component class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/nature'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'magenta', fontSize: 20}}>
          Ini adalah keindahan alam
        </Text>
      </View>
    );
  }
}

export default App;
