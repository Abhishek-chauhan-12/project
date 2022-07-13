import React,{useState}  from 'react';
import Card from './Card';
import CardData from './CardData';
import img from '../Compocent/imges/kid-01.jpg'
import {AiOutlineMessage} from 'react-icons/ai'
import {GiSettingsKnobs} from 'react-icons/gi'
import {GrNotification} from 'react-icons/gr'
const Home =()=>{
    const[datas,setdata]=useState(CardData)
     const[sarch ,setsarch]=useState("")
     const sumbit=(e)=>{
      e.preventDefault()
      const abhi=datas.filter((cur)=>{
        return(cur.name.toLowerCase().includes(sarch.toLowerCase()))
      })
      setdata(abhi)
     }
    return(
<div className='abhi'>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" ><img src={img} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex" >
    <input className="form-control" type="text" placeholder="Search"  value={sarch} onChange={(e)=>setsarch(e.target.value)} onClick={sumbit}/>
  </form>
  </div>

      <div className="div d-flex flex-column px-3 text-center">
      <div className="mess">
      <i><AiOutlineMessage/></i>
      {datas.map((cur)=>{
      return(
        <p className='count'>{cur.id}</p>

      )})}
      </div>
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


      <div className="container">
      <div className="row">
      <div className="col-12 d-flex justify-content-between mt-3 cards1">
      <h5>Suggested Candidates</h5>
      <button>Post job</button>
      </div>
      </div>
      {
        datas.map((cur,index)=>{
return(
    <Card data={cur}/>
)
        })
      }
      
      </div>
      
      </div>

    )
}
export default Home;
