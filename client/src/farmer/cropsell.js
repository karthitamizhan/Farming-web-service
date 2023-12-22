import React, { useState, useEffect} from "react";
import '../style/farm.css';
import { useParams } from "react-router-dom";
function Sell() {
  const [sid, setSid] = useState("");
  const [cid, setCid] = useState("");
  const [cname, setCname] = useState("");
  const [fid, setFid] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rs, setRs] = useState("");
  const [phno, setPhno] = useState("");
  const [data, setData] = useState("");

    const {id}=useParams
    const sellCrop = JSON.parse(id)
    console.log(sellCrop);
      let handleSubmit = async (e) => {
      e.preventDefault();
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
    console.log(data);
  
    return (
      
      
      <form onSubmit={handleSubmit} className="form">
        <h3 style={{textAlign:"center",color:"red"}}>Sell Crops</h3>

        <div className="mb-3">
          <label>Supplier id :</label>
          <input
            type="number"
            className="form-control"
            placeholder="supplier sid"
            onChange={(e) => setSid(e.target.value )}
          />
        </div>

        <div className="mb-3">
          <label>Crop id :</label>
          <input
            type="number"
            className="control"
            placeholder="crop cid"
            onChange={(e) => setCid( e.target.value )}
          />
        </div>

        <div className="mb-3">
          <label>Crop name :</label>
          <input
            type="text"
            className="control"
            placeholder="crop name"
            onChange={(e) => setCname( e.target.value )}
          />
        </div>

        <div className="mb-3">
          <label>Farmer id :</label>
          <input
            type="number"
            className="control"
            // value={this.state.userData}
            onChange={(e) => setFid( e.target.value )}
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
          <label>Phone Number :</label>
           <input
            type="number"
            className="control"
            placeholder="Enter Pnone numebr"
            onChange={(e) => setPhno( e.target.value )}
          />
        </div>

        <div className="back">
          <a href="/cropadvertise" className="btn btn-danger">Go Back</a>
        </div>

        <div className="">
          <button type="submit" className="btn btn-primary">
            Sell
          </button>
        </div>
      </form>
      
    );
  }
export default Sell;









