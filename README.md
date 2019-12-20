# Fokin Weather
Learning React Native by Building a Foking Weather App

# 관련된 웹사이트
- https://docs.expo.io/versions/latest/sdk/location/
- https://openweathermap.org/
- https://expo.github.io/vector-icons/


# App.js 실행시 발생했던 오류
`Expo fails to start the project: error Invalid regular expression: /(.*\\__fixtures__`
라는 에러를 뱉었다.

이는 node_modules/metro-config/src/defults/blackilst.js 에서 sharedBlacklist를 수정하면서 해결했다.

맨 첫줄을 수정해 주어야 하는데 다음과 같이 수정하면 된다.

Before : `/node_modules[/\\]react[/\\]dist[/\\].`

After  : `/node_modules[\/\\]react[\/\\]dist[\/\\].`

expo를 실행시키다가 오류가 나면 blacklist.js 파일이 오류가 나는 코드로 바뀌는데
왜인지는 잘 모르겠다.