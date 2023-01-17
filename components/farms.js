import { FlatList, View, StyleSheet } from "react-native"
import { FAB } from 'react-native-elements';

import { useQuery } from "@apollo/client";
import { GET_FIELDOWNER_FARMS } from "../gql/queries";

import Separator from "../layout/seperator";
import Fetching from '../layout/message_fetching';
import Error from '../layout/message_error';
import FarmItem from "./farm_item";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { farmState } from "../store";

export default function FarmsScreen() {
    const farmId = useRecoilValue(farmState);
    const {data, loading, error} = useQuery(GET_FIELDOWNER_FARMS, { variables: {farmId}, skip: farmId === 0});
  
    if (loading) return <Fetching />
    if (error) return <Error error={error} />
      
    if (data) {
      console.log('farm: ', data.farm)
    }
  
      return (
        <View style={styles.container}>
        <FlatList
          data={data.farm}
          renderItem={({ item }) => <FarmItem item={item}/>}
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