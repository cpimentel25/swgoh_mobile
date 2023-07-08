import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme.js';

const style = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.font.main,
    fontWeight: theme.fontWeights.body,
  },
  colorSecundary: {
    color: theme.colors.textSecundary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  heading: {
    fontSize: theme.fontSizes.heading,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
  textTitlePrimary: {
    color: theme.colors.textTitlePrimary,
  },
  textTitleSecundary: {
    color: theme.colors.textTitleSecundary,
  }
});

export default function StylesText({
  children,
  bold,
  subHeading,
  heading,
  titleOne,
  titleTwo,
  ...restOfProps
}) {
  const textStyles = [
    style.text,
    bold && style.bold,
    subHeading && style.big,
    heading && style.heading,
    titleOne && style.textTitlePrimary,
    titleTwo && style.textTitleSecundary,
  ];

  return <Text style={textStyles} {...restOfProps}>{children}</Text>;
}
