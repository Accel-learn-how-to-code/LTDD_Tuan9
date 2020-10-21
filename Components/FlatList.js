import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  TouchableHighlight,
} from 'react-native';
import AddItemModal from './AddItemModal';
import EditItemModal from './EditItemModal';
import FlatListItem from './FlatListItem';
import data from '../data/ProfileInformation';

export default class FlatListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyChanged: null,
    };
  }

  refreshScreen(keyChanged) {
    this.setState({keyChanged: keyChanged});
    this.flatList.scrollToEnd();
  }

  refreshItem(keyChanged) {
    this.setState({keyChanged: keyChanged});
  }

  _onPressAdd({user}) {
    this.AddItemModal.showModal({user});
  }

  onPressRemove({user}) {
    const index = data.findIndex((value) => value === user);
    console.log(data[index].directory);
    data[index].directory = [];
    this.refreshItem(index);
  }

  render() {
    //show Directory
    let {user, userIndex} = this.props.route.params;
    let itemData = user.directory;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight
            style={styles.removeHolder}
            onPress={() => this.onPressRemove({user})}>
            <Text style={styles.removeTilte}>Remove All</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.iconHolder}
            onPress={() => this._onPressAdd({user})}>
            <Image style={styles.icon} source={require('../img/plus.png')} />
          </TouchableHighlight>
        </View>

        <FlatList
          //tạo ref để truy cập function trong component con
          ref={(value) => {
            this.flatList = value;
          }}
          data={itemData}
          renderItem={({item, index}) => {
            return (
              <FlatListItem
                item={item}
                userIndex={userIndex}
                index={index}
                parentFlatList={this}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />

        <AddItemModal
          //tạo ref để truy cập function trong component con
          ref={(value) => {
            this.AddItemModal = value;
          }}
          parentFlatList={this}
        />

        <EditItemModal
          //tạo ref để truy cập function trong component con
          ref={(value) => {
            this.EditItemModal = value;
          }}
          parentFlatList={this}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FAEE',
  },
  header: {
    backgroundColor: '#1D3557',
    height: 50,
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
  iconHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 15,
  },
  removeHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
  },
  icon: {
    height: 25,
    width: 25,
  },
  removeTilte: {
    color: '#fff',
    fontSize: 18,
  },
});
