import React, {Component} from 'react';
import logo from '../img/pipi.jpg';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import data from '../data/ProfileInformation';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      inputName: '',
      inputPhone: '',
      inputPass: '',
    };
  }

  postUser() {
    let inputEmail = this.state.inputEmail.trim();
    let inputName = this.state.inputName.trim();
    let inputPhone = this.state.inputPhone.trim();
    let inputPass = this.state.inputPass.trim();
    if (!inputEmail || !inputName || !inputPhone || !inputPass) {
      alert('You must fill all the field!');
    }
    const newUser = {
      id: (data.length + 1).toString(),
      email: inputEmail,
      name: inputName,
      phone: inputPhone,
      password: inputPass,
      directory: [],
    };
    console.log('-----------------');
    data.push(newUser);
    //console.log(data);
    this.props.navigation.navigate('Profile', newUser);
    return;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.imgContainer} source={logo} />
          <View style={styles.header}>
            <Text style={styles.title}>WELCOME !</Text>
            <Text
              style={{
                alignSelf: 'flex-start',
                paddingHorizontal: 25,
                paddingVertical: 5,
              }}>
              Sign up to start your journey
            </Text>
          </View>
          {/* Võ Đình Hoàng Long 1811505310323 */}
          <View style={styles.content}>
            <Text style={styles.labelTiltle}>Email </Text>
            <TextInput
              style={styles.inputPlace}
              placeholder="user@mail.com"
              value={this.state.inputEmail}
              onChangeText={(text) => this.setState({inputEmail: text})}
            />
            <Text style={styles.labelTiltle}>Name </Text>
            <TextInput
              style={styles.inputPlace}
              placeholder="Accel"
              value={this.state.inputName}
              onChangeText={(text) => this.setState({inputName: text})}
            />
            <Text style={styles.labelTiltle}>Phone </Text>
            <TextInput
              style={styles.inputPlace}
              placeholder="0905035581"
              value={this.state.inputPhone}
              onChangeText={(text) => this.setState({inputPhone: text})}
            />
            <Text style={styles.labelTiltle}>Password </Text>
            <TextInput
              style={styles.inputPlace}
              secureTextEntry={true}
              placeholder="Password"
              value={this.state.inputPass}
              onChangeText={(text) => this.setState({inputPass: text})}
            />
            <View style={styles.submitButton}>
              <Button
                title="SUBMIT"
                color="#1D3557"
                onPress={() => this.postUser()}
              />
            </View>
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontWeight: 'bold'}}>
                Already have an account? Login here.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    margin: 5,
    marginBottom: 10,
    width: 100,
    height: 100,
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
