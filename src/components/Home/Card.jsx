import styles from "./home.module.css"
import { ReactPropTypes } from "react"


export default function Card({preco, titulo, unidades, imagem}) {
    return (
        <div className={styles.infoContainer}>  
            <div className={styles.itemsInfo}>
                <img src={imagem} alt="Item 1" />
                <span className={styles.dealName}>R$ {preco}</span>
            </div>
            <p>{titulo}</p>
            <span>Restam {unidades} unidades</span>
        </div>
    )
}