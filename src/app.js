import React, { Component } from 'react'
import Header from './Components/Header/header';
import { Route,Routes,Navigate } from 'react-router-dom';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import NotesPage from './Components/NotesPage/notespage';
import CollectionPage from './Components/CollectionsPage/collectionpage';
import AboutPage from './Components/About/about';
import NewsFeed from './Components/newsfeed/newsfeed';
import Login from './Components/Login/login';
import Signup from './Components/Login/signup';



const App=()=>{
    const routes=(<Routes>
        <Route path="/*" element={<CollectionPage/>}/>
        <Route path= "/about/*" element={<AboutPage/>}/>
        <Route path="/notespage/*" element={<NotesPage/>}/>
        <Route path="/newsfeed/*" element={<NewsFeed/>}/>
        <Route path="/login/*" element={<Login/>}/>
        <Route path="/signup/*" element={<Signup/>}/>



      </Routes> );
    return(<>
     
        <div className="row col-12 col-lg-12 m-0 ">
            <Header/>
            
        </div>
        
            {routes}
        
     
    </>);
}









export default App;
