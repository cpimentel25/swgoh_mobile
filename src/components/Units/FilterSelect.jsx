import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import theme from '../../theme';
import { CheckBox, Divider } from '@rneui/base';
import { useDispatch } from 'react-redux';
import { setFilterOptions } from '../../app/redux/slice';
import CheckBoxOp from './CheckBox';

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

  const checkBoxProfession = [
    'badBatch',
    'bountyHunter',
    'cloneTrooper',
    'inquisitorius',
    'jedi',
    'scoundrel',
    'sith',
    'smuggler',
  ];

  const checkBoxSpecies = [
    'droid',
    'ewok',
    'geonosian',
    'jawa',
    'tusken',
    'wookiee',
  ];

  //'Object.fromEntries' genera un objeto con todas las opciones como claves
  // y sus valores iniciales establecidos en false.
  const initialState = Object.fromEntries(
    [
      ...checkBoxSide,
      ...checkBoxRol,
      ...checkBoxAffiliation,
      ...checkBoxProfession,
      ...checkBoxSpecies,
    ].map((option) => [option, false])
  );

  const [filterState, setFilterState] = useState(initialState);

  //Filter true value
  const selectOptions = Object.entries(filterState)
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterOptions(selectOptions));
  }, [selectOptions]);

  const handleCheckBoxChange = (stateName) => {
    setFilterState((prevState) => {
      const updateState = { ...prevState };

      // Obtener el grupo de checkboxes según el stateName
      const checkBoxGroup = checkBoxSide.includes(stateName)
        ? checkBoxSide
        : checkBoxRol.includes(stateName)
        ? checkBoxRol
        : checkBoxAffiliation.includes(stateName)
        ? checkBoxAffiliation
        : checkBoxProfession.includes(stateName)
        ? checkBoxProfession
        : checkBoxSpecies.includes(stateName)
        ? checkBoxSpecies
        : [];

      // Establecer todas las opciones en 'false', excepto la seleccionada
      checkBoxGroup.forEach((option) => {
        updateState[option] = option === stateName && !prevState[option];
      });

      return updateState;
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
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
          {checkBoxSide.map((side) => (
            <CheckBoxOp
              data={side}
              filter={filterState}
              func={handleCheckBoxChange}
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
            <CheckBoxOp
              data={rol}
              filter={filterState}
              func={handleCheckBoxChange}
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
            <CheckBoxOp
              data={aff}
              filter={filterState}
              func={handleCheckBoxChange}
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
          {checkBoxProfession.map((prof) => (
            <CheckBoxOp
              data={prof}
              filter={filterState}
              func={handleCheckBoxChange}
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
          {checkBoxSpecies.map((spec) => (
            <CheckBoxOp
              data={spec}
              filter={filterState}
              func={handleCheckBoxChange}
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
