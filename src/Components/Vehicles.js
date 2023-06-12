import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { Observer } from "mobx-react-lite";
import { useVehicleStore } from "./VehicleContext";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Vehicles() {
  const vehicleStore = useVehicleStore();

  let navigate = useNavigate();

  useEffect(() => {
    vehicleStore.getVehicles();
  }, [vehicleStore]);

  const destroy = (id) => {
    vehicleStore.delete(id);
  };

  const pageC = (event) => {
    const selected = event.selected + 1;
    let start = event.selected * vehicleStore.itemPP;
    let end = selected * vehicleStore.itemPP;
    vehicleStore.getVehiclesPaginate(start, end);
  };

  return (
    <Observer>
      {() => {
        return (
          <>
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
