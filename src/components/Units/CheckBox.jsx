import React from 'react';
import theme from '../../theme';
import { CheckBox } from '@rneui/base';

const CheckBoxOp = ({ data, filter, func }) => {
  return (
    <CheckBox
      key={data}
      checked={filter[data]}
      title={data
        .replace(/([A-Z])/g, ' $1')
        .toUpperCase()
        .trim()}
      textStyle={{
        color: theme.colors.yellow,
        fontSize: 15,
        marginLeft: 0,
      }}
      onPress={() => func(data)}
      checkedColor={theme.colors.yellow}
      uncheckedColor={theme.colors.yellow}
      size={30}
      width={'44%'}
      iconType='material-community'
      checkedIcon='checkbox-marked'
      uncheckedIcon='checkbox-blank-outline'
      containerStyle={{ backgroundColor: 'transparente' }}
    />
  );
};

export default CheckBoxOp;
