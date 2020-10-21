import * as React from 'react';
import {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Modal, Portal, Button, Provider, TextInput} from 'react-native-paper';
import itemData from '../data/ProfileInformation';

export default class addItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      name: '',
      phone: '',
      user: {},
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  showModal({user}) {
    this.setState({isVisible: true});
    this.setState({user: user});
  }

  hideModal() {
    this.setState({isVisible: false});
  }

  render() {
    return (
      <Provider>
        <Portal>
          <Modal visible={this.state.isVisible} onDismiss={this.hideModal}>
            <View style={styles.container}>
              <View style={styles.contentHolder}>
                <View style={styles.inputHolder}>
                  <TextInput
                    label="Tên"
                    onChangeText={(text) => {
                      this.setState({name: text});
                    }}
                  />
                  <TextInput
                    label="Số điện thoại"
                    onChangeText={(text) => {
                      this.setState({phone: text});
                    }}
                  />
                </View>
                <View style={styles.buttonHolder}>
                  <Button
                    style={styles.buttonStyle}
                    mode="text"
                    onPress={this.hideModal}>
                    Decline
                  </Button>
                  <Button
                    style={styles.buttonStyle}
                    mode="text"
                    onPress={() => {
                      const index = itemData.findIndex(
                        (value) => value === this.state.user,
                      );
                      const id = itemData[index].directory.length + 1;
                      const newItem = {
                        id: id.toString(),
                        name: this.state.name,
                        phone: this.state.phone,
                      };
                      itemData[index].directory.push(newItem);
                      this.props.parentFlatList.refreshScreen(id);
                      console.log('test ' + itemData[index].directory);
                      this.hideModal();
                    }}>
                    Accept
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
        </Portal>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 250,
    backgroundColor: '#F1FAEE',
    alignSelf: 'center',
    padding: 10,
  },
  contentHolder: {},
  inputHolder: {
    height: 150,
  },
  buttonHolder: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonStyle: {},
});
