import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Observer } from "mobx-react-lite";
import { useVehicleStore } from "./VehicleContext";

export default function Vehicles() {
  const vehicleStore = useVehicleStore();

  useEffect(() => {
    vehicleStore.getVehicles();
  });

  const destroy = (id) => {
    vehicleStore.delete(id);
  };

  return (
    <Observer>
      {() => {
        return (
          <div className="incomplete">
            <h4>Vehicles</h4>
            <ul>
              {vehicleStore.vehicles.map((el) => {
                if (!el.done) {
                  return (
                    <li key={el.id} className="item">
                      <p>
                        {el.name} <span>{el.abr}</span> ----
                        <span>{el.id}</span>
                      </p>
                      <Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={() => {
                          destroy(el.id);
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
