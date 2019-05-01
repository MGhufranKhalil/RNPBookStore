import React, { Component } from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native';

//Navigation Imports
import { createStackNavigator, createAppContainer,  } from 'react-navigation';

import firebase from "firebase";

// import { TextInput } from "react-native";
import { CustomButton, Card, CardSection, Input, Spinner } from "./components/common";

//Introduction Screen of the Library App
class Introduction   extends Component {
  static navigationOptions = {
    title: 'Welcome Screen'   //it shows 'Welcome Screen' on the top
  }
  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView> 
      <Image
          style={{width: 200, height: 300}}
          source={{uri: 'https://requestreduce.org/images/clip-art-for-free-6.png'}}
        />
      
        
        <Button
          title="Enter as Admin"
          onPress={() => this.props.navigation.navigate('AdminLoginScreen', {
            itemId: 12,
            otherMsg: "Sent to Login Form"
          })}
        />
      
      <Button
          title="Enter as User"
          onPress={() => this.props.navigation.navigate('UserLoginScreen', {
            itemId: 12,
            otherMsg: "Sent to Login Form"
          })}
        />

      </ScrollView> 
      </View>

      

    );
  }
}


//Login form for Admin
class AdminLoginForm extends Component {
  // To handle the text input we need the state in the action
  state = { email: "", password: "", error: "", loading: false };
  
  //Helper method onButtonPress() to Login the user
  onButtonPress() {
  const { email, password } = this.state;
  //Firebase mathod to login using userid & password
  
  //Clear out the Error Message on Every Login Attempt
  this.setState({ error: "", loading: true });
  

  firebase
  .auth()     //Get the auth service for the default app
  .signInWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  .catch(() => {
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  .catch(this.onLoginFailed.bind(this));
  // .catch(() => {
  // this.setState({ error: "Authentication Failed" });
  // });
  //Creates a new user account associated with the specified email address and password. On successful creation of the user account, this user will also be signed in to your application.
  });
  }
  
  onLoginFailed() {
  this.setState({
  error: "Authentication Failed",
  loading: false
  });
  }
  onLoginSuccess() {
  this.setState({
  email: "",
  password: "",
  loading: false,
  error: ""
  });
  }
  
  renderButton() {
  if (this.state.loading) {
  return <Spinner size="small" />;
  }
  return (
  <CustomButton onPress={this.onButtonPress.bind(this)}>
  Sign In
  </CustomButton>
  );
  }
  
  render() {
  return (
  <Card>
  {/* For User ID */}
  <CardSection>
  {/* When the text input is not treated as a custom component 
  <TextInput
  value={this.state.text}
  onChangeText={text => this.setState({ text: text })}
  style={{ height: 20, width: 100 }}
  /> */}
  <Input
  autoCorrect
  placeholder="user@email.com"
  label="Email: "
  value={this.state.email}
  onChangeText={email => this.setState({ email })}
  />
  </CardSection>
  {/* For Password */}
  <CardSection>
  <Input
  secureTextEntry
  placeholder="password"
  label="Password"
  value={this.state.password}
  onChangeText={password => this.setState({ password })}
  />
  </CardSection>
  {/* For the Error Message */}
  <Text style={styles.errorTextStyle}>{this.state.error}</Text>
  {/* For the Login Button */}
  <CardSection>
  {this.renderButton()}
  {/* Moved to renderButton() <CustomButton onPress={this.onButtonPress.bind(this)}>
  Sign In
  </CustomButton> */}
  </CardSection>
  </Card>
  );
  }
  }


//Login form for User
class UserLoginForm extends Component {
  // To handle the text input we need the state in the action
  state = { email: "", password: "", error: "", loading: false };
  
  //Helper method onButtonPress() to Login the user
  onButtonPress() {
  const { email, password } = this.state;
  //Firebase mathod to login using userid & password
  
  //Clear out the Error Message on Every Login Attempt
  this.setState({ error: "", loading: true });
  

  firebase
  .auth()     //Get the auth service for the default app
  .signInWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  .catch(() => {
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  .catch(this.onLoginFailed.bind(this));
  // .catch(() => {
  // this.setState({ error: "Authentication Failed" });
  // });
  //Creates a new user account associated with the specified email address and password. On successful creation of the user account, this user will also be signed in to your application.
  });
  }
  
  onLoginFailed() {
  this.setState({
  error: "Authentication Failed",
  loading: false
  });
  }
  onLoginSuccess() {
  this.setState({
  email: "",
  password: "",
  loading: false,
  error: ""
  });
  }
  
  renderButton() {
  if (this.state.loading) {
  return <Spinner size="small" />;
  }
  return (
  <CustomButton onPress={this.onButtonPress.bind(this)}>
  Sign In
  </CustomButton>
  );
  }
  
  render() {
  return (
  <Card>
  {/* For User ID */}
  <CardSection>
  {/* When the text input is not treated as a custom component 
  <TextInput
  value={this.state.text}
  onChangeText={text => this.setState({ text: text })}
  style={{ height: 20, width: 100 }}
  /> */}
  <Input
  autoCorrect
  placeholder="user@email.com"
  label="Email: "
  value={this.state.email}
  onChangeText={email => this.setState({ email })}
  />
  </CardSection>
  {/* For Password */}
  <CardSection>
  <Input
  secureTextEntry
  placeholder="password"
  label="Password"
  value={this.state.password}
  onChangeText={password => this.setState({ password })}
  />
  </CardSection>
  {/* For the Error Message */}
  <Text style={styles.errorTextStyle}>{this.state.error}</Text>
  {/* For the Login Button */}
  <CardSection>
  {this.renderButton()}
  {/* Moved to renderButton() <CustomButton onPress={this.onButtonPress.bind(this)}>
  Sign In
  </CustomButton> */}
  </CardSection>
  </Card>
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



//Creation of the Stack Navigator
const AppNavigator = createStackNavigator({
  Home: Introduction,
  Education: EducationScreen,
  AdminLoginScreen: AdminLoginForm,
  UserLoginScreen: UserLoginForm
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