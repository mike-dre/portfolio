import styles from "./caroussel.module.css"

export function Caroussel() {

    return (
        <div className={styles.banner}>
            <div className={styles.slider}>
                <div className={styles.item} id={styles.item1}><img className={styles.img} src="./images/dragon_1.jpg"></img></div>
                <div className={styles.item} id={styles.item2}><img className={styles.img} src="./images/dragon_2.jpg"></img></div>
                <div className={styles.item} id={styles.item3}><img className={styles.img} src="./images/dragon_3.jpg"></img></div>
                <div className={styles.item} id={styles.item4}><img className={styles.img} src="./images/dragon_4.jpg"></img></div>
                <div className={styles.item} id={styles.item5}><img className={styles.img} src="./images/dragon_5.jpg"></img></div>
                <div className={styles.item} id={styles.item6}><img className={styles.img} src="./images/dragon_6.jpg"></img></div>
                <div className={styles.item} id={styles.item7}><img className={styles.img} src="./images/dragon_7.jpg"></img></div>
                <div className={styles.item} id={styles.item8}><img className={styles.img} src="./images/dragon_8.jpg"></img></div>
                <div className={styles.item} id={styles.item9}><img className={styles.img} src="./images/dragon_9.jpg"></img></div>
                <div className={styles.item} id={styles.item10}><img className={styles.img} src="./images/dragon_10.jpg"></img></div>
            </div>
            <div className={styles.content}>

            
            <div className={styles.model}></div>
            </div>
        </div>
    )
}