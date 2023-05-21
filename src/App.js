import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { useVehicleStore } from "./Components/VehicleContext";
import { Observer } from "mobx-react-lite";
import { Button, TextField } from "@mui/material";
import Vheicles from "./Components/Vehicles";
import axios from "axios";

function App() {
  const vehicleStore = useVehicleStore();

  const [value, setValue] = useState("");
  const [val, setVal] = useState("");

  const data = axios
    .get("http://localhost:8000/vehicles", {
      responseType: "json",
    })
    .then((res) => {
      res.data.map((el) => vehicleStore.vehicleApp.push(el));
    });

  return (
    <Observer>
      {() => {
        return (
          <div className="App">
            <div className="input-vehicle">
              <TextField
                value={value}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                onChange={(e) => setValue(e.target.value.trim())}
              />
              <TextField
                value={val}
                id="outlined-basic"
                label="Brand"
                variant="outlined"
                size="small"
                onChange={(e) => setVal(e.target.value.trim())}
              />
              <Button
                variant={"contained"}
                color={"primary"}
                onClick={() => {
                  if (value !== "" && val !== "") {
                    vehicleStore.addVehicle(value, val);
                  }
                  setValue("");
                  setVal("");
                }}
              >
                Add
              </Button>
            </div>
            <Vheicles />
          </div>
        );
      }}
    </Observer>
  );
}

export default App;
