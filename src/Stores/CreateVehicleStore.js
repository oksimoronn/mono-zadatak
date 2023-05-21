import React from "react";
import { nanoid } from "nanoid";
import axios from "axios";

export default function CreateVehicleStore() {
  const data = fetch("http://localhost:8000/vehicles")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err.message));

  //console.log(data);

  return {
    vehicleApp: [],
    /*initialState() {
      const data = axios.get("http://localhost:8000/vehicles").then((res) => {
        return res;
      });
      data.map((el) => this.vehicleApp.push(el));
      console.log(data);
    },*/

    addVehicle(name, brand) {
      const vehicle = {
        id: nanoid(),
        name: name,
        abr: brand,
        done: false,
      };
      this.vehicleApp.push(vehicle);
    },

    //complee i incomplete su funkcije koje treba prebaciti u CRUD
    delete(el) {
      this.vehicleApp = this.vehicleApp.filter((e) => {
        if (e.id === el.id) {
          e.done = true;
          return e;
        } else {
          return e;
        }
      });
    },
  };
}
