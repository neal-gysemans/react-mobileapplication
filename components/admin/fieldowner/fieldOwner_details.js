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
        {data.fieldowner[0].farms.map((farm, indexFarm) => (
          <View style={(indexFarm === data.fieldowner[0].farms.length - 1) ? style.none : style.listWithLabelItem} key={`Farm${indexFarm}`}>
            <Text style={[style.text, style.listWithLabelItemTitle]} key={`keyFarmName${indexFarm}`}>{farm.name}</Text>
            {farm.startdate && (<Text style={[style.text, style.opacity6]} key={`keyFarmStartDate${indexFarm}`}>{farm.startdate}</Text>)}
            <View style={style.farmInfoList}>
              <Text style={[style.text, {fontWeight: "bold"}]}>Fields</Text>
              {farm.fields.map((field, indexField) => (
                <Text style={[style.text, style.farmInfoListItem]} key={`keyFarm${indexFarm}Field${indexField}`}>{field.name}</Text>
              ))}
            </View>
          </View>
        ))}
        <Text style={[style.text, style.listWithLabelLabel]}>Farms</Text>
      </View>
    </View>
  );
};