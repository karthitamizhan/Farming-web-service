import '../style/home.css';
import HyperLink from "./navbar";

import Carousel from 'react-bootstrap/Carousel';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

export default function Home() {
    return (
        <>
            <HyperLink />
            <div className="home">
                <Carousel>
                        <Carousel.Item interval={1000}>
                        <img
                            className=""
                src="https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600" height="500px" width="1250px"
                            alt="Image One"/>
                        <Carousel.Caption>
                         <a href="/login">Click To Login</a>
                        </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item interval={1000}>
                        <img
                            className=""
                src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=600" height="500px" width="1250px"
                            alt="Image Two"/>
                        <Carousel.Caption>
                         <a href="/login">Click To Login</a>
                        </Carousel.Caption>
                         </Carousel.Item>


                         <Carousel.Item interval={1000}>
                        <img
                            className=""
                src="https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg?auto=compress&cs=tinysrgb&w=600" height="500px" width="1250px"
                            alt="Image Two"/>
                        <Carousel.Caption>
                         <a href="/login">Click To Login</a>
                        </Carousel.Caption>
                         </Carousel.Item>


                         <Carousel.Item interval={1000}>
                        <img
                            className=""
                src="https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&w=600" height="500px" width="1250px"
                            alt="Image Two" />
                        <Carousel.Caption>
                         <a href="/login">Click To Login</a>
                        </Carousel.Caption>
                         </Carousel.Item>

                         <Carousel.Item interval={1000}>
                        <img
                            className=""
                src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=600" height="500px" width="1250px"
                            alt="Image Two" />
                        <Carousel.Caption>
                         <a href="/login">Click To Login</a>
                        </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item interval={1000}>
                        <img
                            className=""
                src="https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg?auto=compress&cs=tinysrgb&w=600" height="500px" width="1250px"
                            alt="Image Two"
                        />
                         <Carousel.Caption>
                         <a href="/login">Click To Login</a>
                        </Carousel.Caption>
                         </Carousel.Item>
                    </Carousel>
                    <div id='about' >
                    <div class="card text-center bg-secondary">
                        <div class="card-header ">
                            <h3 class="text-primary">Farmer</h3>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">A farmer is a person engaged in agriculture, raising living organisms for food or raw materials</h5>
                            <p class="card-text">Over half a billion farmers are smallholders</p>
                            <a href="farmer" class="btn btn-primary">Click to Farmer Login</a>
                        </div>
                        <div class="card-footer text-muted">
                        A farmer is a magician who produces money from the mud
                        </div>
                        </div>
                        <div class="card text-center bg-secondary">
                        <div class="card-header ">
                            <h3 class="text-primary">Supplier</h3>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Everyone is a customer for somebody or a supplier to somebody</h5>
                            <p class="card-text">Let us ask our suppliers to come and help us to solve our problems</p>
                            <a href="supplier" class="btn btn-primary">Click to Supplier Login</a>
                        </div>
                        <div class="card-footer text-muted">
                        Nature is not so much her own ever-sweet interprete
                        </div>
                        </div>
                    </div>
                    <section id="contact">
                    <div className='footer' style={{backgroundColor:"black"}}>
                        <div className='social' style={{alignItems:"center"}}>
                            <FaFacebook  className='icon' />
                            <FaInstagram className='icon' />
                            <FaTwitter className='icon' />
                            <FaPinterest className='icon' />
                        </div>
                    </div>
                    <div>
                    </div>
                    </section>
            </div>
            
        </>
    );
}