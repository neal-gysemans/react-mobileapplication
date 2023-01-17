import { FlatList, View, StyleSheet } from "react-native"
import { FAB } from 'react-native-elements';

import { useQuery } from "@apollo/client";
import { GET_WORKERS_FROM_FARM } from "../gql/queries";

import Separator from "../layout/seperator";
import Fetching from '../layout/message_fetching';
import Error from '../layout/message_error';
import WorkerItem from "./worker_item";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { farmState } from "../store";

export default function WorkersScreen() {
  const farmId = useRecoilValue(farmState);
  const {data, loading, error} = useQuery(GET_WORKERS_FROM_FARM, { variables: {farmId}, skip: farmId === 0});

  if (loading) return <Fetching />
  if (error) return <Error error={error} />
    
  if (data.farmStaff) {
    //console.log('worker: ', data.farmStaff[0].worker.id)
  }

    return (
      <View style={styles.container}>
      <FlatList
        data={data.farmStaff}
        renderItem={({ item }) => <WorkerItem item={item}/>}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={Separator}
      />
      <FAB
        icon={{ name: 'add', color: 'white' }}
        size="large"
        placement="right"
        color="tomato"
      />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });