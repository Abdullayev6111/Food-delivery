import OrderCard1 from "./assets/images/orderCard-img.png";
import OrderCard2 from "./assets/images/orderCard-img2.png";
import Shadow from "./assets/images/shadow.png";
import Burgers from "./assets/images/cat-img1.png";
import Salads from "./assets/images/cat-img2.png";
import Pasta from "./assets/images/cat-img3.png";
import Pizza from "./assets/images/cat-img4.png";
import Breakfast from "./assets/images/cat-img5.png";
import Soups from "./assets/images/cat-img6.png";
import McDonald from "./assets/images/rest-img1.png";
import Papajohns from "./assets/images/rest-img2.png";
import KFC from "./assets/images/rest-img3.png";
import TexasChicken from "./assets/images/rest-img4.png";
import BurgerKing from "./assets/images/rest-img5.png";
import Shaurma from "./assets/images/rest-img6.png";
export const OrderData = [
    {
        id: 1,
        img: OrderCard1,
        shadow: Shadow,
        place: "Restaurant",
        location: "Chef Burgers London",
        discount: "-40%",
    },
    {
        id: 2,
        img: OrderCard2,
        shadow: Shadow,
        place: "Restaurant",
        location: "Grand Ai Cafe London",
        discount: "-20%",
    },
    {
        id: 3,
        img: OrderCard1,
        shadow: Shadow,
        place: "Restaurant",
        location: "Butterbrot Caf’e London",
        discount: "-40%",
    },
];

export const CategoriesData = [
    {
        id: 1,
        img: Burgers,
        name: "Burgers & Fast food",
        title: "21 Restaurants",
    },
    {
        id: 2,
        img: Salads,
        name: "Salads",
        title: "32 Restaurants",
    },
    {
        id: 3,
        img: Pasta,
        name: "Pasta & Casuals",
        title: "4 Restaurants",
    },
    {
        id: 4,
        img: Pizza,
        name: "Pizza",
        title: "32 Restaurants",
    },
    {
        id: 5,
        img: Breakfast,
        name: "Breakfast",
        title: "4 Restaurants",
    },
    {
        id: 6,
        img: Soups,
        name: "Soups",
        title: "32 Restaurants",
    },
];

export const restaurantsData = [
    {
        id: 1,
        img: McDonald,
        title: "McDonald’s London",
    },
    {
        id: 2,
        img: Papajohns,
        title: "Papa Johns",
    },
    {
        id: 3,
        img: KFC,
        title: "KFC West London",
    },
    {
        id: 4,
        img: TexasChicken,
        title: "Texas Chicken",
    },
    {
        id: 5,
        img: BurgerKing,
        title: "Burger King",
    },
    {
        id: 6,
        img: Shaurma,
        title: "Shaurma 1",
    },
];
