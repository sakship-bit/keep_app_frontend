import React, { Component, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../../data";

const NotesPage = () => {
  const noteNameInput = useRef();
  const location = useLocation();
  const { from, id } = location.state;
  const notes = from.noteData[id].note;
  const [add, setAdd] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setAdd(!add);
    const notesData = "notes";
    notes.push("notes");

  };

  const time="5:00 am 22 oct"


  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-center mt-2">
          <h2 className="text-center" style={{ color: "white", backgroundColor: "black" }}>{from.noteData[id].collection}</h2>
        </div>
        <div className="row mt-4">
          <p className="col-lg-2 ms-5 mt-2">
            <button
              class=" btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="true"
              aria-controls="collapseExample"
              onClick={submitHandler}
            >
              <span class="material-icons-outlined">add</span>
            </button>
          </p>
          <div class="collapse" id="collapseExample" className="col-lg-4">

          </div>
        </div>
        <div className="row d-flex justify-content-between">
          {notes &&
            notes.map((item, index) => {
              return (
                <div
                  key={index}
                  class="form-group purple-border mx-4  mb-2 col-10 col-lg-3 "
                >
                
                  <label for="exampleFormControlTextarea5"></label>
                  <textarea
                    class="form-control  "
                    id="exampleFormControlTextarea5"
                    rows="3"
                    cols=""
                    style={{ width: "100%",height:"110px"}}
                  ></textarea>
                  
                
               
                  {/* <p className="text position-relative text-muted" style={{ top: "120px", left: "2px",fontSize:"13px"}}>Last modified : {time}</p> */}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default NotesPage;
