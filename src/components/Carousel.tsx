 import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
        
        function UncontrolledExample() {
          return (
            <div className='d-block h-700px p-30px'>
                <Carousel >
                <Carousel.Item>
                    <img className="d-block h-80 w-full" src="cafeteria.jpg" alt="cardapio da aroma doce" />
                    <Carousel.Caption>
                    <h3>Um Lugar Aconchegante</h3>
                    <p>Aqui livros e cafe são a combinação perfeita</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block h-80 w-full" src="frente.jpg" alt="" />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block h-80 w-full" src="cardapio.jpg" alt="" />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
          );
        }
        
        export default UncontrolledExample;
        