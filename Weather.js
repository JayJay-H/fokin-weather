import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

// 받아온 날씨와 관련된 아이콘과 설명이 들어있다.
const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning", // @expo/vector-icons에 있는 MaterialCommunityIcons중 weather-lightning
        gradient: ["#373B44", "#4286f4"], // gradient를 위한 색깔, 앞의 색깔이 위쪽 색깔이고 뒤의 색깔이 아래쪽 색깔이 된다.
        title: "온 집안에 천둥번개가 치네요!!", // 제목
        subtitle: "사실 집 밖이긴 합니다" // 부제목
      },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "보슬비가 내려요 헤어진 그대가 생각나네요",
        subtitle: "노래 가사는 아니에요"
      },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비오는 거 진짜 싫지 않아요?",
        subtitle: "우산 꼭 챙기세요!"
      },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈이 와요 눈이 와!!!",
        subtitle: "눈사람은 못만들거에요ㅋㅋ"
      },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
      },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "와 날씨 진짜 좋다!",
        subtitle: "집 밖으로 한번 나가보는게 어때요?"
      },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "구름낀 날이에요",
        subtitle: "집에서 드라마보면서 귤 먹는게 어떨까요?"
      },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "앞이 안 보일 정도로 안개가 꼈어요!!",
        subtitle: "거짓말이지롱"
      },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "어우 이 미세먼지좀 봐요!! 목이 칼칼해;;",
        subtitle: "고마워요 중국 🖕🏻"
      },
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "눈이 이상한 건가? 왜 뿌옇게 보이지?",
        subtitle: "옅게 안개가 꼈답니다!"
      }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient // 맨 바깥쪽을 LinearGradient로 감싼다.
        colors={weatherOptions[condition].gradient} // weatherOptions[날씨].색깔들
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <View style={styles.halfContainer}> 
          <MaterialCommunityIcons
            size={96}
            name={weatherOptions[condition].iconName}
            color="white"
          />
          <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </LinearGradient>
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
        flex: 1
      },
      temp: {
        fontSize: 42,
        color: "white"
      },
      halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
      },
      subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
      },
      textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
      }
});