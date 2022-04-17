import React from "react";
import { Carousel } from "react-bootstrap";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mb-5">
      <div className="mb-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/374852/pexels-photo-374852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Making with perfection!</h3>
              <p>Every drop of our tea is made with highly trained expert!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1394841/pexels-photo-1394841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Serving the best!</h3>
              <p>We serve you the best flevour in the country!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/131044/pexels-photo-131044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Fresh and natural</h3>
              <p>We use only natural ingredients!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="mb-5">
          <Services></Services>
      </div>
    </div>
  );
};

export default Home;
