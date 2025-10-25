import styles from "./Categories.module.css";

function CategoriesCard({ img, name, title }) {
    return (
        <section className={styles.categoriesCard}>
            <img src={img} alt="" />
            <div className={styles.catCardBottom}>
                <h2>{name}</h2>
                <p>{title}</p>
            </div>
        </section>
    );
}

export default CategoriesCard;
