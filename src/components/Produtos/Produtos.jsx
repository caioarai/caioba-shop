import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Produtos.module.css';
import { Link } from 'react-router-dom';
import Loader from '../Loader';

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  if (produtos == null) return <Loader />;

  return (
    <section className={styles.products}>
      {produtos.map((produto) => (
        <Link
          to={`produto/${produto.id}`}
          key={produto.id}
          className={styles.card}
        >
          <img src={produto.image} alt={produto.title} />
          <h2 className={styles.title}>{produto.title}</h2>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
