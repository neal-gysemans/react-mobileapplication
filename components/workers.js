import { FlatList, View } from "react-native"

// Apollo
import { useQuery } from "@apollo/client";
import { GET_WORKERS_FROM_FARM } from "../gql/queries";

//theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

// Layout
import Separator from "../layout/seperator";
import Fetching from '../layout/message_fetching';
import Error from '../layout/message_error';

// Item
import WorkerItem from "./workers/worker_item";

// Recoil
import { useRecoilValue } from "recoil";
import { farmState } from "../store";

export default function WorkersScreen({ navigation }) {
  // Styling (theme)
  let style = useThemedStyles(styles);

  const farmId = useRecoilValue(farmState);
  const {data, loading, error} = useQuery(GET_WORKERS_FROM_FARM, { variables: {farmId}, skip: farmId === 0});

  if (loading) return <Fetching message="Fetching data..." />
  if (error) return <Error error={error} />
    
  if (data.farmStaff) {
    // console.log('worker: ', data.farmStaff[0].worker.id)
  }

  function handleDetails(item){
    navigation.navigate('WorkerDetails', { id: item.id });
  }
  /*<FAB
        icon={{ name: 'add', color: 'white' }}
        size="large"
        placement="right"
        color="tomato"
      />*/
    return (
      <View style={style.body}>
      <FlatList
        data={data.farmStaff}
        renderItem={({ item }) => <WorkerItem item={item} onPress={handleDetails}/>}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={Separator}
      />
      
    </View>
    );
}