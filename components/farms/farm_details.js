import { View, TextInput, StyleSheet, Text, FlatList } from 'react-native';

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Item in list
import FieldItem from '../fields/field_item';

// Layout
import Fetching from '../../layout/message_fetching';
import Separator from '../../layout/seperator';
import Error from '../../layout/message_error';

// apollo queries
import { useQuery, useMutation } from "@apollo/client";
import { GET_FARM_DETAILS } from '../../gql/queries';

export default function FarmDetailsScreen({ route, navigation }) {
    const { id } = route.params;
    const { data, loading, error } = useQuery(GET_FARM_DETAILS, { variables: {id}});
    const style = useThemedStyles(styles);
    
    if (loading) return <Fetching />
    if (error) return <Error error={error} />
    

    //console.log('fields: ', data.farm[0]);

    function handleDetails(item){
      navigation.navigate('FieldDetails', { id: item.id });
    }

  return (
    <View style={style.body}>
      <Text style={style.name}>{data.farm[0].name}</Text>
      { data.farm[0].startdate ?
      <Text>Opgericht te: {data.farm[0].startdate}</Text>
      :
      <Text></Text>}
      <FlatList
            
          data={data.farm[0].fields}
          renderItem={({ item }) => <FieldItem item={item} onPress={handleDetails}/>}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={Separator}
        />
    </View>
  );
};