import axios from "axios";

const GOOGLE_API_KEY = "AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress({ lat, lng }) {
  // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  // const res = await axios.get(url);
  // const address = res.data.results[0].formatted_address;
  return "To 10-Nam Giang-Nam Truc-Nam Dinh";
}
