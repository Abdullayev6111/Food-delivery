import styles from "./Header.module.css";
import location from "../../assets/images/Location.svg";
import CartImg from "../../assets/images/cart-img.svg";
import ForwardBtn from "../../assets/images/forward-btn.svg";
import logo from "../../assets/images/header-logo.svg";
import UserImg from "../../assets/images/user-img.svg";
function Header() {
    return (
        <section className="container">
            <div className={styles.header}>
                <div className={styles.headerTop}>
                    <h1>
                        🌟 Get 5% Off your first order,
                        <span>Promo: ORDER5</span>
                    </h1>
                    <div className={styles.htRight}>
                        <div className={styles.htRightText}>
                            <img src={location} alt="" />
                            <h2>Regent Street, A4, A4201, London</h2>
                            <h3>Change Location</h3>
                        </div>
                        <div className={styles.htRightButton}>
                            <button>
                                <img src={CartImg} alt="" />
                            </button>
                            <button>23 Items</button>
                            <button>GBP 79.89</button>
                            <button>
                                <img src={ForwardBtn} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <img src={logo} alt="" />
                    <div className={styles.hbContent}>
                        <h2>Home</h2>
                        <h2>Browse Menu</h2>
                        <h2>Special Offers</h2>
                        <h2>Restaurants</h2>
                        <h2>Track Order</h2>
                        <button>
                            <img src={UserImg} alt="" />
                            Login/Signup
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
