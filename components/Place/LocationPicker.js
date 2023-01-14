import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import { Colors } from "../../constants/colors";
import CustomButton from "../UI/CustomButton";
import { getMapPreview } from "../../util/location";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function LocationPicker() {
  const [locationPermissionStatus, requestLocationPermission] =
    useForegroundPermissions();
  const [pickLocation, setPickLocation] = useState();
  const navigation = useNavigation();

  const verifyPermissions = async () => {
    if (locationPermissionStatus.status == PermissionStatus.UNDETERMINED) {
      const result = await requestLocationPermission();
      return result.granted;
    }
    if (locationPermissionStatus.status == PermissionStatus.DENIED) {
      Alert.alert(
        "insufficient permission",
        "You need to grant the location permission to use this app"
      );
      return false;
    }
    return true;
  };

  const getLocationhandle = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  const pickLocationHandle = () => {
    navigation.navigate("Map");
  };

  return (
    <View>
      <View style={styles.mapPreview}>
        {pickLocation ? (
          <Image
            source={{ uri: getMapPreview(pickLocation.lat, pickLocation.lng) }}
            style={styles.image}
          />
        ) : (
          <Text>No location taken yet</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton onPress={getLocationhandle} icon="location">
          Loction User
        </CustomButton>
        <CustomButton onPress={pickLocationHandle} icon="map">
          Pick On Map
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: Colors.primary200,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default LocationPicker;
