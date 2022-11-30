import React, { useEffect, useReducer, useRef, useState } from "react";
import Card from "../../global components/Card";
import { ProvidePlantsContext } from "../../context/PlantsApiContext";
import PlantCard from "../PlantCard/PlantCard";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import gardenReducer from "../../context/gardenReducer";
import { db } from "../../firebase";

function Garden() {
  const { PlantsData } = ProvidePlantsContext();
  const [currentGarden, setCurrentGarden] = useState({})
  const [query, setQuery] = useState("");
  const [overlay, setoverlay] = useState(false);
  const params = useParams()
  useEffect(()=>{
    async function getGarden () {
      const docRef = doc(db, "gardens", params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap);
        setCurrentGarden({...docSnap.data(), id: docSnap.id})
      } else {
        console.log("No such document!");
      }
    }
    getGarden()
  },[params])
  
  const [state, dispatch] = useReducer(gardenReducer, currentGarden)


  const plantsRef = useRef();

  function dataFilter() {
    return PlantsData.filter((plant) => {
      return plant.name?.toString()
        .toLowerCase()
        .includes(query.toLowerCase());
    });
  }

  function toggleOverlay() {
    setoverlay((prev) => !prev);
  }


  return (
    <div className="flex flex-col items-center justify-center p-4 ">
      <Card className="message">
        Last irregation: 
        {currentGarden.lastIrregation},
      </Card>
      <button onClick={toggleOverlay} className="px-16 mt-8 h-9 rounded-lg flex items-center justify-center font-semibold bg-slate-900 text-white">Add Plants +</button>

      <div className="garden-container h-[550px] w-[800px] mt-4 rounded-lg container bg-slate-100">{currentGarden.id}</div>

      {overlay&&
      <><input
        className={" shadow-xl mt-4 w-full max-w-xl py-2 px-2 rounded-lg"}
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        placeholder="Search Plant"
      />
      <div ref={plantsRef} className="plant_cards_container ">
        {dataFilter().map((plant) => {
          return (
            <Card key={plant.id}>
              <PlantCard currentGarden={currentGarden} plant={plant} />
            </Card>
          );
        })}
      </div></>}
    </div>
  );
}

export default Garden;
