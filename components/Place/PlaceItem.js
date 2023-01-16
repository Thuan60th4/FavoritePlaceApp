import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

function PlaceItem({ place }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.7 }]}
      android_ripple={{ color: Colors.primary400 }}
      onPress={() => {
        navigation.navigate("DetailPlace", { id: place.id });
      }}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.primary500,
    margin: 20,
    marginBottom: 7,
    borderRadius: 7,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  image: {
    height: 100,
    flex: 1,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  info: {
    flex: 2,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 14,
    color: Colors.gray700,
  },
});

export default PlaceItem;
