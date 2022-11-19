import React, { Component,useRef,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../basic/back.css";

const CollectionPage = () => {
    const [add,setAdd]=useState(false);
  const collectionNameInput=useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setAdd(!add);
    const collectionName=collectionNameInput.current.value;
  console.log(collectionName)
    noteData.push({collection:collectionName,note:null});
    console.log(noteData)

  };
  const noteData = [
    { collection: "folder1", note:[ "note1","note2","note3","note4"] },
    { collection: "folder2", note:[ "note2"] },
    { collection: "folder3", note:[ "note3"] },
    { collection: "folder4", note: [null] },
  ];
  useEffect(()=>{
  
    console.log("added")
  },[add]);

  
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <p className="col-lg-2 ms-5 mt-2">
            <button
              class=" btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <span class="material-icons-outlined">add</span>
            </button>
          </p>
          <div class="collapse" id="collapseExample" className="col-lg-4">
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
                  class="card bg-text ms-4 mt-3 me-4 col-10 col-lg-5"
                  style={{ cursor: "pointer" }}
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
