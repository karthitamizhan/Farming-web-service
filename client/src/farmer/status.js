import React from "react";
import Farmnav from "../component/farmernav";
export default function Status(){
    return(
        <>
        <Farmnav />
        <div className="Appp">
     <h2 style={{color:"green",textAlign:"center"}}>Complaint Details</h2><br />
      <table>
        <tr>
          <th> id</th>
          <th>Supplier name</th>
          <th>Mobile no</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
      </table>
    </div>

        </>
    );
}