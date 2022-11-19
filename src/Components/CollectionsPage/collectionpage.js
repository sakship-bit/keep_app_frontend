import React, { Component,useRef,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../basic/back.css";
import {data} from "../../data.js";


const CollectionPage = () => {
    const [add,setAdd]=useState(false);
  const collectionNameInput=useRef();
  const [noteData,setnoteData]=useState(data);
  const submitHandler = (e) => {
    e.preventDefault();
    setAdd(!add);
    const collectionName=collectionNameInput.current.value;
 
    noteData.push({collection:collectionName,note:null});
   

  };
 
  useEffect(()=>{
  
    console.log("added")
  },[add]);

  
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center mt-4">
         
          <div class="collapse"  className="col-lg-5 col-12">
            <form className="container-fluid" onSubmit={submitHandler}>
              <div className="form-floating mb-5">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  ref={collectionNameInput}
                ></input>
                <label for="floatingInput">Add a new Collection</label>
              </div>
            </form>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          {noteData &&
            noteData.map((item, index) => {
              return (
                <div
                key={index}
                  class="card  ms-4 mt-3 me-4 col-10 col-lg-5"
                  style={{ cursor: "pointer" ,backgroundColor:"#ffffcc" }}
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
