import Carousel from 'react-bootstrap/Carousel';
import "./index.css";
import {Container, Grid} from "@mui/material";

function Slider() {
  return (
    <Container maxWidth="x1"> 
     <Grid container mt={1}  >
   <Carousel fade className='carousel-width'>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="./img/reebok.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Reebok</h1>
          <h4>Felicidad es... lucir zapatillas increibles</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="./img/air.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Converse</h1>
          <h4>Llega tan lejos como quieras con zapatillas que te hagan sentir increíble</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="./img/shane.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>Adidas</h1>
          <h4>
          Si te encantan deberían ser tuyos… Date el gusto.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Grid>
    </Container>  
    
  );
}

export default Slider;