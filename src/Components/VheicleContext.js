import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react-lite";
import createVheicleStore from "../Stores/createVheicleStore";

const VheicleContext = createContext(null);

export const VheicleProvider = ({ children }) => {
  const VehicleStore = useLocalObservable(createVheicleStore);
  return (
    <VheicleContext.Provider value={VehicleStore}>
      {children}
    </VheicleContext.Provider>
  );
};

export const useVehicleStore = () => useContext(VheicleContext);
