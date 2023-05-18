import React from "react";
import { Observer, useObserver } from "mobx-react-lite";
import { useVehicleStore } from "./VheicleContext";

export default function ListVheicle() {
  const vehicleStore = useVehicleStore();
  return useObserver(() => {
    return (
      <div className="list">
        <h4>List</h4>
        <h5>Remaining</h5>
        <ul style={{ minHeight: "20vh" }}>
          {vehicleStore.todoList.map((el) => {
            if (!el.done) {
              return (
                <li key={el.id} className="item remaining">
                  <p>{el.content}</p>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <h5>Done</h5>
        <ul style={{ minHeight: "20vh" }}>
          {vehicleStore.todoList.map((el) => {
            if (el.done) {
              return (
                <li key={el.id} className="item done">
                  <p>{el.content}</p>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  });
}
