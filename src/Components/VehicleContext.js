import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import createVheicleStore from "../Stores/CreateVehicleStore";

const VehicleContext = createContext(null);

export const VehicleProvider = ({ children }) => {
  const VehicleStore = useLocalObservable(createVheicleStore);
  return (
    <VehicleContext.Provider value={VehicleStore}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicleStore = () => useContext(VehicleContext);
