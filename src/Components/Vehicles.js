import React from "react";
import { Button } from "@mui/material";
import { Observer } from "mobx-react-lite";
import { useVehicleStore } from "./VehicleContext";

export default function Vehicles() {
  const vehicleStore = useVehicleStore();
  return (
    <Observer>
      {() => {
        return (
          <div className="incomplete">
            <h4>Vehicles</h4>
            <ul>
              {vehicleStore.vehicleApp.map((el) => {
                if (!el.done) {
                  return (
                    <li key={el.id} className="item">
                      <p>
                        {el.name} <span>{el.abr}</span>
                      </p>

                      <Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={() => {
                          vehicleStore.complete(el);
                        }}
                        size={"small"}
                      >
                        Delete
                      </Button>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        );
      }}
    </Observer>
  );
}
