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

    async createVihecle(newVehicle) {
      try {
        const response = await axios.post(
          "http://localhost:8000/vehicles",
          newVehicle
        );
        const newEntry = response.data;
        this.vehicles.push(newEntry);
      } catch (error) {
        console.log("Cant create new vehicle", error);
      }
    },

    async updateVehicle(updateVehicle) {
      try {
        await axios.put(
          `http://localhost:8000/vehicles/${updateVehicle.id}`,
          updateVehicle
        );
        //const updatedVehicle = response.data;
        this.vehicles = this.vehicles.map((el) =>
          el.id === updateVehicle.id ? updateVehicle : el
        );
      } catch (error) {
        console.log(`Cant update vehicle with id: ${updateVehicle.id}`, error);
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
