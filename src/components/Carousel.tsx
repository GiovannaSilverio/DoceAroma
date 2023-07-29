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
                    <img className="d-block h-80 w-full" src="cafecarrossel.png" alt="" />
                    <Carousel.Caption>
                    <h3>Embalagens personalizadas</h3>
                    <p>Produtos altamente instagramaveis</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block h-80 w-full" src="cake.jpg" alt="" />
                    <Carousel.Caption>
                    <h3>Bolos Encantadores</h3>
                    <p>
                        Bolos deliciosos para adoçar seus dias.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
          );
        }
        
        export default UncontrolledExample;
        