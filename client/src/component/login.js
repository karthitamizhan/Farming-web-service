import React from "react";
import "../style/login.css";
import farmer from "../image/farmer_login.png";
import admin from "../image/adm.jpeg";
import sup from "../image/supplier.jpeg";
import {BrowserRouter as Route,Routes,Router,Link} from 'react-router-dom';
import HyperLink from './navbar';
export default function Login(){
    return(
        <>
           <HyperLink />
            <div className="login">
            <div className="gallery">
           
                <img className="extra-large" src={farmer} alt="Cinque Terre" width="150" height="150" />
           
            <a  href="/supplier-Login.js">
            <Link  to={{pathname: "/farmer"}}> <div className="desc">Farmer Login</div></Link> 

            </a>
            </div>
           <div className="gallery">
            
                <img className="extra" src={admin} alt="Forest" width="150" height="150" />
           
            <a  href="img_forest.jpg">
                
            <Link  to={{pathname: "/admin"}}> <div className="desc">Admin Login</div></Link> 
            
            </a>
            </div>
            <div className="gallery">
           
                <img className="extra" src={sup} alt="Northern Lights" width="150" height="150" />
            
             <Link  to={{pathname: "/supplier"}}> <div className="desc">supplier Login</div></Link> 
            </div>
            </div>
        </>
    );
}
