import React from "react";
import { useVehicleStore } from "./VehicleContext";
import { useNavigate, useParams } from "react-router";

export default function EditVehicle() {
  const vehicleStore = useVehicleStore();

  const params = useParams();
  const navigate = useNavigate();

  const createNewVehicle = (e) => {
    e.preventDefault();
    const newVehicle = {
      id: params.id,
      name: e.target.name.value,
      abr: e.target.abr.value,
    };
    vehicleStore.updateVehicle(newVehicle);
    navigate("/");
  };

  return (
    <div className="editForm">
      <h1>Edit Vehicle</h1>
      <form onSubmit={createNewVehicle}>
        <input type="text" name="name" defaultValue={params.name}></input>
        <input type="text" name="abr" defaultValue={params.abr}></input>
        <button type="submit" value="Submit">
          Save
        </button>
      </form>
    </div>
  );
}
