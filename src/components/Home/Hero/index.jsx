import Description from "./Description";
import Image from "./Image";
import styles from "./hero.module.css"
import MoreProducts from "./MoreProducts"

export default function Hero() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.arrows}>
                    <box-icon name='left-arrow-alt'></box-icon>
                    <box-icon name='right-arrow-alt'></box-icon>

                </div>
                <div className={styles.row}>
                    <Image />
                    <Description />
                </div>
                <div>
                    <MoreProducts />
                </div>

            </div>
        </main>
    )
}