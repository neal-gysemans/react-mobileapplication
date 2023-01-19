import { Text, View, Dimensions } from "react-native";

// Theme
import useThemedStyles from "../../styles/theme/useThemedStyles";
import { text } from "../../styles/styles";
import { background } from "../../styles/styles";

import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

export default function Stat_flowersOverPeriod(props){
  // Styling (theme)
  const textColor = useThemedStyles(text);
  const backgroundColor = useThemedStyles(background);
  return (
    <>
      <Text style={{color: textColor}}>Amount of flowers over the years</Text>
      <LineChart
        data={props.data}
        width={Dimensions.get("window").width - 30} // Width of screen - width of body - width of padding
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: textColor,
          backgroundGradientTo: textColor,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => backgroundColor,
          labelColor: () => backgroundColor,
          propsForDots: {
            r: "6",
            strokeWidth: "2.5",
            stroke: backgroundColor
          }
        }}
        style={{
          backgroundColor: backgroundColor,
        }}
      />
    </>
    )
};