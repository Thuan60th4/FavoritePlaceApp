import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getDetailPlace } from "../util/database";
import CustomButton from "../components/UI/CustomButton";
import { Colors } from "../constants/colors";

function PlaceDetail({ route, navigation }) {
  const [PlaceDetail, setPlaceDetail] = useState();
  useEffect(() => {
    getDetailPlace(route.params.id).then((place) => {
      setPlaceDetail(place.rows._array[0]);
      navigation.setOptions({
        title: place.rows._array[0].title,
      });
    });
  }, []);
  return (
    <>
      {PlaceDetail && (
        <View style={styles.container}>
          <Image source={{ uri: PlaceDetail.imageUri }} style={styles.image} />
          <Text style={styles.title}>{PlaceDetail.address}</Text>
          <CustomButton
            icon="map"
            onPress={() => {
              navigation.navigate("Map", {
                lat: PlaceDetail.lat,
                lng: PlaceDetail.lng,
              });
            }}
          >
            View On Map
          </CustomButton>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 250,
    width: "100%",
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    color: Colors.primary500,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default PlaceDetail;

//  [{"address": "To 10-Nam Giang-Nam Truc-Nam Dinh", "id": 2, "imageUri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FFavoritePlaceApp-8d75d104-8d87-4c22-9ee7-e2ffc06b08e2/ImagePicker/57d57d9b-ac66-42ea-855e-087f0d86d4a9.jpeg", "lat": 37.4217937, "lng": -122.083922, "title": "ok"}]
