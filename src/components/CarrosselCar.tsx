import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

        function CarrosselCardapio() {
            return (
              <div className='d-block h-700px p-30px'>
                  <Carousel >
                  <Carousel.Item>
                      <img className="d-block  w-100" src="img_cardapio/cafecarrossel.png" alt="cardapio da aroma doce" />
                      <Carousel.Caption>
                      <h3>Cafés para viagem</h3>
                      <p>Peça o seu para retirada.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img className="d-block  w-100" src="bolo.jpg" alt="" />
                      <Carousel.Caption>
                      <h3>Bolos</h3>
                      <p>Temos varios opções de bolos.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img className="d-block  w-100" src="cardapio.jpg" alt="" />
                      <Carousel.Caption>
                      <h3>Cardapio</h3>
                      <p>
                          Sempre atualizado para você ficar sabendo das novidades.
                      </p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  </Carousel>
              </div>
            );
          }
        
        export default CarrosselCardapio;
        