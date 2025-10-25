import styles from "./Restaurant.module.css";
import RestaurantCard from "./RestaurantCard.jsx";
import { restaurantsData } from "../../script.js";
function Restaurants() {
    return (
        <section className="container">
            <div className={styles.restaurant}>
                <div className={styles.restaurantTop}>
                    <h1>Popular Restaurants</h1>
                </div>
                <div className={styles.restaurantContent}>
                    {restaurantsData.map((deal) => (
                        <RestaurantCard key={deal.id} {...deal} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Restaurants;
