import "./nav.css"

export default function Nav() {
  return (
    <nav>
      <img
        src="../../../../public/LojasP10/logo-menor-nome.png"
        alt="logo das lojas P10"
        className="logo"
      />
      <div>
        <button>Criar conta</button>
        <button>Carrinho</button>
      </div>
    </nav>
  );
}
