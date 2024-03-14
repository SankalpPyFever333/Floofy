import Carousel from 'react-bootstrap/Carousel';
import dogOffer from "../../../Assets/DogFoodOffer.jpg"
import VetOffer from "../../../Assets/VetDogOffer.jpg"
import Shopbrands from "../../../Assets/AddToShop.jpg"


function MainVetOffer() {
      return (
            <Carousel pause="hover" interval={2000} data-bs-theme="dark">
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
                              src={Shopbrands}
                              alt="Second slide"
                        />

                  </Carousel.Item>

            </Carousel>
      );
}

export default MainVetOffer;



