import React, { Component } from 'react'
import Header from './Components/Header/header';
import './app.css'
import { Route,Routes,Navigate } from 'react-router-dom';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import NotesPage from './Components/NotesPage/notespage';
import CollectionPage from './Components/CollectionsPage/collectionpage';
import AboutPage from './Components/About/about';
const App=()=>{
    const routes=(<Routes>
        <Route path="/" element={<CollectionPage/>}/>
        <Route path= "/about/*" element={<AboutPage/>}/>
        <Route path="/notespage/*" element={<NotesPage/>}/>
      </Routes> );
    return(<>
        <div className='homepage' style={{height:"100%"}}>
        <div className="row col-12 col-lg-12 m-0">
            <Header/>
            
        </div>
        
            {routes}
        
        </div>

    </>);
}









export default App;
