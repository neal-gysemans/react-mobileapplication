import { View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";

// Theme
import useThemedStyles from "../styles/theme/useThemedStyles";
import { styles } from "../styles/styles";

// Icons
import { Icon } from "@react-native-material/core";

// Statistics
import Stat_lineChart from './visualisations/statistics_lineChart'
import Stat_BarChart from './visualisations/statistics_barChart'
import Stat_heatmap from "./visualisations/statistics_heatmap";
import Stat_interesting from "./visualisations/statistics_interesting";

export default function HomeScreen({ navigation }) {
    // Styling (theme)
    const style = useThemedStyles(styles);

    // Data for linechart
    const lineChartTitle = "Amount of flowers over the years";
    const lineChartLabels = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];
    const lineChartDataset =  [{data: [Math.round((Math.random() * 30 + 60) * 100) / 100, Math.round((Math.random() * 30 + 60) * 100) / 100, Math.round((Math.random() * 30 + 60) * 100) / 100, Math.round((Math.random() * 30 + 60) * 100) / 100, Math.round((Math.random() * 30 + 60) * 100) / 100, Math.round((Math.random() * 30 + 60) * 100) / 100, Math.round((Math.random() * 30 + 60) * 100) / 100]}]
    const lineChartData = { labels: lineChartLabels, datasets: lineChartDataset }

    // Data for barchart
    const barChartTitle = "Amount of flowers this year";
    const barChartLabels = ["January", "February", "March"];
    const barChartDataset = [{data: [Math.round((Math.random() * 30 + 60) * 100) / 100, Math.round((Math.random() * 30 + 60) * 100) / 100, Math.round((Math.random() * 30 + 60) * 100) / 100]}];
    const barChartData = { labels: barChartLabels, datasets: barChartDataset};

    // Padding for charts
    // This needs to be the sum of all the surounding paddings
    // If paddingCharts = 0 the width of the chart will be equal to the width of the screen
    const paddingCharts = 30;
    // Size of icon
    const size = 40;
    return (
        <View style={style.body}>
            <ScrollView>
                    <TouchableOpacity style={[style.largeCameraButton, style.mb10]} onPress={() => {navigation.navigate('Camera')}}>
                        <Icon name="camera-iris" size={size} style={style.largeCameraButtonText}/>
                    </TouchableOpacity>
                    <Stat_lineChart 
                        title={lineChartTitle}
                        data={lineChartData}
                        padding={paddingCharts}
                    />
                    <Stat_BarChart 
                        title={barChartTitle}
                        data={barChartData}
                        padding={paddingCharts}
                    />
                    <Stat_interesting 
                        title="Estimated number of strawberries on field 1"
                        beforeData=""
                        afterData=" strawberries"
                        data={17259}    
                    />
                    <Stat_heatmap/>
            </ScrollView>
                </View>
    );
}