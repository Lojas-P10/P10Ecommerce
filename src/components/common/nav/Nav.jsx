import Dropdown from "./dropdown";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav>
      <img
        src="../../../../public/LojasP10/logo-menor-nome.png"
        alt="logo das lojas P10"
        className={styles.logo}
      />
      <div>
        <Dropdown />
      </div>
      <div className={styles.buttonsContent}>
        <button>Carrinho</button>
        <button className={styles.accountButton}>Criar conta</button>
      </div>
    </nav>
  );
};


export default Nav