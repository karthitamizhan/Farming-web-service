import React  from 'react';
import AllDetail from '../component/adminnav';
import { useEffect,useState } from 'react';
import axios from 'axios';
import '../style/view.css';
 
function ViewFar() {

  const[far , setfar] = useState([]);

useEffect(()=>{
  axios.get('http://localhost:5000/getfarmer').then((res) =>{
    setfar(res.data);
  });
},[]);

const handleDelete =async (e,id)=>{
  e.preventDefault()
  alert("Do you want to delete the Farmer");
  await axios.delete(`http://localhost:5000/deletefar/${id}`);
}

console.log("karthi data",far);;

   
  return(
    <>
     <AllDetail />
     <div className="Appp">
     <h2 style={{color:"green",textAlign:"center"}}>Farmer Details</h2><br />
      <table class="table">
            <thead>
              <tr>
                <th scope="col">Farmer id</th>
                <th scope="col">farmer Name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
             {far.map((fars)=>(
        <>       
              <tr>
                <td>{fars.id}</td>
                <td>{fars.name}</td>
                <td>{fars.email}</td>
                <td><button onClick={(e)=>handleDelete(e,fars._id)} className="btn btn-danger">Delete</button></td>
              </tr>
            
          
        </>
      ))}
      </tbody>
      </table>
    </div>

    </>


  );
}
 
export default ViewFar;