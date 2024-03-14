import Carousel from 'react-bootstrap/Carousel';
import dogOffer from "../../../Assets/DogFoodOffer.jpg"
import VetOffer from "../../../Assets/VetDogOffer.jpg"
import fastestDelivery  from "../../../Assets/fastDeliveryImage.jpg"
import { useNavigate } from 'react-router-dom';


function MainShopOffer() {
      const navigate = useNavigate();
      const handleNavigateToShop = ()=>{
            navigate("/MoveToshopByCarousel")
      }
      return (
            <Carousel onClick={handleNavigateToShop} pause="hover" interval={1600} data-bs-theme="dark">
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={dogOffer}
                              alt="First slide"
                        />
                        
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={VetOffer}
                              alt="Second slide"
                        />
                        
                  </Carousel.Item>
                  <Carousel.Item>
                        <img
                              className="d-block w-100"
                              src={fastestDelivery}
                              alt="Second slide"
                        />
                        
                  </Carousel.Item>
                  
            </Carousel>
      );
}

export default MainShopOffer;

