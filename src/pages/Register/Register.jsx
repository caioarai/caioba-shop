import React, { useState } from 'react';
import styles from './Register.module.css';
import { Col, Form, Button, Row, Alert } from 'react-bootstrap';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      showAlert('Senhas diferentes', 'danger');
      return;
    }

    const response = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data) {
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      showAlert('Usuário criado com sucesso!', 'success');
    }
  };

  const showAlert = (message, type) => {
    setMessage(message);
    setType(type);
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };

  return (
    <div className={styles.register}>
      <Form className={styles.registerForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Cadastre-se</h2>

        <Row className="w-100 justify-content-center">
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Usuário:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuário"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirmar senha:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmar senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </Form.Group>
          </Col>

          {showError && (
            <Col xs={12}>
              <Alert variant={type}>{message}</Alert>
            </Col>
          )}

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
