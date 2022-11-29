import React, { useRef, useState } from "react";
import Card from "../../global components/Card";
import { ProvidePlantsContext } from "../../context/PlantsApiContext";
import PlantCard from "../PlantCard/PlantCard";

function Garden() {
  const { PlantsState } = ProvidePlantsContext();
  const [query, setQuery] = useState("");

  const plantsRef = useRef();

  function dataFilter() {
    return PlantsState.filter((plant) => {
      return plant["Common name"]
        ?.toString()
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 ">
      <Card className="message">
        Last irregation: 'date', general garden tips
      </Card>

      <input
        className={" shadow-xl mt-4 w-full max-w-xl py-2 px-2 rounded-lg"}
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        placeholder="Search Plant"
      />
      <div ref={plantsRef} className="plant_cards_container w-full max-w-[700px]">
        {dataFilter().map((plant) => {
          return (
            <Card key={plant.id}>
              <PlantCard plant={plant} />
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Garden;
