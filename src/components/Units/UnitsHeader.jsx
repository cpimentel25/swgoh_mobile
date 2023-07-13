import React from "react";
import { View } from "react-native";
import StylesText from "../TextStyles";
import StylesImage from "../ImageStyles";

const UnitsHeader = (data) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 10,
      }}
    >
      <View style={{ alignItems: 'center', width: 70, height: 50 }}>
        <StylesText bold titleOne>Power</StylesText>
        <StylesText>{data.power}</StylesText>
      </View>
      <StylesImage
        alignment={data.alignment}
        image={data.image}
        style={{ width: 50, height: 50 }}
      />
      <View style={{ alignItems: 'center', width: 70, height: 50 }}>
        <StylesText bold titleOne>Role</StylesText>
        <StylesText>{data.role}</StylesText>
      </View>
    </View>
  );
};

export default UnitsHeader;
