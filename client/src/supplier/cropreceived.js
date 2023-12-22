import '../style/cropadv.css';
import New from '../component/suppliernav';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
function CropRec() {
  const[sell , setsell] = useState([]);
  const [data, setData] = useState(null);
useEffect(() =>{
  fetch("http://localhost:5000/userData", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      token: window.localStorage.getItem("token"),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      console.log(data.data.id, "userData");
      setData( data.data.id );
    });
})
console.log(data,"the data of crop received");


useEffect(()=>{
  if(data){
  axios.get(`http://localhost:5000/receives/${data}`).then((res) =>{
    setsell(res.data);
  });
}
},[data]);
console.log(sell, "new sell found");

const handleBuy = async(e,id) => {
  alert("Accept to buy the crop");
  await axios.get(`http://localhost:5000/getstatus/${id}`)

}

  return(
       <>
      <New />
     <div className="Apps">
     <h2 style={{color:"green",textAlign:"center"}}>Received Crop Details</h2><br />

    <table class="table">
            <thead>
              <tr>
                <th scope="col">Accept</th>
                <th scope="col">Crop id</th>
                <th scope="col">Crop name</th>
                <th scope="col">Farmer id</th>
                <th scope="col">Quantity</th>
                <th scope="col">Rupees</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
             {sell.map((sells)=>(
        <>       
              <tr>
                <td><a href='#' onClick={e=>handleBuy(e,sells._id)}>buy</a></td>
                <td>{sells.cid}</td>
                <td>{sells.cname}</td>
                <td>{sells.fid}</td>
                <td>{sells.quantity}kgs</td>
                <td>{sells.rs}</td>
                <td> <a href=" tel:{sells.phno}">+91 {sells.phno}</a> </td>
              </tr>
        </>
      ))}
      </tbody>
      </table>
    </div>
 </>

  );

}
 
export default CropRec;