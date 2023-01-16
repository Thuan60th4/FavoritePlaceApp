import { Alert } from "react-native";
import PlaceForm from "../components/Place/PlaceForm";
import { InsertPlace } from "../util/database";

function AddPlaceScreen({ navigation }) {
  const handleAddPlaceToList = async ({
    titleValue,
    imageValue,
    locationValue: { address, ...location },
  }) => {
    try {
      const result = await InsertPlace({
        titleValue,
        imageValue,
        address,
        location,
      });
      navigation.navigate("AllPlace");
    } catch (error) {
      Alert.alert("Invalid value", "Please type all values and try again");
    }
  };
  return <PlaceForm handleAddPlaceToList={handleAddPlaceToList} />;
}

export default AddPlaceScreen;
