import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_PREFIX = '@storage_Key_';

export const storeSetItem = async (key: string, value: any) => {
  try {
    let _value = value;
    if (typeof value === 'object') {
      _value = JSON.stringify(_value);
    }
    await AsyncStorage.setItem(KEY_PREFIX + key, _value);
  } catch (e) {
    // saving error
  }
};

export const storeGetItem = async (key: string) => {
  let _value = await AsyncStorage.getItem(KEY_PREFIX + key);
  try {
    return _value != null ? JSON.parse(_value) : null;
  } catch (e) {
    // error reading value
    return _value;
  }
};
