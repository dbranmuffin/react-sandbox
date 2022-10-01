import { NavLink } from "../../models/nav-link.model";
import { About } from "../../pages/about";
import { Homepage } from "../../pages/homepage";
import { Mission } from "../../pages/mission";
import { Products } from "../../pages/products";

const pages: NavLink[] = [
    {
        text: 'Home',
        path: '/',
        element: <Homepage/>
    },
    {
        text: 'About',
        path: '/about',
        element: <About/>
    },
    {
        text: 'Mission',
        path: '/mission',
        element: <Mission/>
    },
    {
        text: 'Products',
        path: '/products',
        element: <Products/>
    }
];

export { pages }