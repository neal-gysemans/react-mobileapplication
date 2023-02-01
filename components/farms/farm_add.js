import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Pressable, Button } from 'react-native';
import {FAB} from "react-native-elements";

//theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Layout
import Error from '../../layout/message_error';

import DbAPI from '../../api/DbAPI';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useRecoilState, useRecoilValue } from 'recoil';
import { farmList, userID } from '../../store';
import { Flex } from '@react-native-material/core';
import { FormItem } from 'react-native-form-component';
import { Alert } from 'react-native';


export default function AddFarm({navigation}) {
    const [farm, setFarm] = useState({name: "",address:"", fieldOwnerID:0, started:""});
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const fieldOwner = useRecoilValue(userID)

   farm.fieldOwnerID = fieldOwner;

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };

    const style = useThemedStyles(styles);
    
    async function addFarmToDB(farm){
      if (farm.started != "" ){
        console.log("farmski" , farm);
        try {
          DbAPI.addFarm(farm);
        } catch (error) {
          console.log('Something went wrong with the database api.', error);
          <Error/>
        }
        console.log(farm);
        navigation.goBack();
      } else {
        Alert.alert("Please select a date")
      }
      }

    const handleConfirmDate = (date) => {
        console.log("A date has been picked: ", date.toISOString());
        farm.started = date.toISOString();
        hideDatePicker();
        console.log('date:', farm);
    };

  return (
    <View style={style.body}>
      <FormItem
        isRequired
        value={farm.name}
        onChangeText={(name) => setFarm({...farm, name})}
        asterik
        placeholder='Name'
        />

        <FormItem
        placeholder='Address'
        isRequired
        value={farm.address}
        onChangeText={(address) => setFarm({...farm, address})}
        asterik
        />
      
      <Text style={[style.addLabel]}>Startdate: </Text>
      <View style={style.datePicker}>
      
      {farm.started != "" ?
        <Text style={style.addLabel}>{farm.started.substring(0,10)}</Text>
      :
        <Text style={style.addLabel}>2023-01-07</Text>
      }
      <Button title="Show Date Picker" onPress={showDatePicker} style={style.addButton}/>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />
      </View>
      
      <FAB
        icon={{ name: 'add', color: 'white' }}
        size="large"
        placement="right"
        color='#2c3e50'
        type='string'
        title="Add farm"
        onPress={() => addFarmToDB(farm)}
      />
    </View> 
  );
};