import {getUserInfo} from '@/utils/api/api';
import {storeSetItem} from '@/utils/storage';
import React, {createRef, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const login = () => {
    const user = {username, password};
    if (!username || !password) {
      return;
    }

    getUserInfo(user).then(res => {
      console.log('res login:::', res);
      if (res && res.token) {
        storeSetItem('token', res.token);
      }
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="username"
            style={styles.input}
            onChangeText={text => setusername(text)}
          />
        </View>
        <TextInput
          placeholder="password"
          style={styles.input}
          onChangeText={text => setpassword(text)}
        />
        <Button
          title="Login"
          onPress={login}
          disabled={!username || !password}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  title: {
    fontSize: 33,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  form: {
    padding: 10,
  },
});
