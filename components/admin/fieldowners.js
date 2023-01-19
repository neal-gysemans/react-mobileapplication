import { FlatList, View } from "react-native"

// apollo, queries
import { useQuery } from "@apollo/client";
import { GET_FIELDOWNERS } from "../../gql/queries";

// Layout
import Separator from "../../layout/seperator";
import Fetching from '../../layout/message_fetching';
import Error from '../../layout/message_error';

// Item in list
import FieldOwnerItem from "./fieldowner/fieldOwner_item";

// recoil
import { useRecoilValue } from "recoil";
import { adminFieldOwnerState } from "../../store";

// Theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

export default function FarmsScreen({ navigation }) {
    // Styling (theme)
    let style = useThemedStyles(styles);

    const fieldOwnerId = useRecoilValue(adminFieldOwnerState);
    const {data, loading, error} = useQuery(GET_FIELDOWNERS, { variables: {fieldOwnerId}, skip: fieldOwnerId === 0});


    if (loading) return <Fetching message="Fetching data..." />
    if (error) return <Error error={error} />
      
    if (data) {
      console.log('fieldOwner: ', data.fieldowner)
    }
    function handleDetails(item){
      navigation.navigate('FieldOwnerDetails', { id: item.id });
    }
  
      return (
        <View style={style.body}>
        <FlatList
          data={data.fieldowner}
          renderItem={({ item }) => <FieldOwnerItem item={item} onPress={handleDetails}/>}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={Separator}
        />
      </View>
      );
  }