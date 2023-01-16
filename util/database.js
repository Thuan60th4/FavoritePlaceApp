import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("placesDb");

export function Init() {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
             id INTEGER PRIMARY KEY NOT NULL,
             title TEXT NOT NULL,   
             imageUri TEXT NOT NULL,
             address TEXT NOT NULL,
             lat REAL NOT NULL,
             lng REAL NOT NULL
            )`,
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
}

export function InsertPlace(place) {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      // viết mấy dấu ? ở value để dữ chỗ hoặc viết trưucj tiếp các giá trị vô cũg đc
      tx.executeSql(
        `INSERT INTO places (title,imageUri,address,lat,lng) VALUES (?,?,?,?,?)`,
        [
          place.titleValue,
          place.imageValue,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, res) => {
          resolve(res);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}

export function getPlaces() {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places ORDER BY id DESC`,
        [],
        (_, res) => {
          resolve(res);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}

export function getDetailPlace(id) {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places WHERE id =?`,
        [id],
        (_, res) => {
          resolve(res);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
}
