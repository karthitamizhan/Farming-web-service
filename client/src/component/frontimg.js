import "../style/navbar.css";
import image from '../image/vivasaya.jpg';
function ImgLink() {
  return (
    <div>
       <div className="imgmain">
        <div className="main_image">
        <img className="imglogo" src={image} />
        </div>
        </div>
     
    </div>
  );
}

export default ImgLink;