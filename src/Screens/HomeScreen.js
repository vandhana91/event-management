import React,{useState,useEffect} from 'react';
import axios from "axios";
import Event from '../Components/Event';
import Loader from '../Components/Loader';
import Error from '../Components/Error';

function HomeScreen() {

const [events,setEvents] = useState([])
const[loading,setloading] = useState()
const[error,setError] = useState()
useEffect(() => {
    setloading(true)
    axios
    .get('http://localhost:5000/api/events/getallevents')
    .then((response) => {
        console.log(response);
        setEvents(response.data);
        setloading(false);
   })
    .catch(err=>{
      setError(true);
      console.log(err);
      setloading(false);
    })
  },[])
    return (
        <div className='container'>
           <div className='row justify-content-center mt-5'>
           
            {loading ? (<Loader/>): events ? (events.map(event =>{
             return <div className='col-md-9 mt-2'>
               <Event event ={event}></Event>
             </div>
             
             })) : (<Error/>)}
           
           </div> 
        </div>
    );

}

export default HomeScreen;