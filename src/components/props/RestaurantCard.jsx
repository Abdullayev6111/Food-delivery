import styles from "../Restaurants/Restaurant.module.css";
function RestaurantCard({ img, title }) {
    return (
        <div className={styles.restaurantCard}>
            <img src={img} alt="" />
            <div className={styles.restCardBottom}>
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default RestaurantCard;
