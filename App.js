import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from './Weather';

// 날씨를 받아오기 위한 API_KEY
const API_KEY = "03cb05608b9619bbdc253f4c047d0339";

export default class extends React.Component {
  state = { // 앱을 실행했을 때의 상태는 Loading 상태이므로 isLoading을 true로 놓는다.
    isLoading: true
  };
  getWeather = async(latitude, longitude) => { // async는 다른 함수가 끝나기를 기다리도록 할 때 사용한다.
    const { 
      data: {
        main: { temp },
        weather
      } 
    } = await axios.get( // axios를 통해 웹을 통해 받는 데이터를 가져온다.
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false, // Loading이 끝났으니 isLoading은 false
        condition: weather[0].main, // 날씨는 weather의 배열에서 0 번째에 있는 main에 존재한다.
        temp // 온도
      });
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync(); // 사용자위치에 엑세스 하기 위해 권한을 먼저 받는다.
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync(); // expo-location의 API를 통해 위치를 받고, 위도와 경도만 따로 빼서 latitude, longitude에 넣어준다.
      this.getWeather( latitude, longitude ); // 받은 위도와 경도를 통해 그 위치에 대한 날씨 정보를 받는다.
    } catch (error) { // 사용자가 위치권한을 주지 않았다면 다음과 같은 메시지를 뿌린다.
      Alert.alert("당신을 찾을 수 없네요ㅠㅠ", "너무 슬픕니다..")
    }
  }
  componentDidMount(){ // 컴포넌트들이 마운트되었다면 getLocation 함수를 실행시킨다.
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition } = this.state; // state에 저장된 isLoading, temp, condition을 똑같은 이름의 변수에 저장한다.
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />; // isLoading이 true라면 로딩 화면을 false라면 날씨와 관련된 화면을 보여준다.
  }
}
