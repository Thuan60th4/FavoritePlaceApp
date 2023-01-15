import { useEffect, useState } from "react";
import PlaceList from "../components/Place/PlaceList";

function AllPlaceScreen({ route }) {
  const [listPlace, setListPlace] = useState([]);

  useEffect(() => {
    //để ý if ở đây vì useEffect luôn chạy khi lần đầu tiên component đc render
    // vì vậy lần đầu tiên nó sẽ thêm cái undefined của route.params vô mảng sẽ bị lỗi
    if (route.params) setListPlace((prevList) => [route.params, ...prevList]);
  }, [route.params]);

  return <PlaceList places={listPlace} />;
}

export default AllPlaceScreen;
