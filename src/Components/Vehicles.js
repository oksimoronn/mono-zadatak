import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Observer } from "mobx-react-lite";
import { useVehicleStore } from "./VehicleContext";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Vehicles() {
  const vehicleStore = useVehicleStore();

  let navigate = useNavigate();

  const [page, setPage] = useState(5);

  const destroy = (id) => {
    vehicleStore.delete(id);
  };

  const pageC = (event) => {
    const selected = event.selected + 1;
    let start = event.selected * vehicleStore.itemPP;
    let end = selected * vehicleStore.itemPP;
    vehicleStore.getVehiclesPaginate(start, end);
  };

  const itemsPerPage = (e) => {
    let numb = 5;
    numb = +e.target.value;
    setPage(numb);
    vehicleStore.getVehicles(numb);
  };

  useEffect(() => {
    vehicleStore.getVehicles(page);
  }, [vehicleStore, page]);

  return (
    <Observer>
      {() => {
        return (
          <>
            <div>
              <form onChange={itemsPerPage} onSelect={pageC}>
                <label>
                  Items per page:
                  <select>
                    <option name="pp" value="5">
                      5
                    </option>
                    <option name="pp" value="10">
                      10
                    </option>
                    <option name="pp" value="15">
                      15
                    </option>
                  </select>
                </label>
              </form>
            </div>
            <div className="listVehicle">
              {vehicleStore.paginateVehicles.map((el) => {
                return (
                  <div key={el.id} className="item">
                    <p>Name: {el.name} </p>

                    <p>Model: {el.abr}</p>
                    <Button
                      variant={"outlined"}
                      color={"primary"}
                      onClick={() => {
                        destroy(el.id);
                      }}
                      size={"small"}
                    >
                      Delete
                    </Button>
                    <Button
                      variant={"outlined"}
                      color={"primary"}
                      size={"small"}
                      onClick={() =>
                        navigate(`/edit/${el.id}/${el.name}/${el.abr}`)
                      }
                    >
                      Edit
                    </Button>
                  </div>
                );
              })}
            </div>
            {
              <ReactPaginate
                previousLabel={"<<"}
                breakLabel={"..."}
                nextLabel={">>"}
                pageCount={vehicleStore.totalPg}
                onPageChange={pageC}
                containerClassName={"pagination-container"}
                activeClassName={"active-page"}
              />
            }
          </>
        );
      }}
    </Observer>
  );
}
