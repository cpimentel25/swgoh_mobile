import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../theme.js';

const style = StyleSheet.create({
  relicFrame: {
    position: 'absolute',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
  },
  darkSide: {
    borderColor: theme.colors.darkSide,
  },
  lightSide: {
    borderColor: theme.colors.lightSide,
  },
  neutralSide: {
    borderColor: theme.colors.neutralSide,
  },
});

export default function StylesImage({ alignment, image }) {
  const relicFrameAll = {
    uri: 'https://assets.swgoh.gg/files/assets/character-frame-relic-atlas.b98ef776d9bfe53b.png',
  };
  const darkRelicFrame = require('../../assets/character-frame-relic-dark-side.png');
  const neutralRelicFrame = require('../../assets/character-frame-relic-neutral-side.png');
  const lightRelicFrame = require('../../assets/character-frame-relic-light-side.png');

  const imageStyles = [
    style.image,
    alignment === 2
      ? style.lightSide
      : alignment === 3
      ? style.darkSide
      : style.neutralSide,
  ];

  let relicFrame;

  if (alignment === 2) {
    relicFrame = lightRelicFrame;
  } else if (alignment === 3) {
    relicFrame = darkRelicFrame;
  } else {
    relicFrame = neutralRelicFrame;
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image style={imageStyles} source={{ uri: image }} />
      <Image style={style.relicFrame} source={relicFrame} />
    </View>
  );
}
