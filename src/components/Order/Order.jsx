import styles from "./Order.module.css";
import OrderCard from "./OrderCard.jsx";
import { OrderData } from "../../script.js";
function Order() {
    return (
        <div className="container">
            <section className={styles.order}>
                <div className={styles.orderTop}>
                    <h1>Up to -40% 🎊 Order.uk exclusive deals</h1>
                    <div className={styles.orderTopButton}>
                        <button className={styles.secondaryBtn}>Vegan</button>
                        <button className={styles.secondaryBtn}>Sushi</button>
                        <button className={styles.mainBtn}>
                            Pizza & Fast food{" "}
                        </button>
                        <button className={styles.secondaryBtn}>Others</button>
                    </div>
                </div>
                <div className={styles.orderContent}>
                    {OrderData.map((deal) => (
                        <OrderCard key={deal.id} {...deal} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Order;
