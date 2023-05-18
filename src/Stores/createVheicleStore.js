import React from "react";
import { nanoid } from "nanoid";

export default function createVheicleStore() {
  return {
    vehicleApp: [],
    addVehicle(name) {
      const vehicle = {
        id: nanoid(),
        content: name,
        //maker: maker,
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
