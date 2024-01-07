import Description from "../components/Home/Description";
import Image from "../components/Home/Image";
import styles from "../components/Home/home.module.css"
export default function Home() {
    return (
        <main>
            <div className={styles.container}>
                <Description />
                <Image />
            </div>
        </main>
    )
}