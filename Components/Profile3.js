import * as React from 'react';
import logo from '../img/pipi.jpg';
import icon from '../img/gear.png';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import ProfileInformation from '../data/ProfileInformation';

function ItemProfile({item}) {
  return (
    <View style={styles.itemHolder}>
      <View style={styles.square}></View>
      <View>
        <Text style={styles.labelTiltle}>{item.name}</Text>
        <Text style={styles.textContent}>{item.phone}</Text>
      </View>
    </View>
  );
}

export default function Profile3({route, navigation}) {
  const infor = ProfileInformation;
  const {email, name, phone, directory} = route.params;
  console.log('directory');
  console.log(directory);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopContent}>
          <View style={styles.headerTopLabel}>
            <TouchableOpacity onPress={() => navigation.navigate('List', directory)}>
              <Text style={styles.smallTopLabel}>Settings</Text>
            </TouchableOpacity>
            <Text style={styles.largeTopLabel}>Profile</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.smallTopLabel}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imgContainerBorder}>
            <Image style={styles.imgContainer} source={logo} />
          </View>
        </View>
        <View style={styles.titleHolder}>
          <Text style={styles.title}>{name}</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{email}</Text>
        </View>
        <View style={styles.headerBottomContent}>
          <View style={styles.headerContent1}>
            <Text style={styles.title2}>Danh bạ</Text>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.title3}>{phone}</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        {directory.map((x, index) => {
          return <ItemProfile key={index} item={x} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTopContent: {
    justifyContent: 'flex-start',
    backgroundColor: '#5fb075',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTopLabel: {
    flexDirection: 'row',
    width: 450,
    height: 50,
    marginVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  smallTopLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  largeTopLabel: {
    color: '#fff',
    fontSize: 32,
    paddingRight: 16,
    fontWeight: 'bold',
  },
  headerBottomContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#eee',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 3,
  },
  headerContent: {
    alignItems: 'center',
    paddingVertical: 10,
    width: '50%',
  },
  headerContent1: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '50%',
    paddingVertical: 10,
    borderRadius: 20,
  },
  title: {
    paddingHorizontal: 20,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleHolder: {
    marginTop: 25,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    paddingHorizontal: 20,
    color: '#5fb075',
    fontWeight: 'bold',
    fontSize: 20,
  },
  title3: {
    paddingHorizontal: 20,
    color: '#ddd',
    fontWeight: 'bold',
    fontSize: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    padding: 10,
    paddingBottom: 20,
  },
  imgContainerBorder: {
    width: 170,
    height: 170,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -50,
  },
  imgContainer: {
    width: 150,
    height: 150,
    borderWidth: 4,
    borderColor: '#fff',
    borderRadius: 100,
  },
  iconContainer: {
    marginRight: -70,
    marginTop: 10,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
  },
  blockInfor: {
    width: '45%',
    height: 90,
    backgroundColor: '#A8DADC',
    marginHorizontal: 5,
    marginVertical: 5,
    paddingTop: 15,
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  labelTiltle: {
    paddingHorizontal: 14,
    marginVertical: 5,
    fontSize: 20,
    color: '#1D3557',
    fontWeight: 'bold',
  },
  textContent: {
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#1D3557',
  },
  square: {
    height: 50,
    width: 50,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginTop: 5,
  },
  itemHolder: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomColor: '#ddd',
  },
});
