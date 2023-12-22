import '../style/cropadv.css';
import New from '../component/suppliernav';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Farmnav from '../component/farmernav';
function CropStat() {
  const[sell , setsell] = useState([]);
  const [data, setData] = useState(null);
  useEffect(()=> {
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
  axios.get(`http://localhost:5000/staterec/${data}`).then((res) =>{
    setsell(res.data);
  });
}
},[data]);
console.log(sell, "new sell found");

  return(
       <>
        <Farmnav />
     <div className="Apps">
     <h2 style={{color:"green",textAlign:"center"}}>Crop Status Check</h2><br />

    <table class="table">
            <thead>
              <tr>
                <th scope="col">Supplier id</th>
                <th scope="col">Crop id</th>
                <th scope="col">Crop name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Rupees</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
             {sell.map((sells)=>(
        <>       
              <tr>
                <td>{sells.sid}</td>
                <td>{sells.cid}</td>
                <td>{sells.cname}</td>
                <td>{sells.quantity}kgs</td>
                <td>{sells.rs}</td>
                <td>{sells.isBuy ? 'ok' : ''}</td>
              </tr>
        </>
      ))}
      </tbody>
      </table>
    </div>
 </>

  );

}
 
export default CropStat;