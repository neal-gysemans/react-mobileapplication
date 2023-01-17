import { FlatList, View, StyleSheet } from "react-native"

// apollo, queries
import { useQuery } from "@apollo/client";
import { GET_FIELDOWNER_FARMS } from "../gql/queries";

//theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

// Layout
import Separator from "../layout/seperator";
import Fetching from '../layout/message_fetching';
import Error from '../layout/message_error';

// Item in list
import FarmItem from "./farms/farm_item";

// recoil
import { useRecoilValue } from "recoil";
import { farmState } from "../store";

export default function FarmsScreen({navigation}) {
    const farmId = useRecoilValue(farmState);
    const {data, loading, error} = useQuery(GET_FIELDOWNER_FARMS, { variables: {farmId}, skip: farmId === 0});
    const style = useThemedStyles(styles);


    if (loading) return <Fetching />
    if (error) return <Error error={error} />
      
    if (data) {
      console.log('farm: ', data.farm)
    }
    function handleDetails(item){
      navigation.navigate('FarmDetails', { id: item.id });
    }
  
      return (
        <View style={style.body}>
        <FlatList
          data={data.farm}
          renderItem={({ item }) => <FarmItem item={item} onPress={handleDetails}/>}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={Separator}
        />
      </View>
      );
  }