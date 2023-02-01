import { FlatList, View, Text } from "react-native"
import {FAB} from "react-native-elements";
// Apollo
import { disableExperimentalFragmentVariables, useQuery } from "@apollo/client";
import { GET_WORKERS_FROM_FARM } from "../gql/queries";

//theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

// Layout
import Separator from "../layout/seperator";
import Fetching from '../layout/message_fetching';
import Error from '../layout/message_error';

// Item in list
import WorkerItem from "./workers/worker_item";

// Recoil
import { useRecoilValue } from "recoil";
import { farmState } from "../store";
import { useEffect, useState } from "react";


import DbAPI from '../api/DbAPI';

export default function WorkersScreen({ navigation }) {
  // Styling (theme)
  let style = useThemedStyles(styles);
  const [workers, setWorkers] = useState(null);
  const [loading, setLoading] = useState(true);

  const farmId = useRecoilValue(farmState);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await DbAPI.getWorkers();
        console.log('result', result.data);
        setWorkers(result.data);
      } catch (error) {
        console.log('Something went wrong with the database api.', error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);
    
  
  function handleDetails(item){
    navigation.navigate('WorkerDetails', { id: item.workerID });
  }
  if(loading) return <Fetching/>

  function handleAdd(){
    navigation.navigate('AddWorker');
  }

  console.log(workers);
    return (
      <View style={style.body}>
      <FlatList
        data={workers}
        renderItem={({ item }) => <WorkerItem item={item} onPress={handleDetails}/>}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={Separator}
      />
      <FAB
        icon={{ name: 'add', color: 'white' }}
        size="large"
        placement="right"
        color="black"
        onPress={handleAdd}
      />
    </View>
    );
}