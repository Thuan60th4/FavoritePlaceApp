import { Alert, Image, View, Text, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

import { Colors } from "../../constants/colors";
import CustomButton from "../UI/CustomButton";

function ImagePicker({ handleImage }) {
  const [cameraPermissionStatus, requestCameraPermission] =
    useCameraPermissions();

  const [imageUri, setImageUri] = useState(null);

  const verifyPermissions = async () => {
    if (cameraPermissionStatus.status == PermissionStatus.UNDETERMINED) {
      const result = await requestCameraPermission();
      return result.granted;
    }
    if (cameraPermissionStatus.status == PermissionStatus.DENIED) {
      Alert.alert(
        "insufficient permission",
        "You need to grant the camera permission to use this app"
      );
      return false;
    }
    return true;
  };

  const handleTakePicture = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImageUri(image.assets[0].uri);
    handleImage(image.assets[0].uri);
  };
  return (
    <View>
      <View style={styles.imageConatiner}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text>No image taken yet</Text>
        )}
      </View>
      <CustomButton onPress={handleTakePicture} icon="camera">
        Take Picture
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imageConatiner: {
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
});

export default ImagePicker;
