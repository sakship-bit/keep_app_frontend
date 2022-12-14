import React, { Component } from 'react'
import NoteContext from '../../context/notecontext';
import { useContext } from 'react';


const AboutPage=()=>{
    const d=useContext(NoteContext);
    return(<>
    <div className='container-fluid'>
        <div className='row col-lg-12 mt-5'>
            <h1 className='text-center'>About Page</h1>
        </div>
        <div className='container mt-5'>
           <h3 className='m-4 text-center'>Welcome!</h3>

            <h4 className='m-4 text-center'>This is a Notes Web App </h4>
            <h5 className='m-5 text-center'>Store your ideas, reminders here and you can keep them in separate collections too</h5>
            <p className='m-5 text-center'>Get latest news on business,sports and entertainment</p>
            <p className='m-3 text-center'>User name:  </p>
        </div>
        
    </div>
    </>)
}



export default AboutPage;