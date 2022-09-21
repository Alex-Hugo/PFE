import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Form, Row, Container, FormCheck, FloatingLabel, Carousel} from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
    <Row>
      <Col>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button href="http://s2.glbimg.com/rgj4yr8GEZZHJucynVco0V-gqWk=/s.glbimg.com/jo/eg/f/original/2016/10/31/samara620.jpg" variant ="danger">Cuidado!</Button>
      </Col>
      <Col>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button href="https://react-bootstrap.github.io/getting-started/introduction/">Link</Button>
      </Col>
    </Row>
    <Container fluid>
    <Form>
      <Form.Group>
        <br></br>
        <Form.Label> Dados rotineiros</Form.Label>
        <FloatingLabel
        label="Nome">
        <Form.Control nome="nome" placeholder="Digite seu nome"></Form.Control>
        </FloatingLabel>
      </Form.Group>

      <Form.Group>
        <br></br>
        <FloatingLabel
        label="Banco">
        <Form.Control banco="banco" placeholder="Digite seu banco"></Form.Control>
        </FloatingLabel>
      </Form.Group>

      <Form.Group>
        <br></br>
        <FloatingLabel
        label="Agência">
        <Form.Control agencia="agencia" placeholder="Digite sua agência"></Form.Control>
        </FloatingLabel>
      </Form.Group>

      <Form.Group>
        <br></br>
        <Form.Control senha="senha" placeholder="Digite sua senha" type="password"></Form.Control>
      </Form.Group>
      <br></br>
      <Form.Group>
      <Form.Label>Método de pagamento preferido</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Escolha...</option>
        <option value="1">PIX</option>
        <option value="2">Débito</option>
        <option value="3">Crédito</option>
        <option value="4">Dinheiro</option>
        <option value="5">Calote</option>
      </Form.Select>
      </Form.Group>
    </Form>
    </Container>
    <br></br>
    <br></br>
    </div>
  );
}

export default App;
