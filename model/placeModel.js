class placeModel {
  constructor(title, imageUri, address, location) {
    this.id = Math.random().toString;
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{kinh do : 0.25476 , vi do : 0.2676}
  }
}
