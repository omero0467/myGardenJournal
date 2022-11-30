import React, { useEffect, useRef, useState } from "react";
import Card from "../../global components/Card";
import { ProvidePlantsContext } from "../../context/PlantsApiContext";
import PlantCard from "../PlantCard/PlantCard";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
// import gardenReducer from "../../context/gardenReducer";
import { db } from "../../firebase";
import { MdCloseFullscreen } from "react-icons/md";


function Garden() {
  const { PlantsData } = ProvidePlantsContext();
  const params = useParams()
  const [currentGarden, setCurrentGarden] = useState(false)

  const [query, setQuery] = useState("");
  const [overlay, setoverlay] = useState(false);
  
  useEffect(()=>{
    async function getGarden () {

     try{ const docRef = doc(db, "gardens", params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap);
        setCurrentGarden(prev=>({...prev,...docSnap.data(), id: docSnap.id}))
      }}catch(err){
        console.log(err);
      }
    }
    getGarden()
  },[params])
  
  // const [state, dispatch] = useReducer(gardenReducer, currentGarden)

  // console.log(currentGarden);

  //  async function getGarden(){
  //    return currentGarden.plants.map((plant)=>{
  //     return (
  //       <Card key={plant.id}>
  //         <PlantCard currentGarden={currentGarden} plant={plant} />
  //       </Card>
  //     );
  //    })
  // }

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

  // currentGarden.plants.map((plant)=>{
  // 
  // })

  return (
    <div className="flex flex-col items-center overscroll-x-contain justify-center p-4 ">
      <Card className="message bg-amber-200">
        Garden: <span className="font-bold">{currentGarden.gardenName}</span>
      </Card>
      <button onClick={toggleOverlay} className="px-16 mt-8 h-9 rounded-lg flex items-center justify-center font-semibold bg-slate-900 text-white">Add Plants +</button>

      <div className="garden-container overflow-x-auto mt-4 rounded-lg container gap-3 max-[400]:w-96 grid grid-flow-col auto-rows-fr bg-slate-100 p-4">{currentGarden&&currentGarden.plants.map((plant)=>{
        return (
          <Card key={plant.id}>
            <PlantCard setCurrentGarden={setCurrentGarden} plant={plant} />
          </Card>
        );
      })}
      </div>
      

      {overlay&&
      <div className="flex flex-col container item-center absolute max-[400]:w-96 overlay_plant_search">
        <span onClick={toggleOverlay} className="self-end" ><MdCloseFullscreen size={30} color={'white'}/></span>
        <input
        className={" shadow-xl my-2 w-full py-2 px-2 rounded-lg"}
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        value={query}
        placeholder="Search Plant"
      />
      <div ref={plantsRef} className="grid grid-flow-col grid-rows-1 gap-5 overflow-x-scroll container  p-2 rounded-xl ">
        {dataFilter().map((plant) => {
          return (
            <Card key={plant.id}>
              <PlantCard setCurrentGarden={setCurrentGarden} plant={plant} />
            </Card>
          );
        })}
      </div></div>}
    </div>
  );
}

export default Garden;
