import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm() {
  const [titleValue, setTitleValue] = useState("");
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
      <ImagePicker />
      <LocationPicker />
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
