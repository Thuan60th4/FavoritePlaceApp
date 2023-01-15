import PlaceForm from "../components/Place/PlaceForm";
import placeModel from "../model/placeModel";

function AddPlaceScreen({ navigation }) {
  const handleAddPlaceToList = ({
    titleValue,
    imageValue,
    locationValue: { address, ...location },
  }) => {
    const place = new placeModel(titleValue, imageValue, address, location);
    navigation.navigate("AllPlace", place);
  };
  return <PlaceForm handleAddPlaceToList={handleAddPlaceToList} />;
}

export default AddPlaceScreen;
