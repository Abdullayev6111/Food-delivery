import styles from "./Order.module.css";
function OrderCard({ img, shadow, place, location, discount }) {
    return (
        <section className={styles.orderCard}>
            <img src={img} className={styles.mainImg} alt="" />
            <img src={shadow} className={styles.shadow} alt="" />
            <h4>{place}</h4>
            <h1>{location}</h1>
            <p>{discount}</p>
        </section>
    );
}

export default OrderCard;
