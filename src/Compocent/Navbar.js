import React from "react";
import img from '../Compocent/imges/kid-01.jpg'

import {AiOutlineMessage} from 'react-icons/ai'
import {GiSettingsKnobs} from 'react-icons/gi'
import {GrNotification} from 'react-icons/gr'
const Navbar =()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={img} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="d-flex">
    <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={click}/>
  </form>
  </div>

      <div className="div d-flex flex-column px-3 text-center">
      <i><AiOutlineMessage/></i>
      <span>Message</span>
      </div>
      <div className="div d-flex flex-column text-center px-2">
      <i><GrNotification/></i>
      <span>Notification</span>
      </div><div className="div d-flex flex-column text-center px-2">
      <i><GiSettingsKnobs/></i>
      <span>Settings</span>
      </div>
    </div>
</nav>
    )
}
export default Navbar