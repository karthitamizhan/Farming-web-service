import React, {useState,useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import '../style/cropadv.css';
import axios from 'axios';
import Farmnav from '../component/farmernav';

function Crop() {
 
const[poste , setpost] = useState([]);
const navigate = useNavigate()

useEffect(()=>{
  axios.get('http://localhost:5000/getpost').then((response) =>{
    setpost(response.data);
  });
},[]);


console.log("karthi data",poste);

  return(
    <>
      <Farmnav />
     <div className="Apps">
     <h2 style={{color:"green",textAlign:"center"}}>Crop Advertisement Details</h2><br />

    <table class="table">
            <thead>
              <tr>
                <th scope="col">Sell Crop</th>
                <th scope="col">Crop id</th>
                <th scope="col">Crop name</th>
                <th scope="col">Image</th>
                <th scope="col">Quantity</th>
                <th scope="col">Supplier id</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
             {poste.map((posts)=>(
        <>       
              <tr>
                <td><Link to={`/sell/${posts._id}`} className="all">Sell</Link></td>
                
                <td>{posts.cid}</td>
                <td>{posts.cname}</td>
                <td><img src={posts.img} alt="Smiley face" width="180" height="80"/></td>
                <td>{posts.quantity}kgs</td>
                <td>{posts.sid}</td>
                <td>{posts.phno}</td>
              </tr>
            
          
        </>
      ))}
      </tbody>
      </table>
    </div>

    </>


  );
}


 
export default Crop;