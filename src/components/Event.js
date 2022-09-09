import React ,{useState}from 'react';
import {Modal,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Event({event}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className='row bs'>
            <div className='col-md-4'>
              <img src={event.imageurl[0]} className='smallimg'></img>
            </div>
            <div className='col-md-7'>
             <h1>{event.name}</h1>
             <b>
             <p>Event Date : {event.date}</p>
             <p>Type : {event.type}</p>
             <p>Max Count : {event.maxcount}</p>
             </b>
             <div style= {{float : 'right'}}>
               <Link to ={`/enroll/${event._id}`}>
               <button className='btn btn-primary m-2' onClick={handleShow}>Enroll Now</button>
               </Link>
              <button className='btn btn-primary' onClick={handleShow}>View Details</button>
             </div>
            </div>
            

      <Modal show={show} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title>{event.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={event.imageurl[0]} className='smallimg'></img></Modal.Body>
        <p>{event.description}</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Event;