import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlaceList from "../components/Place/PlaceList";
import { getPlaces } from "../util/database";

function AllPlaceScreen({ route }) {
  const [listPlace, setListPlace] = useState([]);
  const isFocus = useIsFocused();

  useEffect(() => {
    //để ý if ở đây vì useEffect luôn chạy khi lần đầu tiên component đc render
    // vì vậy lần đầu tiên nó sẽ thêm cái undefined của route.params vô mảng sẽ bị lỗi
    // if (route.params) setListPlace((prevList) => [route.params, ...prevList]);
    getPlaces()
      .then((places) => {
        setListPlace(places.rows._array);
      })
      .catch((err) => {
        console.log(err);
      });
    //Nếu 1 màn hình mà có nút chuyển đến màn hình khác và màn hình đc chuyển đến đó
    // cũng có nút chuyển ngược lại thì màn hình đó chỉ là trồng lên nhau
    //nên cần có 1 cái gì đó phụ thuộc để nó load lại
  }, [isFocus]);

  return <PlaceList places={listPlace} />;
}

export default AllPlaceScreen;
