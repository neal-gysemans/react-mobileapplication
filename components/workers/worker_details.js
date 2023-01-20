import { View, Text } from 'react-native';

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Layout
import Fetching from '../../layout/message_fetching';
import Error from '../../layout/message_error';

// Apollo
import { useQuery } from "@apollo/client";
import { GET_WORKER_DETAILS } from '../../gql/queries';

export default function WorkerDetailsScreen({ route, navigation }) {
    const { id } = route.params;
    const { data, loading, error } = useQuery(GET_WORKER_DETAILS, { variables: {id}});
    const style = useThemedStyles(styles);
  
    if (loading) return <Fetching message="Fetching data..." />
    if (error) return <Error error={error} />
    
  return (
    <View style={style.body}>
      {console.log(data.worker[0].city)}
      <Text style={[style.text, style.name]}>{data.worker[0].name}</Text>
      <Text style={style.text}>{data.worker[0].country}, {data.worker[0].city}</Text>
      <Text style={[style.text, style.opacity6]}>({data.worker[0].language})</Text>
      <View style={style.listWithLabel}>
        <Text style={style.text}>{data.worker[0].email}</Text>
        <Text style={style.text}>{data.worker[0].phonenumber}</Text>
        <Text style={[style.text, style.listWithLabelLabel]}>Contact information</Text>
      </View>
    </View>
  );
};