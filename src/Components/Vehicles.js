import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Observer } from "mobx-react-lite";
import { useVehicleStore } from "./VehicleContext";
import { useNavigate } from "react-router-dom";

export default function Vehicles() {
  const vehicleStore = useVehicleStore();

  useEffect(() => {
    vehicleStore.getVehicles();
  });

  const destroy = (id) => {
    vehicleStore.delete(id);
  };

  let navigate = useNavigate();

  return (
    <Observer>
      {() => {
        return (
          <div className="listVehicle">
            {vehicleStore.vehicles.map((el) => {
              return (
                <div key={el.id} className="item">
                  <p>Name: {el.name} </p>

                  <p>Model: {el.abr}</p>
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
                  <Button
                    variant={"outlined"}
                    color={"primary"}
                    size={"small"}
                    onClick={() =>
                      navigate(`/edit/${el.id}/${el.name}/${el.abr}`)
                    }
                  >
                    Edit
                  </Button>
                </div>
              );
            })}
          </div>
        );
      }}
    </Observer>
  );
}
