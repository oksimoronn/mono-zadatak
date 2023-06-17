import axios from "axios";

export default function CreateVehicleStore() {
  return {
    vehicles: [],
    paginateVehicles: [],
    currPg: 0,
    totalPg: 0,
    itemPP: 5,

    setVehicles(vehicels) {
      this.vehicles = vehicels;
    },

    setPaginateVehicles(vehicels) {
      this.paginateVehicles = vehicels;
    },

    setCurrPg(curPage) {
      this.currPg = curPage;
    },

    setTotalPg(total) {
      this.totalPg = total;
    },

    setItemPP(ipp) {
      this.itemPP = ipp;
    },

    async getVehicles(numb) {
      try {
        const response = await axios.get("http://localhost:8000/vehicles");
        const vehicles = response.data;
        this.setVehicles(vehicles);

        let totalPg = Math.ceil(vehicles.length / this.itemPP);

        this.setTotalPg(totalPg);
        this.setItemPP(numb);

        const start = this.currPg * this.itemPP;

        const end = this.currPg + this.itemPP;

        const set = vehicles.slice(start, end);

        this.setPaginateVehicles(set);
      } catch (error) {
        console.error("Cant get Vehicles", error);
      }
    },
    async getVehiclesPaginate(start, end) {
      try {
        const response = await axios.get("http://localhost:8000/vehicles");
        const vehicles = response.data;
        let totalPg = Math.ceil(vehicles.length / this.itemPP);

        this.setTotalPg(totalPg);

        const set = vehicles.slice(start, end);

        this.setPaginateVehicles(set);
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
        this.paginateVehicles.push(newEntry);
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

        this.vehicles = this.vehicles.map((el) =>
          el.id === updateVehicle.id ? updateVehicle : el
        );
        this.paginateVehicles = this.paginateVehicles.map((el) =>
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
        this.paginateVehicles = this.paginateVehicles.filter(
          (vehicle) => vehicle.id !== id
        );
      } catch (error) {
        console.error("Cant delete vehicle", error);
      }
    },
  };
}
