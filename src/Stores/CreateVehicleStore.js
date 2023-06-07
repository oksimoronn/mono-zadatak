import axios from "axios";

export default function CreateVehicleStore() {
  return {
    vehicles: [],

    setVehicles(vehicels) {
      this.vehicles = vehicels;
    },

    async getVehicles() {
      try {
        const response = await axios.get("http://localhost:8000/vehicles");
        const vehicles = response.data;
        this.setVehicles(vehicles);
      } catch (error) {
        console.error("Cant get Vehicles", error);
      }
    },

    async delete(id) {
      try {
        await axios.delete(`http://localhost:8000/vehicles/${id}`);
        this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);
      } catch (error) {
        console.error("Cant delete vehicle", error);
      }
    },
  };
}
