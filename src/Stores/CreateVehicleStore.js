import React from "react";
import { nanoid } from "nanoid";

export default function CreateVehicleStore() {
  return {
    vehicleApp: [],
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
    complete(el) {
      this.vehicleApp = this.vehicleApp.filter((e) => {
        if (e.id === el.id) {
          e.done = true;
          return e;
        } else {
          return e;
        }
      });
    },

    incomplete(el) {
      this.vehicleApp = this.vehicleApp.filter((e) => {
        if (e.id === el.id) {
          e.done = false;
          return e;
        } else {
          return e;
        }
      });
    },
  };
}
