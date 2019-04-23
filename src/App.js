import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet} from 'react-native';

//Navigation Imports
import { createStackNavigator, createAppContainer,  } from 'react-navigation';


//Introction Screen of the Library App
class Introduction   extends Component {
  static navigationOptions = {
    title: 'Welcome Screen'   //it shows 'Welcome Screen' on the top
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      
      <Image
          style={{width: 200, height: 300}}
          source={{uri: 'https://requestreduce.org/images/clip-art-for-free-6.png'}}
        />

        <Text style={styles.welcome}>Welcome to Book Store</Text>
      
      
        <Button
          title="Click to Enter"
          onPress={() => this.props.navigation.navigate('Education', {
            itemId: 12,
            otherMsg: "Sent to Education"
          })}
        />
      </View>

      

    );
  }
}


//Education Screen View Settings
class EducationScreen extends Component {
  static navigationOptions = {
    title: 'Education Screen'
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherMsg = navigation.getParam('otherMsg', 'This is the default Msg');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hard coding</Text>
        <Text>Hard coding</Text>
        <Text>Hard coding</Text>
        
        

        <Button
          title="Next"
          onPress={() => this.props.navigation.navigate('Experience')}
        />
        
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}





//Experience Screen View Settings
class ExperienceScreen extends Component {
  static navigationOptions = {
    title: 'Experience Screen'
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherMsg = navigation.getParam('otherMsg', 'This is the default Msg');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hard coding</Text>
        
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />

        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

      </View>
    );
  }
}





//Creation of the Stack Navigator
const AppNavigator = createStackNavigator({
  Home: Introduction,
  Education: EducationScreen,
  Experience: ExperienceScreen
},
  {
    initialRouteName: "Home"
  });

//Exporting while creating the App Container
// export default createAppContainer(AppNavigator);
const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  render() {
    return <AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});