import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

function CustomButton({ icon, children, onPress, style }) {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        style={({ pressed }) => [styles.pressable, pressed && { opacity: 0.7 }]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary200 }}
      >
        <Ionicons
          style={styles.icon}
          name={icon}
          size={25}
          color={Colors.primary500}
        />
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.primary100,
    borderColor: Colors.primary500,
    borderWidth: 1,
    marginVertical: 8,
  },
  pressable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 9,
  },
  icon: {
    marginRight: 8,
    marginTop: 1,
  },
  text: {
    fontSize: 19,
    color: Colors.primary500,
  },
});

export default CustomButton;
