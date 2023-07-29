import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

        function CarrosselCardapio() {
            return (
              <div className='d-block h-700px p-30px'>
                  <Carousel >
                  <Carousel.Item>
                      <img className="d-block  w-100" src="img_cardapio/cafecarrossel.png" alt="cardapio da aroma doce" />
                      <Carousel.Caption>
                      <h3>TESTEzada</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img className="d-block  w-100" src="frente.jpg" alt="" />
                      <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img className="d-block  w-100" src="cardapio.jpg" alt="" />
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
        
        export default CarrosselCardapio;
        