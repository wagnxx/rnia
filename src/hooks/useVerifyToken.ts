import {verifyToken} from '@/utils/api/api';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const useVerifyToken = state => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    verifyToken().then(res => {
      if (res.success) {
        setIsValid(true);
        return;
      }
      setIsValid(false);
    });
  }, [state]);

  return {
    isValid,
  };
};

export default useVerifyToken;
