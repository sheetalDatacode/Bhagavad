import quote from './images/quotes-bg.png';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import "./Quotes.css";
function Quotes()
{
    return(
        <div> 
                <div>
                <div className='Quoteimage'>
                <img src={quote} className='image' alt="..."/> 
                <div className="quotediv">
                    <h1 className='Quotehead'>Bhagavad Gita Quotes by Lord Krishna</h1> 
                 </div>
                 </div>
                </div>
                <div>
                    <div>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="..." alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide"/>
                    </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                        </div>
                    </div>
                 </div>
        </div>
    )
}
export default Quotes;