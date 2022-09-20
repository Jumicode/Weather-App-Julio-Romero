import React,{useState} from 'react';
import styles from '../Styles/WheaterForm.scss'


const WheaterForm = ({getWheater}) => {

  
const [IsOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!IsOpen);

    return (

      <div className='Container'>

      <div style={{width: IsOpen ? "300px" : "50px"}} className='SideBard' >
      
               <i className="bi bi-list" onClick={toggle}></i>
               
      
      
  
   <form  onSubmit={getWheater} >
      <input  style={{width: IsOpen ? "200px"  : '0px',display: IsOpen ? 'block':'none'}} type='text' name='name' placeholder='city name'   ></input> 
      <input  style={{display: IsOpen ? 'block' :'none'}}  type='submit' value='Search'></input>
    </form>

    </div>
    </div>
    );
}

export default WheaterForm;
