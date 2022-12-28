import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import { Carousel } from "react-bootstrap";
const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">


<div >
      <Carousel className="carousalText"   autoPlay={true}
    interval={1000}  >
  <Carousel.Item>
    <img
      className="d-block w-100 crousalimage"
      src="https://thumbs.dreamstime.com/b/woman-chooses-petunia-flowers-garden-plant-nursery-store-colorful-93398259.jpg"
      alt="First slide"
    />
    <Carousel.Caption >
      <h1>Online Plant Nursery Application</h1>
      <h4>Wherever life plants you, bloom with grace</h4>

    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 crousalimage"
      src="https://media.istockphoto.com/photos/colorful-hanging-flower-baskets-garden-greenhouse-plant-nursery-picture-id954824774"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Online Plant Nursery</h1>
      <h4>A single destination for all the nature lovers!</h4>
 
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 crousalimage"
      src="https://cdn.shopify.com/s/files/1/0047/9730/0847/files/nurserylive-vs-free-indoor-plants.jpg?v=1647779960"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1>Online Plant Nursery</h1>
      <h4>Happiness blooms in  garden</h4>
      
    </Carousel.Caption>
  </Carousel.Item>


   <Carousel.Item>
    <img
      className="d-block w-100 crousalimage"
       src="https://wallacesgardencenter.com/wp-content/uploads/bb-plugin/cache/FAVs-30-scaled-landscape.jpg"
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h1>Online Plant Nursery</h1>
      <h4>Plants are an easy way to make your home feel more at home.</h4>
 
    </Carousel.Caption>
  </Carousel.Item> 


{/*  <Carousel.Item>
    <img
      className="d-block w-100 crousalimage"
      // src={cake}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Online Plant Nursery</h1>
      <h4>Being able to care for plants is something you are born with</h4>
 
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 crousalimage"
      // src={chicken}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Online Plant Nursery</h1>
      <h4>A single destination for all the nature lovers!</h4>
 
    </Carousel.Caption>
  </Carousel.Item> */}

  {/* <Carousel.Item>
    <img
      className="d-block w-100 crousalimage"
      // src={poha}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1>Online Plant Nursery</h1>
      <h4>A single destination for all the plant lovers!</h4>
    </Carousel.Caption>
  </Carousel.Item> */}


</Carousel>
      
    </div>
  
      {/* <header className="jumbotron">
        
        <h3>{content}</h3>
         <img src="tropical-plant.jpg" class="card-img" alt="Background" height="540px" /> 
      
      </header> */}
    </div>
  );
};

export default Home;
