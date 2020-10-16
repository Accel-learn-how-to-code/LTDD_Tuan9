import React, {Component} from 'react';
import logo from '../img/pipi.jpg';
import {
  SafeAreaView,
  StyleSheet,
  //ScrollView,
  View,
  Text,
  // StatusBar,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import data from '../data/ProfileInformation';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      inputPass: '',
    };
  }

  checkLogin() {
    let inputEmail = this.state.inputEmail.trim();
    let inputPass = this.state.inputPass.trim();
    let isUser = data.find((x) => x.email === inputEmail);
    if (isUser) {
      if (isUser.password === inputPass) {
        console.log('Right pass');
        this.props.navigation.navigate('Profile', isUser);
        return;
      }
      alert('Wrong Password');
      return;
    }
    alert('Wrong email');
    return;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.imgContainer} source={logo} />
        <View style={styles.header}>
          <Text style={styles.title}>HELLO THERE,</Text>
          <Text style={styles.title}>WELCOME BACK !</Text>
          <Text
            style={{
              alignSelf: 'flex-start',
              paddingHorizontal: 25,
              paddingBottom: 25,
              marginBottom: 10,
              color: '#1D3557',
            }}>
            Log in to continue
          </Text>
        </View>
        {/* Võ Đình Hoàng Long 1811505310323 */}
        <View style={styles.content}>
          <Text style={styles.labelTiltle}>Email: </Text>
          <TextInput
            style={styles.inputPlace}
            placeholder="user@mail.com"
            value={this.state.inputEmail}
            onChangeText={(text) => this.setState({inputEmail: text})}
          />
          <Text style={styles.labelTiltle}>Password: </Text>
          <TextInput
            style={styles.inputPlace}
            secureTextEntry={true}
            placeholder="Password"
            value={this.state.inputPass}
            onChangeText={(text) => this.setState({inputPass: text})}
          />
          <TouchableOpacity style={styles.forgot}>
            <Text style={{fontWeight: 'bold', color: '#1D3557'}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <View style={styles.submitButton}>
            <Button
              title="GO"
              color="#1D3557"
              onPress={() => this.checkLogin()}
            />
          </View>
          <TouchableOpacity
            style={styles.signUp}
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={{fontWeight: 'bold', color: '#1D3557'}}>
              Don't have a account? Sign up now!
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F1FAEE',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1D3557',
  },
  content: {
    flex: 4,
    paddingHorizontal: 20,
  },
  inputPlace: {
    height: 40,
    width: '100%',
    borderColor: '#1D3557',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  labelTiltle: {
    paddingHorizontal: 14,
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D3557',
  },
  submitButton: {
    marginVertical: 15,
  },
  imgContainer: {
    margin: 10,
    marginBottom: 40,
    width: 130,
    height: 130,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#1D3557',
    borderRadius: 20,
  },
  forgot: {
    marginTop: 15,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
  },
  signUp: {
    alignSelf: 'center',
  },
});
