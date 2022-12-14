import React, { Component, useRef, useState } from "react";
import { useLocation } from "react-router-dom";


const NotesPage = () => {
  const noteNameInput = useRef();
  const location = useLocation();
  const { from, id } = location.state;
  const notes = from.noteData[id].notes;
  const [add, setAdd] = useState(false);
  console.log(notes[0].title)

  const submitHandler = (e) => {
    e.preventDefault();
    setAdd(!add);
    const notesData = "notes";
    notes.push("notes");
  };

  const time = "5:00 am 22 oct";

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-items-center mt-2">
          <h2
            className="text-center"
            style={{ color: "white", backgroundColor: "black" }}
          >
            {from.noteData[id].collection}
          </h2>
        </div>
        <div className="row mt-4">
          <p className="col-lg-2 ms-5 mt-2">
            <button
              className=" btn btn-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="true"
              aria-controls="collapseExample"
              onClick={submitHandler}
            >
              <span className="material-icons-outlined">add</span>
            </button>
          </p>
          
        </div>
        <div className="row d-flex justify-content-center">
          {notes &&
            notes.map((item, index) => {
              return (
                <>
                 <div
                    key={index}
                    className="form-group purple-border mx-4 mb-5 col-10 col-lg-3 col-sm-4"
                  >
                  <div className="card" style={{width: "100%"}}>
                    <div className="card-body">
                      <div className="d-flex align-items-center jutify-content-center">
                      <h5 className="card-title">{item.title}</h5>
                   
                      <span className="material-icons-outlined ms-5 my-2 align-items-right" style={{"cursor":"pointer"}}>delete</span>
                     <span className="material-icons-outlined ms-3 my-2 " style={{"cursor":"pointer"}}>edit</span>
                     </div>
                      <textarea
                      className="form-control  "
                      id="exampleFormControlTextarea5"
                      rows="3"
                      cols=""
                      style={{ width: "100%", height: "110px" }}
                    >{item.description}</textarea>
                     

                    </div>
                    
                  </div>
                  </div>
                 
                   
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default NotesPage;
