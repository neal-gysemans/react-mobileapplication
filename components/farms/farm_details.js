import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import { red } from "../../styles/styles";

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Layout
import Fetching from '../../layout/message_fetching';
import Error from '../../layout/message_error';

// queries
import dbAPI from '../../api/dbAPI';
import { useState, useEffect } from "react";

export default function FarmDetailsScreen({ route, navigation }) {
    const { id } = route.params;
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    // Styling
    const style = useThemedStyles(styles);
    
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const result = await dbAPI.getFarmDetails(id);
          console.log('details', result.data[0]);
          setDetails(result.data[0]);
        } catch (error) {
          console.log('Something went wrong with the database api.', error);
          <Error/>
        }
        setLoading(false);
      }
      fetchData();
    }, []);
    
    if(loading) return <Fetching/>

    /*function handleAdd(){
      navigation.navigate('AddField',  { id: id });
    }*/

    function handleEdit(){
      navigation.navigate('EditField',  { id: id });
    }

    function handleDetails(item){
      navigation.navigate('FieldDetails', { id: item.id });
    }

    async function deleteFarm(id){
      console.log("farmski" , id);
      try {
        dbAPI.deleteFarm(id);
      } catch (error) {
        console.log('Something went wrong with the database api.', error);
        <Error/>
      }
        navigation.goBack();
      }
    // FloatingButton
    const FloatingButton = () => {

      const [icon_1] = useState(new Animated.Value(10));
      const [icon_2] = useState(new Animated.Value(10));
      const [icon_3] = useState(new Animated.Value(10));
    
    
      const [pop, setPop] = useState(false);
    
      const popIn = () => {
        setPop(true);
        Animated.timing(icon_1, {
          toValue: 90,
          duration: 300,
          useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
          toValue: 70,
          duration: 300,
          useNativeDriver: false,
        }).start();
        Animated.timing(icon_3, {
            toValue: 90,
            duration: 300,
            useNativeDriver: false,
        }).start();
      }
    
      const popOut = () => {
        setPop(false);
        Animated.timing(icon_1, {
          toValue: 10,
          duration: 300,
          useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
          toValue: 10,
          duration: 300,
          useNativeDriver: false,
        }).start();
        Animated.timing(icon_3, {
            toValue: 10,
            duration: 300,
            useNativeDriver: false,
        }).start();
      }
      return(
        <View style={{
          flex: 1
        }}>
          <Animated.View style={[style.circle, { bottom: icon_1}, { backgroundColor: useThemedStyles(red)}]}>
            <TouchableOpacity onPress={handleEdit}>
              <Icon name="pencil" size={25} color="#FFFF" />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[style.circle, { bottom: icon_2, right: icon_2}, { backgroundColor: useThemedStyles(red)}]}>
            <TouchableOpacity /*onPress={handleAdd}*/>
              <Icon name="plus" size={25} color="#FFFF" />
              </TouchableOpacity>
            </Animated.View>
          <Animated.View style={[style.circle, { right: icon_3}, { backgroundColor: useThemedStyles(red)}]}>
            <TouchableOpacity onPress={() => deleteFarm(id)}>
              <Icon name="trash" size={25} color="#FFFF" />
            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity
            style={[style.circle, {backgroundColor: useThemedStyles(red)}]}
            onPress={() => {
              pop === false ? popIn() : popOut();
            }}
          >
            <Icon name="bars" size={25} color="#FFFF" />
          </TouchableOpacity>
        </View>
      )
    
    }
    //end of FloatingButton

  return (
    <View style={style.body}>
      <Text style={[style.text, style.name]}>{details.name}</Text>
      <Text style={style.text}>{details.started.substring(0,10)}</Text>
      <View style={style.listWithLabel}>
        {details.fields.map((field, index) => (
          <Text onPress={() => {handleDetails(index)}} style={style.text} key={index}>{field.name}</Text>
        ))}
        <Text style={[style.text, style.listWithLabelLabel]}>Fields</Text>
      </View>
      <FloatingButton/>
    </View>
  );
};