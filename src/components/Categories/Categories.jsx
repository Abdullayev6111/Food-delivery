import styles from "./Categories.module.css";
import CategoriesCard from "./CategoriesCard.jsx";
import { CategoriesData } from "../../script.js";
function Categories() {
    return (
        <section className="container">
            <div className={styles.categories}>
                <div className={styles.categoriesTop}>
                    <h1>Order.uk Popular Categories 🤩</h1>
                </div>
                <div className={styles.categoriesContent}>
                    {CategoriesData.map((deal) => (
                        <CategoriesCard key={deal.id} {...deal} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;
