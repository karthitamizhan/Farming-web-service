import React, { Component } from "react";
import '../style/farm.css';
import New from '../component/suppliernav';
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: "",
      cid: "",
      cname: "",
      quantity: "",
      image: "",
      userData:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { sid, cid, cname, quantity, img,phno} = this.state;
    console.log(sid, cid, cname, quantity, img,phno);
    fetch("http://localhost:5000/cropost", {
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
        quantity,
        img,
        phno,
        // token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        
        console.log(data, "crop posted");
        
        if(data.error==="error"){
          alert("Crop not posted")
        }
        if(data.status==="ok"){
          alert("Crop Posted Successfully")
          }
        if(data.error=="id Exists"){
          alert("Id Exists ")
        }
        this.setState({cropost:data.data})
      });
  }
  
  componentDidMount() {
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
        this.setState({ sid: data.data.id });
      });
  }
  render() {
    return (
      <>
      <New />
      <form onSubmit={this.handleSubmit} className="form">
        <h3 style={{textAlign:"center",color:"red"}} className="post">Post Your Required Crops </h3>
        <div className="mb-3">
          <label >Supplier Id :</label>
          <input
            type="number"
            className="control"
            value={this.state.sid}
            // placeholder={data.data.id}
            // value="{data.data.id}"
            
            onChange={(e) => this.setState({ sid: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Crop Id :</label>
          <input
            type="number"
            className="control"
            placeholder="Enter crop id"
            onChange={(e) => this.setState({ cid: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Crop Name :</label>
          <input
            type="text"
            className="control"
            placeholder="Enter crop name"
            onChange={(e) => this.setState({ cname: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Quantity :</label>
          <input
            type="number"
            className="control"
            placeholder="Enter quantity"
            onChange={(e) => this.setState({ quantity: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Import Crop Image :</label>
           <input
            type="text"
            className="control"
            placeholder="Enter image url"
            onChange={(e) => this.setState({ img: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Phone No :</label>
           <input
            type="number"
            className="control"
            placeholder="Enter Phone number"
            onChange={(e) => this.setState({ phno: e.target.value })}
          />
        </div>

        <div className="">
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </div>
      </form>


      </>
    );

  }

}