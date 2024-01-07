import Description from "./Description";
import Image from "./Image";
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <main>
            <div className={styles.container}>
                <Description />
                <Image />
            </div>
        </main>
    )
}