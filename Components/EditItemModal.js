import * as React from 'react';
import {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Modal, Portal, Button, Provider, TextInput} from 'react-native-paper';
import itemData from '../data/ProfileInformation';

export default class EditItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      isVisible: false,
      name: '',
      phone: '',
      userIndex: 0,
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  showModal(index, userIndex) {
    //alert('Show');
    this.setState({
      index: index,
      userIndex: userIndex,
      isVisible: true,
      name: itemData[userIndex].directory[index].name,
      phone: itemData[userIndex].directory[index].phone,
    });
  }

  hideModal() {
    //alert('Hide');
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
                    value={this.state.name}
                    onChangeText={(text) => {
                      this.setState({name: text});
                    }}
                  />
                  <TextInput
                    label="Số điện thoại"
                    value={this.state.phone}
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
                      const index = this.state.index;
                      const userIndex = this.state.userIndex;
                      itemData[userIndex].directory[
                        index
                      ].name = this.state.name;
                      itemData[userIndex].directory[
                        index
                      ].phone = this.state.phone;
                      this.props.parentFlatList.refreshItem(index);
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
