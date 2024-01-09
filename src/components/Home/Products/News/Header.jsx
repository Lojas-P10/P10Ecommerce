import styles from "./news.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <h2>Novos produtos</h2>
            <div className={styles.row}>
                <span>Desfrute dos melhores produtos que chegaram em nossas lojas!</span>
                <button>Ver todos</button>
            </div>
        </div>
    )
}