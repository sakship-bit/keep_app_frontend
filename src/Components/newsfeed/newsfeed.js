import React, { Component } from 'react'
import "./newsfeed.css"
import Allnews from './subnews/allnews'
import Entertainment from './subnews/entertainment'
import Business from './subnews/business'

import Sports from './subnews/sports'

const NewsFeed=()=>{
 return(<>
    <nav className='navbar-light d-flex justify-content-center align-items-center mt-2 '>
  <div className="nav nav-tabs text-white" id="nav-tab" role="tablist">
    <button className="nav-link active ms-1 me-1" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</button>
    <button className="nav-link ms-1 me-1" id="nav-sports-tab" data-bs-toggle="tab" data-bs-target="#nav-sports" type="button" role="tab" aria-controls="nav-sports" aria-selected="false">Sports</button>
    <button className="nav-link ms-1 me-1" id="nav-politics-tab" data-bs-toggle="tab" data-bs-target="#nav-business" type="button" role="tab" aria-controls="nav-business" aria-selected="false">Business</button>
    <button className="nav-link ms-1 me-1" id="nav-entertainment-tab" data-bs-toggle="tab" data-bs-target="#nav-entertainment" type="button" role="tab" aria-controls="nav-entertainment" aria-selected="false">Entertainment</button>

  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab"><Allnews/></div>
  <div className="tab-pane fade" id="nav-sports" role="tabpanel" aria-labelledby="nav-sports-tab"><Sports/></div>
  <div className="tab-pane fade" id="nav-business" role="tabpanel" aria-labelledby="nav-business-tab"><Business/></div>
  <div className="tab-pane fade" id="nav-entertainment" role="tabpanel" aria-labelledby="nav-entertainment-tab"><Entertainment/></div>

</div>
 </>)

}









export default NewsFeed;