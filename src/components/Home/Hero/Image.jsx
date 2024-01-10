import styles from "./hero.module.css"

export default function Image() {
    return (
        <div className={styles.column}>

            <img className={styles.foodImage} src="../../../public/produto.png"
                alt="Delicious Food Image" id="foodImage" />
        </div>
    )
}