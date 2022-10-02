import { SectionLink, FooterColumnLink, PageLink, PageInfo, ExternalLink } from "../../models/links.model";
import { About } from "../../pages/about";
import { Contact } from "../../pages/contact";
import { Homepage } from "../../pages/homepage";
import { Products } from "../../pages/products";

const BASE_URL = 'localhost:3000'

const SITE_TITLE = 'React Sandbox';  

const homepage: PageLink = {
    text: 'Home',
    path: '/',
    element: <Homepage />
};

const about: PageLink = {
    text: 'About Us',
    path: '/about',
    element: <About />
};

const mission: SectionLink = {
    text: 'Mission',
    path: '/about/#mission'
};

const testimonials: SectionLink = {
    text: 'Testimonials',
    path: '/about/#testimonials'
};

const contact: PageLink = {
    text: 'Contact Us',
    path: '/contact',
    element: <Contact />
};

const products: PageLink = {
    text: 'Products',
    path: '/products',
    element: <Products />
};

const linkedIn: ExternalLink = {
    text: 'LinkedIn',
    path: 'https://www.linkedin.com/in/david-brannon-lt/'
};

const allPageInfo: PageInfo[] = [
    {
        page: homepage,
        sections: []
    },
    {
        page: about,
        sections: [mission, testimonials]
    },
    {
        page: contact,
        sections: []
    },
    {
        page: products,
        sections: []
    }
]

const headerPages: PageLink[] = [
    products
];

const footerColumnLinks: FooterColumnLink[] = [
    {
        title: 'About Us',
        links: [mission, testimonials, contact]
    },
    {
        title: 'Social Media',
        links: [linkedIn]
    }
]  

export { allPageInfo, headerPages, footerColumnLinks, BASE_URL, SITE_TITLE }