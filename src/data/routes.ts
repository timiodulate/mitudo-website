export const ROUTES = {
	home: "/",
	about: "/about",
	services: "/services",
	contact: "/contact",
	portfolio: "/portfolio",
} as const;

export const getServiceRoute = (slug: string) => `${ROUTES.services}/${slug}`;

export const navLinks = [
	{ label: "Home", href: ROUTES.home },
	{ label: "About", href: ROUTES.about },
	{ label: "Services", href: ROUTES.services },
	{ label: "Contact", href: ROUTES.contact },
];

export const footerLinks = [
	{ label: "Home", href: ROUTES.home },
	{ label: "About Us", href: ROUTES.about },
	{ label: "Services", href: ROUTES.services },
	{ label: "Portfolio", href: ROUTES.portfolio },
	{ label: "Contact", href: ROUTES.contact },
];
