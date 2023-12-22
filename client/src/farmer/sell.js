import React, { useState, useEffect} from "react";
import '../style/farm.css';
import { useParams } from "react-router-dom";
import axios from "axios";
function Newsell() {
  const [sid, setSid] = useState(" ");
  const [cid, setCid] = useState(" ");
  const [cname, setCname] = useState(" ");
  const [fid, setFid] = useState(" ");
  const [quantity, setQuantity] = useState(" ");
  const [rs, setRs] = useState(" ");
  const [phno, setPhno] = useState(" ");
  const [data, setData] = useState(" ");
  const[poste , setpost] = useState([]);


  const {id}=useParams();
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(sid,"supplier id");

      await fetch("http://localhost:5000/cropsell", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          sid,
          cid,
          cname,
          fid,
          quantity,
          rs,
          phno,
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "crop send");
        alert("Crop send Successfully")
      });
      
  };

  useEffect(()=>{
     axios.get(`http://localhost:5000/getnewpost/${id}`)
    .then((res) =>{
      console.log(res);
      setpost(res.data);
      setSid(res.data.sid)
      setCid(res.data.cid)
      setCname(res.data.cname)
  

    });
  },[]);

  console.log(poste);



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
        setFid(data.data.id)
      });
    })


  return (
    <form onSubmit={handleSubmit} className="form">
    <h3 style={{textAlign:"center",color:"red"}} className="post">Sell Crops</h3>

    <div className="mb-3">
      <label>Supplier Id :</label>
      <input
        type="number"
        className="control"
        value={poste.sid}
        onChange={(e) => setSid(e.target.value )}
      />
    </div>

    <div className="mb-3">
      <label>Crop Id :</label>
      <input
        type="number"
        className="control"
        value={poste.cid}
        onChange={(e) => setCid( poste.cid )}
      />
    </div>

     <div className="mb-3">
      <label>Crop Name :</label>
      <input
        type="text"
        className="control"
        value={poste.cname}
        onChange={(e) => setCname( poste.cname )}
      />
    </div>

    <div className="mb-3">
      <label>Farmer Id :</label>
      <input
        type="number"
        className="control"
        value={data}
      />
    </div>

    <div className="mb-3">
      <label>Quantity :</label>
      <input
        type="number"
        className="control"
        placeholder="Enter quantity in kgs"
        onChange={(e) => setQuantity( e.target.value )}
      />
    </div> 

    <div className="mb-3">
      <label>Rupees :</label>
       <input
        type="number"
        className="control"
        placeholder="total amount"
        onChange={(e) => setRs( e.target.value )}
      />
    </div> 

    <div className="mb-3">
      <label>Phone No :</label>
       <input
        type="number"
        className="control"
        placeholder="Enter Phone number"
        onChange={(e) => setPhno( e.target.value )}
      />
    </div>

    <div className="back">
      <a href="/cropadvertise" className="btn btn-danger">Go Back</a>
    </div>

    <div className="sell">
      <button type="submit" className="btn btn-primary">
        Sell
      </button>
    </div>
  </form>
  )
}

export default Newsell;
