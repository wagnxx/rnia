import {useProfileContext} from '@/context/ProfileContext';
import React, {FunctionComponent, ReactNode, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  Button,
  Modal,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

interface iListItemProps {
  name: string;
  children?: ReactNode;
}

const ListItem: FunctionComponent<iListItemProps> = props => {
  return (
    <View style={styles.listItem}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
      <View style={styles.extComp}>{props.children}</View>
    </View>
  );
};

const Profile = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const context = useProfileContext();
  if (!context) {
    return <Text>ProfileContext : null</Text>;
  }
  const {username, id, tel, setTel, setUsername, setId} = context;

  const getContext = () => {
    console.log('getContext::', context);
    setModalVisible(true);
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.list}>
        <ListItem name="手机号">
          <TextInput value={tel} onChangeText={text => setTel(text)} />
        </ListItem>
        <ListItem name="真实姓名">
          <TextInput
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </ListItem>
        <ListItem name="身份证号">
          <TextInput value={id} onChangeText={text => setId(text)} />
        </ListItem>

        <Button onPress={() => getContext()} title="get context" />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // marginHorizontal: 16,
  },
  list: {
    paddingTop: 20,
  },
  listItem: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 6,
  },
  textWrapper: {
    minWidth: 80,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  text: {},
  extComp: {},

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Profile;
