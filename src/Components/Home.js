import React from "react";
import { useVehicleStore } from "./VehicleContext";
import { Observer } from "mobx-react-lite";
import { nanoid } from "nanoid";
import Vheicles from "./Vehicles";

export default function Home() {
  const vehicleStore = useVehicleStore();

  const createNewVehicle = (e) => {
    e.preventDefault();

    if (e.target.name.value) {
      const newVehicle = {
        id: nanoid(),
        name: e.target.name.value,
        abr: e.target.abr.value,
      };
      vehicleStore.createVihecle(newVehicle);
    }
    e.target.name.value = "";
    e.target.abr.value = "";
  };

  return (
    <Observer>
      {() => {
        return (
          <>
            <div className="App">
              <div className="input-vehicle">
                <form onSubmit={createNewVehicle}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Manufacturer "
                  ></input>
                  <input
                    type="text"
                    name="abr"
                    placeholder="Model name"
                  ></input>
                  <button type="submit" value="Submit">
                    Create
                  </button>
                </form>
              </div>
              <Vheicles />
            </div>
          </>
        );
      }}
    </Observer>
  );
}
