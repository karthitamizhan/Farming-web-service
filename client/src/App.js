import React from 'react';
import './App.css'; 
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './component/login';
import Home from './component/home';
import ImgLink from './component/frontimg';
import About from './component/about';
import Contact from './component/contact';
import Supplier from './component/supplier';
import Admin from './component/admin';
import Farmer from './component/farmer';
import New from './component/suppliernav';
import Farmnav from './component/farmernav';
import Post from './supplier/postadvertise';
import Crop from './farmer/cropadvertise';
import AllDetail from './component/adminnav';
import Sign from './component/farmer-sign';
import Signs from './component/supplier-sign';
import CropRec from './supplier/cropreceived';
import ViewFar from './admin/viewfarmer';
import ViewSup from './admin/viewsupplier';
import Complain from './farmer/complainstatus';
import Status from './farmer/status';
import Sell from './farmer/cropsell';
import Newsell from './farmer/sell';
import CropStat from './farmer/cropstatus';
function App() {
  return (
    <BrowserRouter>
     <ImgLink />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path="supplier" element={<Supplier /> }></Route>
      <Route path="admin" element={<Admin /> }></Route>
      <Route path="farmer" element={<Farmer /> }></Route>
      <Route path="suppliernav" element={<New /> }></Route>
      <Route path="postadvertise" element={<Post /> }></Route>
      <Route path="farmernav" element={<Farmnav /> }></Route>
      <Route path="cropadvertise" element={<Crop /> }></Route>
      <Route path="adminnav" element={<AllDetail /> }></Route>
      <Route path="farmer-sign" element={<Sign /> }></Route>
      <Route path="supplier-sign" element={<Signs /> }></Route>
      <Route path="cropreceived" element={<CropRec /> }></Route>
      <Route path="viewfarmer" element={<ViewFar /> }></Route>
      <Route path="viewsupplier" element={<ViewSup /> }></Route>
      <Route path="complainstatus" element={<Complain /> }></Route>
      <Route path="status" element={<Status /> }></Route>
      <Route path="cropsell" element={<Sell/>} ></Route>
      <Route path="cropstatus" element={<CropStat />}/>
      <Route path="sell/:id" element={<Newsell />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
