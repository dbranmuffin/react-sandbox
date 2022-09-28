import { NavLink } from "../models/nav-link.model";

const pages: NavLink[] = [
    {
        text: 'Products',
        link: '/products'
    },
    {
        text: 'Pricing',
        link: '/pricing'
    },
    {
        text: 'Blog',
        link: '/blog'
    }
];

const settings: NavLink[] = [
    {
        text: 'Profile',
        link: '/profile'
    },
    {
        text: 'Account',
        link: '/account'
    },
    {
        text: 'Dashboard',
        link: '/dashboard'
    },
    {
        text: 'Logout',
        link: '/logout'
    }
];

export { pages, settings }