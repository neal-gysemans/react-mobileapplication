import { Text,View } from "react-native"
import { useEffect, useRecoilState, useState } from "react";
import { farmState, todoListState } from "../store";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function HomeScreen() {
    const farm = useRecoilValue(farmState);
    const setFarm = useSetRecoilState(farmState);
    const [index, setIndex] = useState(1);
    
    useEffect(() => {
        setFarm(1);
    }, [])
    
    return (
        
        <View>
            <Text>Home</Text>
            <Text>{farm}</Text>
            
        </View>
        
    );
}