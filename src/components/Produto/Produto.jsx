import { useParams } from 'react-router-dom';
import styles from './Produto.module.css';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

const Produto = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProduto(id) {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await response.json();

        setProduto(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(id);
  }, [id]);

  if (loading || produto == null) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.product}>
      <div className={styles.product_image}>
        {<img src={produto.image} alt={produto.title} />}
      </div>
      <div className={styles.product_description}>
        <h1>{produto.title}</h1>
        <span className={styles.price}>R$ {produto.price}</span>
        <p className={styles.description}>{produto.description}</p>
      </div>
    </section>
  );
};

export default Produto;
