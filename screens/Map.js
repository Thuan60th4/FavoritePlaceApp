import MapView from "react-native-maps";

function MapScreen() {
  const region = {
    latitude: 20.43389,
    longitude: 106.17729,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={{ flex: 1 }} initialRegion={region} />;
}

export default MapScreen;
