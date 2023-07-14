import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import { CheckBox, Divider } from '@rneui/base';

const SelectFilter = () => {
  const checkBoxSide = ['lightSide', 'darkSide', 'neutral'];
  const checkBoxRol = [
    'support',
    'attacker',
    'capitalShip',
    'healer',
    'leader',
    'tank',
  ];
  const checkBoxAffiliation = [
    '501',
    'empire',
    'firstOrder',
    'galacticRepublic',
    'huttCartel',
    'imperialRemnant',
    'imperialTrooper',
    'mandalorian',
    'nightsister',
    'oldRepublic',
    'phoenix',
    'rebel',
    'rebelFigther',
    'resistance',
    'rogueOne',
    'separatist',
    'sithEmpire',
  ];

  const [filterState, setFilterState] = useState({
    lightSide: false,
    darkSide: false,
    neutral: false,
    support: false,
    attacker: false,
    capitalShip: false,
    healer: false,
    leader: false,
    tank: false,
  });

  const handleCheckBoxChange = (stateName, value) => {
    setFilterState((prevState) => ({
      ...prevState,
      [stateName]: value,
    }));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          {checkBoxSide.map((side) => (
            <CheckBox
              key={side}
              checked={filterState[side]}
              title={side.replace(/([A-Z])/g, ' $1').toUpperCase().trim()}
              textStyle={{
                color: theme.colors.yellow,
                fontSize: 15,
                marginLeft: 0,
              }}
              onPress={() => handleCheckBoxChange(side, !filterState[side])}
              checkedColor={theme.colors.yellow}
              uncheckedColor={theme.colors.yellow}
              size={30}
              width={'44%'}
              iconType='material-community'
              checkedIcon='checkbox-marked'
              uncheckedIcon='checkbox-blank-outline'
              containerStyle={{ backgroundColor: 'transparente' }}
            />
          ))}
        </View>
        <Divider
          inset={true}
          insetType='middle'
          width={3}
          color={theme.colors.yellow}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          {checkBoxRol.map((rol) => (
            <CheckBox
              key={rol}
              checked={filterState[rol]}
              title={rol.replace(/([A-Z])/g, ' $1').toUpperCase().trim()}
              textStyle={{
                color: theme.colors.yellow,
                fontSize: 15,
                marginLeft: 0,
              }}
              onPress={() => handleCheckBoxChange(rol, !filterState[rol])}
              checkedColor={theme.colors.yellow}
              uncheckedColor={theme.colors.yellow}
              size={30}
              width={'44%'}
              iconType='material-community'
              checkedIcon='checkbox-marked'
              uncheckedIcon='checkbox-blank-outline'
              containerStyle={{ backgroundColor: 'transparente' }}
            />
          ))}
        </View>
        <Divider
          inset={true}
          insetType='middle'
          width={3}
          color={theme.colors.yellow}
        />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          {checkBoxAffiliation.map((aff) => (
            <CheckBox
              key={aff}
              checked={filterState[aff]}
              title={aff.replace(/([A-Z])/g, ' $1').toUpperCase().trim()}
              textStyle={{
                color: theme.colors.yellow,
                fontSize: 15,
                marginLeft: 0,
              }}
              onPress={() => handleCheckBoxChange(aff, !filterState[aff])}
              checkedColor={theme.colors.yellow}
              uncheckedColor={theme.colors.yellow}
              size={30}
              width={'44%'}
              iconType='material-community'
              checkedIcon='checkbox-marked'
              uncheckedIcon='checkbox-blank-outline'
              containerStyle={{ backgroundColor: 'transparente' }}
            />
          ))}
        </View>
        <Divider
          inset={true}
          insetType='middle'
          width={3}
          color={theme.colors.yellow}
        />
      </View>
    </ScrollView>
  );
};

export default SelectFilter;

const styles = StyleSheet.create({
  container: theme.backgroundContainer,
});
