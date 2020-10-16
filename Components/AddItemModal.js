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
      title: '',
      description: '',
    };
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    //alert('Show');
    this.setState({isVisible: true});
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
                    value={this.state.title}
                    onChangeText={(text) => {
                      this.setState({title: text});
                    }}
                  />
                  <TextInput
                    label="Số điện thoại"
                    value={this.state.description}
                    onChangeText={(text) => {
                      this.setState({description: text});
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
                      const id = itemData.length + 1;
                      const newItem = {
                        id: id,
                        title: this.state.title,
                        description: this.state.description,
                        imageUri:
                          'https://i.pinimg.com/564x/d5/f7/ef/d5f7efb5c1babc9bb53c093e25f0a2fb.jpg',
                      };
                      itemData.push(newItem);
                      this.props.parentFlatList.refreshScreen(id);
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
