import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from '@rneui/base';
import { useDispatch } from 'react-redux';
import { setFilterApply, setFilterOptions } from '../../app/redux/slice';
import CheckBoxOp from './CheckBox';
import theme from '../../theme';

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

  const alignment = ['lightSide', 'darkSide', 'neutral'];
  const role = [
    'support',
    'attacker',
    'capitalShip',
    'healer',
    'leader',
    'tank',
  ];
  const categories = [
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
    'badBatch',
    'bountyHunter',
    'cloneTrooper',
    'inquisitorius',
    'jedi',
    'scoundrel',
    'sith',
    'smuggler',
    'droid',
    'ewok',
    'geonosian',
    'jawa',
    'tusken',
    'wookiee',
  ];

  const initialState = [
    { side: [...checkBoxSide] },
    { rol: [...checkBoxRol] },
    { categories: [...checkBoxAffiliation] },
    { profession: [...checkBoxProfession] },
    { species: [...checkBoxSpecies] },
  ];

  const [filterState, setFilterState] = useState(initialState);
  const dispatch = useDispatch();

  //Obtener las opciones seleccionadas(true) según los filtros
  const selectOptions = Object.entries(filterState)
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key);

  const applyFilter = [{ alignment: [] }, { categories: [] }, { role: [] }];

  useEffect(() => {
    selectOptions.forEach((value) => {
      const alignmentIndex = applyFilter.findIndex(
        (obj) => Object.keys(obj)[0] === 'alignment'
      );
      const roleIndex = applyFilter.findIndex(
        (obj) => Object.keys(obj)[0] === 'role'
      );
      const categoriesIndex = applyFilter.findIndex(
        (obj) => Object.keys(obj)[0] === 'categories'
      );

      if (alignment.includes(value) && alignmentIndex !== -1) {
        applyFilter[alignmentIndex].alignment.push(value);
      }
      if (role.includes(value) && roleIndex !== -1) {
        applyFilter[roleIndex].role.push(value);
      }
      if (categories.includes(value) && categoriesIndex !== -1) {
        applyFilter[categoriesIndex].categories.push(value);
      }
    });
    dispatch(setFilterOptions(selectOptions));
    dispatch(setFilterApply(applyFilter));
  }, [selectOptions]);

  const handleCheckBoxChange = (stateName) => {
    setFilterState((prevState) => {
      const updatedState = { ...prevState };

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
        updatedState[option] = option === stateName && !prevState[option];
      });

      return updatedState;
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
          {checkBoxSide.map((side, index) => (
            <CheckBoxOp
              key={index}
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
          {checkBoxRol.map((rol, index) => (
            <CheckBoxOp
              key={index}
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
          {checkBoxAffiliation.map((aff, index) => (
            <CheckBoxOp
              key={index}
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
          {checkBoxProfession.map((prof, index) => (
            <CheckBoxOp
              key={index}
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
          {checkBoxSpecies.map((spec, index) => (
            <CheckBoxOp
              key={index}
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
