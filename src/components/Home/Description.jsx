import Card from "./Card"
import styles from "./home.module.css"

export default function Description() {
    const produtos = [{
        id: 1,
        preco: 2.72,
        titulo: "Esmalte",
        unidades: 2,
        imagem: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71DxUGmIF4L._AC_UL320_.jpg"
    },
    {
        id: 2,
        preco: 4.14,
        titulo: "Jaqueta jeans feminina",
        unidades: 42,
        imagem: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/913sL+OvALL._AC_SY500_.jpg"
    },]
    return (
        <div className={styles.column}>
            <h1>Lojas P10 - Onde tudo custa R$10</h1>
            <p className={styles.heroText}>Essa é a sua oportunidade de fazer <span className={styles.highlight}> compras incríveis.</span></p>
            <p className={styles.heroParagraph}>O que está na sua lista de compras hoje?</p>
            <button className={styles.orderButton}>Encontrar mais produtos</button>
            <div className={styles.row}>
                {
                    produtos.map((produto) => (
                        <Card preco={produto.preco} key={produto.id} unidades={produto.unidades} titulo={produto.titulo} imagem={produto.imagem}/>

                    ))
                }
            </div >
        </div >
    )
}