import { CiInstagram, CiMail, CiPhone } from 'react-icons/ci';
import styles from './Contato.module.css';

const Contato = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.box}>
        <h2>Contatos</h2>
      </div>
      <ul className={styles.infos}>
        <li>
          <CiPhone />
          <span>(14) 99999-9999</span>
        </li>
        <li>
          <CiMail />
          <span>teste@gmail.com</span>
        </li>
        <li>
          <CiInstagram />
          <span>@teste</span>
        </li>
      </ul>
    </section>
  );
};

export default Contato;
