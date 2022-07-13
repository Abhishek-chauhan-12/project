// import CardData from './CardData';
import React, { useState } from 'react'
import {RiShoppingBag3Line} from 'react-icons/ri'
import {GrLocation} from 'react-icons/gr'
import {BsBookmark} from 'react-icons/bs'
const Card=({data})=>{
const[redmore,setRedmore]=useState(false)
    return(
        <div className="row d-flex justify-content-center">
        <div className="col-lg-4 col-md-6 col-12  ">
        <div className="cards shadow p-3 mb-5 bg-body rounded  ">
        <div className="card-1 d-flex justify-content-between">
    <div className="cards-left pl-2 ">
    <h4 className='mt-3'>{data.name}</h4>
    <h6 className='bold pb-3'>{data.expersion}</h6>
    <div className="Contact-list d-flex">
    <i><RiShoppingBag3Line/></i>
    <div className="contact mx-2">
    <h6>{data.email}</h6>
    <p>{data.date}</p>
    </div>
    </div>
    <div className="Contact-list d-flex  ">
    <i><RiShoppingBag3Line/></i>
    <div className="contact mx-2">
    <h6>{data.email}</h6>
    <p>{data.date}</p>
    </div>
    </div>
    <div className="Contact-list d-flex">
    <i><GrLocation/></i>
    <p className='mx-2'>{data.location}</p>
    </div>
    </div>
   
    
    <div className="cards-right d-flex justify-content-around flex-column">
    <img src={data.img} alt="abhs"  className='img'/>
    <button className='btn btn-primary btn-sm btns'>view Details</button>
    </div>
    </div>
    <div className="row">
    <div className="col-10">
    <div className="bottom-section">
    <p>{redmore?data.biodata:`${data.biodata.substring(0,25)}...`}
    <i className='primary' onClick={()=>setRedmore(!redmore)}>{redmore?'show less':'red more'}</i></p>
    </div>
    </div>
    <div className="col-2">
    <i><BsBookmark/></i>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}
export default Card;