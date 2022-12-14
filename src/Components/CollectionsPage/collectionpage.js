import React, { Component,useRef,useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "../basic/back.css";
import "./collectionpage.css"
import NoteContext from "../../context/notecontext";

const CollectionPage = () => {
    const [add,setAdd]=useState(false);
  const collectionNameInput=useRef();
  // const [noteData,setnoteData]=useState(data);

  const allData=useContext(NoteContext);



  const [noteData,setCollectionData]=useState(allData.collectionData)
  const submitHandler = (e) => {
    e.preventDefault();
    setAdd(!add);
    const collectionName=collectionNameInput.current.value;
 
    noteData.push({collection:collectionName,note:null});
   

  };
 
  useEffect(()=>{
  
    
  },[add]);

  
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex  justify-content-center mt-4">
         
          <div class="collapse"  className="col-lg-5 col-12">
            <form className="container-fluid" onSubmit={submitHandler}>
              <div className="form-floating mb-5">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  ref={collectionNameInput}
                  required
                ></input>
                <label for="floatingInput">Add a new Collection</label>
              </div>
            </form>
          </div>
        </div>

        <div className="row d-flex collection">
          {allData.collectionData &&
            allData.collectionData.map((item, index) => {
              return (
                <div
                key={index}
                  class="card text-box ms-4 mt-3 me-4 col-10 col-lg-5"
                  style={{ cursor: "pointer" ,backgroundColor:"#F0F8FF" }}
                >
                  <Link
                    to="notespage"
                    style={{ textDecoration: "none", color: "black" }}
                    state={{ from: { noteData }, id: index }}
                  >
                    <div class="card-body text-center">
                      <p class="card-text">{item.collection}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CollectionPage;
