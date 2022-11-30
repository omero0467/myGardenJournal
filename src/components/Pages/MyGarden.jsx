import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { db } from "../../firebase";
import Card from "../../global components/Card";
import { productInputs } from "../../InputFields";
import FormInput from "../Form/FormInput";

function MyGarden() {
  const { user, UserData } = UserAuth();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [allGardens, setAllGardens] = useState([])
  
  // const { paxData } = useDynamicFetch("gardens", user);
  useEffect(()=>{
    //!check improve efficency with local storage
        setIsLoading(true)
        // const localData = JSON.parse(localStorage.getItem('gardens'))
    async function getAllDocs() {

        try {
            
            const q = query(collection(db, 'gardens'), where("createdBy", "==", user.uid));
    
            const unsubscribe = onSnapshot(q, { includeMetadataChanges: true }, (querySnapshot) => {
                const list = [];
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                  });
                  
                  setAllGardens((prev) => prev = [...list])
                  localStorage.setItem('gardens', JSON.stringify(list))
                  
                  setIsLoading(false) 
            }, (err) => {
                console.log(err)
                setError(err)
            })
            return { unsubscribe }
        } catch (error) {
            console.log(error);
            }
        }
        // if (localData) {
        //     console.log('inside if');
        getAllDocs()
        // setPaxData(localData)
        // } else {
        // console.log('inside else');
        return () => {
            // unsubscribe();
        };
        // }

  },[user])
  
  const [overlay, setoverlay] = useState(false);
  const [sucsess, setSucsess] = useState("");
  // const [error, setError] = useState("");
  const [newGarden, setNewGarden] = useState("");
  // const [allGardens, setAllGardens] = useState([]);
  const userRef = doc(db, "users", user.uid);
  
  async function handleDelete(e, garden) {
    e.stopPropagation();
    e.preventDefault();
    console.log("delete");
    await deleteDoc(doc(db, "gardens", garden.id));
    await updateDoc(userRef, {gardens: arrayRemove(garden.id)})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setError("");
    try {

      await addDoc(collection(db, "gardens"), {
        ...newGarden,
        timeStamp: serverTimestamp(),
        createdBy: user.uid,
      })
      .then((res) => updateDoc(userRef, { gardens: arrayUnion(res.id) }))
      .catch((err) => setError(err.message));
      
      setSucsess("All Good! 🤙🏽");
      setTimeout(() => {
        setNewGarden({});
        setSucsess("");
        toggleOverlay();
      }, 2000);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
    console.log(user);
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setNewGarden((prev) => ({ ...prev, [id]: value }));
  };

  function toggleOverlay() {
    setoverlay((prev) => !prev);
  }

  //   function handleAdd(event) {}
  //?----------------------------edit garden???----------------------

  return (
    
    !isLoading&&<div className="page my_garden flex justify-center">
      <div className="flex flex-col">
      
        <Card className={"mb-4"}>
          {/* <div > */}
          Hello <span className="capitalize font-bold text-emerald-900">{UserData&&UserData.displayName}</span>, Last
          irregation:
        </Card>
        <Card className='text-center mb-2'>
          <button
            onClick={(e) => {
              toggleOverlay();
            }}
          >
            + New Garden
          </button>
        </Card>
        <div className="grid">
          {allGardens.map((garden) => {
            return (
              <Link
                key={garden.id}
                className="link-reset"
                to={`/garden/${garden.id}`}
              >
                <Card className="relative text-center capitalize">
                  {garden.gardenName}{" "}
                  <span
                    onClick={(e) => {
                      handleDelete(e, garden);
                    }}
                    className="absolute cursor-pointer right-0 top-0"
                  >
                    <GrFormClose size={35}  />
                  </span>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
      {overlay && (
        <form
          onSubmit={handleSubmit}
          className={
            "absolute w-full h-full flex justify-center items-center overlay gardenform" }
        >
          <Card
            className={"newGardenInput min-[200px] w-[350px] relative z-20"}
          >
            <div
              onClick={() => setoverlay(false)}
              className="cursor-pointer absolute right-0 top-0"
            >
              {<GrFormClose size={35} />}
            </div>
            {productInputs.map((input, index) => (
              <FormInput
                key={input.id + index}
                input={input}
                setFunc={handleInput}
              />
            ))}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 mt-1 rounded-md"
            >
              Add
            </button>
            <span className="underline text-red-500">{error && error}</span>
            <span className="underline text-green-500">
              {sucsess && sucsess}
            </span>
          </Card>
        </form>
      )}
    </div>
  );
}

export default MyGarden;
