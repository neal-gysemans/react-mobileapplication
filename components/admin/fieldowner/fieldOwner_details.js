import { View, Text } from 'react-native';

//theme
import useThemedStyles from "../../../styles/theme/useThemedStyles";
import { styles } from "../../../styles/styles";

// Layout
import Fetching from '../../../layout/message_fetching';
import Error from '../../../layout/message_error';

// Apollo
import { useQuery } from "@apollo/client";
import { GET_FIELDOWNER_DETAILS } from '../../../gql/queries';

export default function FieldOwnerDetails({ route, navigation }) {
    const { id } = route.params;
    const { data, loading, error } = useQuery(GET_FIELDOWNER_DETAILS, { variables: {id}});
    const style = useThemedStyles(styles);
    
    if (loading) return <Fetching message="Fetching data..." />
    if (error) return <Error error={error} />

  return (
    <View style={style.body}>
      <Text style={[style.text, style.name]}>{data.fieldowner[0].name}</Text>
      <Text style={style.text}>{data.fieldowner[0].country}, {data.fieldowner[0].city}</Text>
      <View style={style.listWithLabel}>
        {data.fieldowner[0].farms.map((farm, index) => (
          <Text style={style.text} key={index}>{farm.name}</Text>
        ))}
        <Text style={[style.text, style.listLabel]}>Farms</Text>
      </View>
    </View>
  );
};