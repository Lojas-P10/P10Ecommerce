import styles from "./home.module.css"

export default function Card() {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.rating}>
                <i className={styles.fasFaStar}></i>
                <span>4.5</span>
            </div>
            <div className={styles.itemsInfo}>
                <img src="https://foodbreakbhd.pk/img/hero.png" alt="Item 1" />
                <span className={styles.dealName}>Deal 1</span>
            </div>
            <p>Biryani, Burger, Broast</p>
            <span>2000 PKR</span>
        </div>
    )
}