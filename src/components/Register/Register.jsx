import React from 'react';
import styles from './Register.module.css';
import { Col, Form, Button, Row } from 'react-bootstrap';

const Register = () => {
  return (
    <div className={styles.register}>
      <Form className={styles.registerForm}>
        <h2 className={styles.title}>Cadastre-se</h2>

        <Row className="w-100 justify-content-center">
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Usuário:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuário"
                required
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira o e-mail"
                required
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha:</Form.Label>
              <Form.Control type="password" placeholder="Senha" required />
            </Form.Group>
          </Col>

          <Col xs={12} md={8} lg={6} className="d-grid mb-3">
            <Button variant="primary" type="submit" className={styles.button}>
              Entrar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Register;
