import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { useVehicleStore } from "./Components/VheicleContext";
import { Observer } from "mobx-react-lite";
import { Button, TextField } from "@mui/material";
import Vheicles from "./Components/Vheicles";

function App() {
  const vheicleStore = useVehicleStore();

  const [value, setValue] = useState("");
  return (
    <Observer>
      {() => {
        return (
          <div className="App">
            <div className="input-todo">
              <TextField
                value={value}
                id="outlined-basic"
                label="Add Todo"
                variant="outlined"
                size="small"
                onChange={(e) => setValue(e.target.value.trim())}
              />
              <Button
                variant={"contained"}
                color={"primary"}
                onClick={() => {
                  if (value !== "") {
                    vheicleStore.addVehicle(value);
                  }
                  setValue("");
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
