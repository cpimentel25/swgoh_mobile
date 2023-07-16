import React from 'react';
import { View } from 'react-native';
import StylesImage from '../ImageStyles';

const UnitsHeader = (data) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginRight: 20,
        marginBottom: 10,
        marginLeft: 5,
      }}
    >
      <StylesImage
        alignment={data.alignment}
        image={data.image}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};

export default UnitsHeader;
