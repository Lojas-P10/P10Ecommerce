import Header from "./Header"
import Products from "./Products"
import styles from "./news.module.css"

export default function News() {
    return (
        <section className={styles.newsProducts}>
            <Header />
            <Products />
            {/* <Pagination /> */}

        </section>
    )
}