import React from "react";

import { useState } from "react";
import { useVehicleStore } from "./VehicleContext";
import { Observer } from "mobx-react-lite";
import { nanoid } from "nanoid";
import Vheicles from "./Vehicles";

export default function Home() {
  const vehicleStore = useVehicleStore();

  const [make, setMake] = useState("");

  const createNewVehicle = () => {
    if (make) {
      const newVehicle = {
        id: nanoid(),
        name: make,
        abr: "neki",
      };
      vehicleStore.createVihecle(newVehicle);
      setMake("");
    }
  };

  return (
    <Observer>
      {() => {
        return (
          <div className="App">
            <div className="input-vehicle">
              <input
                type="text"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              ></input>
              <button onClick={createNewVehicle}>Create New Vehicle</button>
            </div>
            <Vheicles />
          </div>
        );
      }}
    </Observer>
  );
}
