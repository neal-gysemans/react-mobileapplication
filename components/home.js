import { Text, View, TouchableOpacity } from "react-native";

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

// Icons
import { Icon } from "@react-native-material/core";

// Statistics
import Stat_flowerOverPeriod from "./visualisations/statistics_flowersOverPeriod";
import Stat_heatmap from "./visualisations/statistics_heatmap";
import Stat_interesting from "./visualisations/stat_test";

export default function HomeScreen({ navigation }) {
    // Styling (theme)
    const style = useThemedStyles(styles);

    // Data for linechart
    const lineChartLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];
    const lineChartDataset =  {data: [Math.random() * 30 + 60, Math.random() * 30 + 60, Math.random() * 30 + 60, Math.random() * 30 + 60, Math.random() * 30 + 60, Math.random() * 30 + 60 ]}
    const data = {
        labels: lineChartLabels,
        datasets: [lineChartDataset]
      }

    // Size of icon
    const size = 40;
    return (
        <View style={style.body}>
            <TouchableOpacity style={[style.largeCameraButton, style.component]} onPress={() => {navigation.navigate('Camera')}}>
                <Icon name="camera-iris" size={size} style={style.largeCameraButtonText}/>
            </TouchableOpacity>
            <Stat_flowerOverPeriod data={data}/>
            <Stat_interesting 
                label="estimated number of strawberries on field 1"
                data={17259}    
            />
            <Stat_heatmap/>
        </View>
    );
}