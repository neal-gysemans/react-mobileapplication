import { Image, Text, TouchableOpacity, View } from "react-native";

// Theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { styles } from "../../styles/styles";

// Icons
import { Icon } from "@react-native-material/core";

// Geolocation
import OwnLocation from "../../config/location"

// Screens
import Fetching from "../../layout/message_fetching";

// Use effect
import { useEffect, useState } from "react";

// URL to base64
import * as FileSystem from 'expo-file-system';

// API's
import AiAPI from "../../api/AiAPI";
import DbAPI from "../../api/DbAPI";

// Field selectlist
import { SelectList } from 'react-native-dropdown-select-list'


export default function TakePhotoScreen({ route, navigation }) {

    // Flowers
    const [nrFlowers, setNrFlowers] = useState(null);

    // Farm
    const [farm, setFarm] = useState(null);
    const farmId = 1;

    // Fields
    const [fields, setFields] = useState(null);

    // Selectlist
    const [selected, setSelected] = useState(null);
    const [data, setData] = useState(null);
    
    // Styling (theme)
    const style = useThemedStyles(styles);

    // Image (link to local image)
    const { image } = route.params;

    // Size of icon
    const size = 25;

    useEffect(() => {
        getFarmDetails(farmId);
        getLocation();
        getAmountOfFlowers();
    }, []);

    async function getLocation() {
        global.location = "10";
    }

    async function getFarmDetails(farmId){
        try{
            const result = await DbAPI.getFarmDetails(farmId);
            console.log(result.data);
            setFarm(result?.data[0]);
            setFields(result?.data[0].fields);
        } catch (error){
            console.log(error);
        }
    }

    async function getAmountOfFlowers(){
        let base64 = await FileSystem.readAsStringAsync(image, { encoding: 'base64'});
        const result = await AiAPI.getResultFromBase64(base64);
        setNrFlowers(result);
    }

    if(!farm) return <Fetching message={`Getting farm: ${farmId}...`}/>
    if(!fields) return <Fetching message={`Getting fields from farm: ${farmId}...`}/>
    if(!location) return <Fetching message="Looking for location..."/>
    if(!nrFlowers) return <Fetching message="Getting number of flowers..."/>
    
    return (
        <View style={style.body}>
            <Image source={{ uri: image }} style={style.img}/>
            <TouchableOpacity style={style.newPhotoButton} onPress={() => {newPhoto();}}>
                <Icon name="camera-iris" size={size} style={style.textBG_COLOR}/>
            </TouchableOpacity>
            <TouchableOpacity style={style.usePhotoButton} onPress={() => {usePhoto();}}>
                <Text style={[style.textBG_COLOR, {fontSize: 30}]}>Use photo</Text>
            </TouchableOpacity>
            <Text style={[style.usePhoneButton, style.textBG_COLOR, {fontSize: 30}]}>{nrFlowers}</Text>
            <View style={style.selectList}>
                <SelectList 
                  setSelected={(item) => setSelected(item)} 
                  data={data}
                  dropdownTextStyles={{color: 'white'}}
                  inputStyles={{color: 'white'}}
                  arrowicon={<Icon name="chevron-down" size={12} color={'white'} style={{paddingTop: 3, paddingLeft: 10}}/>}
                  search={false} 
                  defaultOption={data[0]}/>
            </View>
        </View>
    )

    function newPhoto() {
        navigation.navigate("Take picture");
    }

    async function usePhoto() {
        // Do things with this image
        // Post of coordinate
        /* Coordinates */
        let x = location.longitude;
        let y = location.latitude;

        const coordinateResult = await DbAPI.postCoordinate({"x": x, "y": y});
        console.log(coordinateResult);
        // Get this id back

        // Post of photoData
        let fieldId = selected;
        let amtFlowers = nrFlowers;
        // WorkerID
        // FieldownerID
                // let fOwnerId = farm.fieldOwnerID;
        // Current userId
                // let workerId = cUser.id;
        /* Make a date */
        let dateYear = new Date().getFullYear();
        let dateMonth = new Date().getMonth() + 1;
        let dateDay = new Date().getDate();
        let date = dateDay + "/" + dateMonth + "/" + dateYear;

    }    
}