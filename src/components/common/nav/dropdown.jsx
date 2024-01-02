import styles from "./nav.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { CaretDoubleRight } from "@phosphor-icons/react";
import { openDropdown, closeDropdown } from "../../../redux/dropdown/action";
const Dropdown = ({ openDropdown, isOpen, closeDropdown }) => {
  const categorias = [
    {
      description: "Brinquedos",
    },
    {
      description: "Brinquedos",
    },
    {
      description: "Brinquedos",
    },
    {
      description: "Brinquedos",
    },
    {
      description: "Brinquedos",
    },
  ];
  const descontos = [
    {
      description: "Brinquedos",
    },
    {
      description: "Brinquedos",
    },
    {
      description: "Brinquedos",
    },
    {
      description: "Brinquedos",
    },
    {
      description: "Brinquedos",
    },
  ];
  const marcas = [
    {
      description: "Nike",
    },
    {
      description: "Adidas",
    },
    {
      description: "Gucci",
    },
    {
      description: "Dell",
    },
    {
      description: "HorodeskiComp",
    },
  ];
  return (
    <div>
      <span className="product" onMouseEnter={openDropdown}>
        Produtos
      </span>
      <div
        className={styles.dropdown}
        onMouseLeave={closeDropdown}
        style={{ opacity: isOpen ? "1" : "0" }}
      >
        <div className={styles.cow}>
          <div className={styles.categorias}>
            <span className={styles.titleDropdown}>CATEGORIAS</span>
            <div className={styles.categoriasContent}>
              {categorias.map((categoria, index) => {
                return (
                  <div className={styles.option} key={index}>
                    <a className={styles.marca}>{categoria.description}</a>
                    <CaretDoubleRight size={12} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.categorias}>
            <span className={styles.titleDropdown}>MARCAS</span>
            <div className={styles.categoriasContent}>
              {marcas.map((marca, index) => {
                return (
                  <div className={styles.option} key={index}>
                    <a className={styles.marca}>{marca.description}</a>
                    <CaretDoubleRight size={12} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.categorias}>
            <span className={styles.titleDropdown}>DESCONTOS</span>
            <div className={styles.categoriasContent}>
              {descontos.map((desconto, index) => {
                return (
                  <div className={styles.option} key={index}>
                    <a className={styles.marca}>{desconto.description}</a>
                    <CaretDoubleRight size={12} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.surpresas}>
          <div className={styles.linha}></div>
          <span> Veja surpresas!</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.dropdown.isOpen,
});

const mapDispatchToProps = {
  openDropdown,
  closeDropdown,
};
Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
