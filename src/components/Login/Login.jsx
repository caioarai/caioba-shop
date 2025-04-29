import React from 'react';
import styles from './Login.module.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles.login}>
      <Form className={styles.loginForm}>
        <h2 className={styles.title}>Login</h2>

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

        <p className={styles.registerLink}>
          Não possui conta ainda? <Link to="/register">Clique aqui</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
