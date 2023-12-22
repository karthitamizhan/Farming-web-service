import React  from 'react';
import Farmnav from '../component/farmernav';
import '../style/view.css';
 
function Complain() {
   
  return(
    <>
     <Farmnav />
     <form className="form">
        <h3 style={{textAlign:"center",color:"red"}}>Complain Page</h3>

        <div className="mb-3">
          <label>Complain id :</label>
          <input
            type="id"
            className="control"
            placeholder="Enter id"
            onChange={(e) => this.setState({ pid: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Complain  :</label>
          <textarea name="w3review" rows="4" cols="50"></textarea>
        </div>

        <div className="mb-3">
         
        </div>

        <div className="">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        </form>

    </>


  );
}
 
export default Complain;