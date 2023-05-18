import React from "react";
import { Button } from "@mui/material";
import { Observer } from "mobx-react-lite";
import { useVehicleStore } from "./VheicleContext";

export default function Vheicles() {
  const vheicleStore = useVehicleStore();
  return (
    <Observer>
      {() => {
        return (
          <div className="incomplete">
            <h4>Remaining Tasks</h4>
            <ul>
              {vheicleStore.vehicleApp.map((el, index) => {
                if (!el.done) {
                  return (
                    <li key={el.id} className="item">
                      <p>{el.content}</p>
                      <Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={() => {
                          vheicleStore.complete(el);
                        }}
                        size={"small"}
                      >
                        Done
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
