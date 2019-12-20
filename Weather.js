import React from "react";
import { View, Text, StyleSheet } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Weather({temp}){
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name="weather-lightning-rainy" />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>   
        </View>
    )
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
        "Smoke",
        "Fog",
        "Sand",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});