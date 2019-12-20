import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
      // 받은 값들을 API로 보내서 날씨를 받아올거야!
    } catch (error) {
      Alert.alert("당신을 찾을 수 없네요ㅠㅠ", "너무 슬픕니다..")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
