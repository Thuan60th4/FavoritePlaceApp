import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

import { Init } from "./util/database";
import { Colors } from "./constants/colors";
import IconButton from "./components/UI/IconButton";
import AllPlaceScreen from "./screens/AllPlace";
import AddPlaceScreen from "./screens/AddPlace";
import MapScreen from "./screens/Map";
import PlaceDetail from "./screens/PlaceDetail";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    Init()
      .then(() => SplashScreen.hideAsync())
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlace"
            component={AllPlaceScreen}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  name="add"
                  size={26}
                  color={tintColor}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlaceScreen}
            options={{
              title: "Add a new place",
            }}
          />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen
            name="DetailPlace"
            component={PlaceDetail}
            options={{
              title: "Loading title...",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
