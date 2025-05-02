import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login, user, loading, error, clearError } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setShowError(true);

      const timer = setTimeout(() => {
        setShowError(false);
        clearError();
      }, 3000);
    }
    if (user) navigate('/');
  }, [error, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div className={styles.login}>
      <Form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Login</h2>

        <Row className="w-100 justify-content-center">
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Usuário:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Usuário"
                onChange={(e) => setUsername(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          {showError && (
            <Col xs={12}>
              <Alert variant="danger">{error}</Alert>
            </Col>
          )}

          {loading ? (
            <Col xs={12}>
              <Loader />
            </Col>
          ) : (
            <Col xs={12} md={8} lg={6} className="d-grid mb-3">
              <Button variant="primary" type="submit" className={styles.button}>
                Entrar
              </Button>
            </Col>
          )}
        </Row>

        <p className={styles.registerLink}>
          Não possui conta ainda? <Link to="/register">Clique aqui</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
