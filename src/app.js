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
        <div className='homepage'>
        <div className="row col-12 col-lg-12 m-0 page">
            <Header/>
            
        </div>
        <div className='row col-lg-4 col-sm-6 col-12'>
            {routes}
        </div>
        </div>

    </>);
}









export default App;
