import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import { getAddress } from "../../util/location";
import CustomButton from "../UI/CustomButton";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm({ handleAddPlaceToList }) {
  const [titleValue, setTitleValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  const handleImage = (value) => {
    setImageValue(value);
  };

  const handleLocation = async (value) => {
    const location = await getAddress(value);
    setLocationValue({ address: location, ...value });
  };

  const handleAddPlace = () => {
    handleAddPlaceToList({ titleValue, imageValue, locationValue });
  };
  return (
    <ScrollView style={styles.conatainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleLabel}>Title</Text>
        <TextInput
          style={styles.titleInput}
          value={titleValue}
          onChangeText={(e) => setTitleValue(e)}
        />
      </View>
      <ImagePicker handleImage={handleImage} />
      <LocationPicker handleLocation={handleLocation} />
      <CustomButton
        onPress={handleAddPlace}
        style={{ backgroundColor: Colors.primary50 }}
      >
        Add Place
      </CustomButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    margin: 20,
  },
  titleContainer: {},
  titleLabel: {
    color: Colors.primary500,
    fontSize: 17,
    fontWeight: "bold",
  },
  titleInput: {
    marginVertical: 10,
    backgroundColor: Colors.primary200,
    fontSize: 18,
    color: Colors.primary700,
    padding: 7,
  },
});

export default PlaceForm;
