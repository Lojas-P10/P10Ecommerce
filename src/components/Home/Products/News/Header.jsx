import styles from "./news.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <span>lorem ipsum</span>
            <h2>produtos</h2>
            <div>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum itaque.</span>
                <button>Ver todos</button>
            </div>
        </div>
    )
}