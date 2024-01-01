import styles from "./nav.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { openDropdown, closeDropdown } from "../../../redux/dropdown/action";
const Nav = ({ openDropdown, isOpen, closeDropdown }) => {
  return (
    <nav>
      <img
        src="../../../../public/LojasP10/logo-menor-nome.png"
        alt="logo das lojas P10"
        className={styles.logo}
      />
      <div>
        <div>
          <div onMouseLeave={closeDropdown} onMouseEnter={openDropdown}>
            <span >
              Produtos
            </span>
            <div
              className={styles.dropdown}
              style={{ opacity: isOpen ? "1" : "0" }}
            >
              <div>hahahaha</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContent}>
        <button>Carrinho</button>
        <button className={styles.accountButton}>Criar conta</button>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.dropdown.isOpen,
});

const mapDispatchToProps = {
  openDropdown,
  closeDropdown,
};
Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openDropdown: PropTypes.func.isRequired,
  closeDropdown: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
