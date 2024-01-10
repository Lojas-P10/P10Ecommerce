import Description from "./Description";
import Image from "./Image";
import styles from "./hero.module.css"

export default function Hero() {
    return (
        <main>
            <div className={styles.container}>
                <div>
                    
                    
                </div>
                <Image />
                <Description />
            </div>
        </main>
    )
}