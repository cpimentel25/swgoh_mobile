import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import theme from '../theme';
import { Button } from '@rneui/themed';
import { useNavigate } from 'react-router-native';

const ButtonOption = ({ option }) => {
  const navigate = useNavigate();
  const onPress = () => {
    const path = `/${option.toLowerCase()}`;
    navigate(path);
  };

  return (
    <SafeAreaView style={style.contaier}>
      <Button
        onPress={onPress}
        buttonStyle={theme.buttonPrimary.style}
        titleStyle={theme.buttonPrimary.content}
        containerStyle={{
          width: 250,
          marginHorizontal: 50,
          marginVertical: 20,
        }}
        title={option}
      />
    </SafeAreaView>
  );
};

export default ButtonOption;

const style = StyleSheet.create({
  contaier: {
    alignItems: 'center',
  },
});
