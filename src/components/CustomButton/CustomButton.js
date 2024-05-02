import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const CustomButton = ({
  title,
  withoutBackground = false,
  onPress,
  backgroundColor,
  fntColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        withoutBackground
          ? styles.button
          : [
              styles.button,
              styles.button_background,
              {backgroundColor: backgroundColor},
            ]
      }>
      <Text style={[styles.font, {color: fntColor}]}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_background: {
    backgroundColor: '#0057ff',
    borderRadius: 5,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default CustomButton;
