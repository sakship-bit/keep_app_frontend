import React, { Component } from "react";
import { Form, useLocation } from "react-router-dom";
const NotesPage = () => {
  const location = useLocation();
  const { from, id } = location.state;
  const notes = from.noteData[id].note;
  return (
    <>
      <div className="container-fluid">
        <div className="heading" >
          
          <h3 className="text-center text" >{from.noteData[id].collection}</h3>
      
        </div>
        <div className="row d-flex justify-content-between">
          {notes &&
            notes.map((item, index) => {
              return (
                <div
                  key={index}
                  class="form-group purple-border ms-5 mt-3 me-5 col-10 col-lg-3"
                >
                  <label for="exampleFormControlTextarea5"></label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea5"
                    rows="3"
                  ></textarea>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default NotesPage;
