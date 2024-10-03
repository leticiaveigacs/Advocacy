import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Button, Card, FormText } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="me-auto mb-2 mb-lg-0">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#cards">Cards</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link disabled></Nav.Link>
              </Nav>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <Button variant="outline-success" type="submit">Search</Button>
              </form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main id="home">
        <Container className="text-center px-5 my-5">
          <Row>
            <Col sm={8}>
              <h1 className='font-weight-light'>Escritórios de Advocacia</h1>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."
              </p>
              <Button variant="outline-primary">Call to action</Button>

              <img src="\imagens\img4.png" className="img-fluid rounded" alt="..." />
            </Col>
            <Col sm={4}>
              {/* Conteúdo da coluna lateral */}
            </Col>
          </Row>
        </Container>

        <Row>
          <Col>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>
                This is some text within a card body.
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="cards">
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="\imagens\img1.png" />
              <Card.Body>
                <Card.Title>Direito e Leis</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="\imagens\img2.png" />
              <Card.Body>
                <Card.Title>Material Complementar</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="\imagens\img3.png" />
              <Card.Body>
                <Card.Title>Membros</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>cd part1
      </main>

      <footer className="py-5 my-5 bg-dark">
        <Container className='px-4'>
          <p className="text-center text-white">Letícia Veiga &copy; | 2024</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
