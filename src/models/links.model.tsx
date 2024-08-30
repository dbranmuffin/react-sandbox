interface CustomLink {
    text: string
    path: string
}

interface PageLink extends CustomLink {
    element: JSX.Element
};

interface SectionLink extends CustomLink {};

interface ExternalLink extends CustomLink {}

type FooterColumnLink = {
    title: string,
    links: any[]
}

type PageInfo = {
    page: PageLink,
    sections: CustomLink[]
}

export type { PageLink, SectionLink, ExternalLink, FooterColumnLink, PageInfo }