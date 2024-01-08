import Dropdown from "./dropdown";
import styles from "./nav.module.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={isScrolled ? styles.scrolled : ""}>
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