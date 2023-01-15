import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { Alert, Pressable, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

function MapScreen() {
  const [selectLocation, setSelectLocation] = useState();
  const navigation = useNavigation();
  const region = {
    latitude: 20.43389,
    longitude: 106.17729,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const handlePickLocation = (e) => {
    setSelectLocation({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };

  const saveLocation = () => {
    if (!selectLocation) {
      Alert.alert(
        "Please select location",
        "You haven't selected location yet"
      );
      return;
    }
    navigation.navigate("AddPlace", selectLocation);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={({ pressed }) => pressed && { opacity: 0.7 }}
          onPress={saveLocation}
        >
          <Text style={{ fontSize: 18, marginTop: 7 }}>Save</Text>
        </Pressable>
      ),
    });
    //phải phụ thuộc cái hàm saveLocation ở đây hoặc selectLocation
    //nếu ko cái onPress kia sẽ chỉ nhận cái lần đầu tiên tức là luôn luôn chưa có selectLocation kể cả mình có chọn
  }, [saveLocation]);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={region}
      onPress={handlePickLocation}
    >
      {selectLocation && (
        <Marker title="Picked Location" coordinate={selectLocation} />
      )}
    </MapView>
  );
}

export default MapScreen;
