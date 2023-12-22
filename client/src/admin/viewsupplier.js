import React  from 'react';
import AllDetail from '../component/adminnav';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/view.css';
 
function ViewSup() {

  const[sup , setsup] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/getsupplier').then((res) =>{
      setsup(res.data);
    });
    
  },[]);
  const handleDelete =async (e,id)=>{
    alert("Do you want to delete the Supplier");
    e.preventDefault()
    await axios.delete(`http://localhost:5000/deletesup/${id}`);
  }
 
  console.log("karthi data",sup);;
  
   
  return(
    <>
     <AllDetail />
     <div className="Appp">
     <h2 style={{color:"green",textAlign:"center"}}>Supplier Details</h2><br />
     <table class="table">
            <thead>
              <tr>
                <th scope="col">Supplier id</th>
                <th scope="col">Supplier Name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
             {sup.map((sups)=>(
        <>       
              <tr>
                <td>{ sups.id }</td>
                <td>{sups.name}</td>
                <td>{sups.email}</td>
                <td><button onClick={(e)=>handleDelete(e,sups._id)} className="btn btn-danger">Delete</button></td>
              </tr>
            
          
        </>
      ))}
      </tbody>
      </table>
    </div>

    </>


  );
}
 
export default ViewSup;