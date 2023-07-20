import { Text, View } from 'react-native';
import StylesText from '../TextStyles';

const ShipList = ({ data }) => {
  return (
    <View>
      <StylesText heading bold titleTwo>
        {data.name}
      </StylesText>
    </View>
  );
};

export default ShipList;
