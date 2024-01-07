import Card from "./Card"
import styles from "./home.module.css"

export default function Description() {
    return (
        <div className={styles.column}>
            <h1>Lojas P10 - Onde tudo custa R$10</h1>
            <p className={styles.heroText}>Essa é a sua oportunidade de fazer <span className={styles.highlight}> compras incríveis.</span></p>
            <p className={styles.heroParagraph}>O que está na sua lista de compras hoje?</p>
            <button className={styles.orderButton}>Encontrar mais produtos</button>
            <div className={styles.row}>
                <Card />
                <Card />                
            </div >
        </div >
    )
}