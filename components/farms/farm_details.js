import { View, Text, FlatList } from 'react-native';

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Layout
import Fetching from '../../layout/message_fetching';
import Error from '../../layout/message_error';

// apollo queries
import { useQuery } from "@apollo/client";
import { GET_FARM_DETAILS } from '../../gql/queries';

export default function FarmDetailsScreen({ route, navigation }) {
    const { id } = route.params;
    const { data, loading, error } = useQuery(GET_FARM_DETAILS, { variables: {id}});
    // Styling
    const style = useThemedStyles(styles);
    
    if (loading) return <Fetching message="Fetching data..." />
    if (error) return <Error error={error} />

    function handleDetails(item){
      navigation.navigate('FieldDetails', { id: item.id });
    }

  return (
    <View style={style.body}>
      <Text style={[style.text, style.name]}>{data.farm[0].name}</Text>
      <Text style={style.text}>{data.farm[0].startdate}</Text>
      <View style={style.listWithLabel}>
        {data.farm[0].fields.map((field, index) => (
          <Text onPress={() => {handleDetails(index)}} style={style.text} key={index}>{field.name}</Text>
        ))}
        <Text style={[style.text, style.listWithLabelLabel]}>Fields</Text>
      </View>
    </View>
  );
};