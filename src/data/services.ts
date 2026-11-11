// Every service Mitudo sells, mirrored from the Service Catalog in Notion.
// Scope lives in Notion; keep names and "what's included" in step with it.
// Prices are deliberately not shown here.

export type ServiceKind = "service" | "package" | "add-on";

export type PaymentTerms = "split" | "upfront" | "monthly" | "free";

export interface FAQ {
	q: string;
	a: string;
}

export interface Service {
	slug: string;
	name: string;
	category: ServiceCategoryId;
	kind: ServiceKind;
	summary: string;
	description: string[];
	includes: string[];
	youProvide?: string[];
	/** Packages this service is part of (slugs). */
	partOf?: string[];
	/** For packages: the services inside it (slugs). */
	contains?: string[];
	/** Services that pair well with this one (slugs). */
	related?: string[];
	payment: PaymentTerms;
	/** Only where it's known; otherwise the quote confirms it. */
	timeline?: string;
	faqs?: FAQ[];
}

export type StageId = "start" | "set-up" | "stand-out" | "run";

/** The three stages (plus where we start) the service groups sit under. */
export const stages: { id: StageId; title: string; blurb: string }[] = [
	{
		id: "start",
		title: "Start here",
		blurb: "Find out what's missing, and get your business written down properly.",
	},
	{
		id: "set-up",
		title: "Set up right",
		blurb: "Registered properly, protected, and on your own domain and email.",
	},
	{
		id: "stand-out",
		title: "Stand out",
		blurb: "A brand, website and online profiles that look established and get you found.",
	},
	{
		id: "run",
		title: "Run smoothly",
		blurb: "Filings on time, things renewed and working, and tools that take the busywork off your desk.",
	},
];

export type ServiceCategoryId =
	| "start"
	| "domain-email"
	| "websites"
	| "brand"
	| "social-google"
	| "registration"
	| "after-registration"
	| "ip"
	| "software"
	| "aftercare";

/** In stage order: this is the order every page lists them in. */
export const serviceCategories: {
	id: ServiceCategoryId;
	stage: StageId;
	title: string;
	blurb: string;
}[] = [
	{
		id: "start",
		stage: "start",
		title: "Start Here: Audit & Discovery",
		blurb: "Find out what's missing, and get your business written down properly.",
	},
	{
		id: "registration",
		stage: "set-up",
		title: "Business & Company Registration",
		blurb: "Register the right kind of business with the CAC, and get banking sorted.",
	},
	{
		id: "ip",
		stage: "set-up",
		title: "Trademark & IP Registration",
		blurb: "Register your name, logo, work or invention so no one else can use it.",
	},
	{
		id: "domain-email",
		stage: "set-up",
		title: "Domain, Email & Workspace Setup",
		blurb: "Your own web address, and email and team accounts that say you're a real business.",
	},
	{
		id: "brand",
		stage: "stand-out",
		title: "Brand Identity & Collateral Design",
		blurb: "A logo, colours and materials that make everything look like one business.",
	},
	{
		id: "websites",
		stage: "stand-out",
		title: "Website Design & Development",
		blurb: "A website or online store people find when they search for you, and trust when they land.",
	},
	{
		id: "social-google",
		stage: "stand-out",
		title: "Social Media & Google Business Profile",
		blurb: "Consistent profiles everywhere, WhatsApp Business, and a spot on Google Maps.",
	},
	{
		id: "after-registration",
		stage: "run",
		title: "CAC Filings & Compliance",
		blurb: "The yearly filings, changes and certificates a registered business needs.",
	},
	{
		id: "software",
		stage: "run",
		title: "Custom Software Development",
		blurb: "Tools and information systems that simplify how your business runs.",
	},
	{
		id: "aftercare",
		stage: "run",
		title: "Maintenance, Support & Renewals",
		blurb: "Keep everything running and renewed after it's delivered.",
	},
];

export const getCategory = (id: ServiceCategoryId) =>
	serviceCategories.find((category) => category.id === id);

export const getCategoriesByStage = (stage: StageId) =>
	serviceCategories.filter((category) => category.stage === stage);

export const services: Service[] = [
	// ── Where we start ──────────────────────────────────────────────
	{
		slug: "online-presence-audit",
		name: "Online Presence Audit",
		category: "start",
		kind: "service",
		summary:
			"A written report on how your business shows up online, what's missing, and what to fix first.",
		description: [
			"We check how your business shows up across Google, your website, social media and reviews, and compare you with a few competitors. You get a clear report: what's working, what's missing, and what to fix first.",
			"Use it to fix things yourself, or have us handle the parts you want done. If you go ahead with any of our services, the audit fee comes off the total.",
		],
		includes: [
			"Google search and Google Maps check",
			"Google Business Profile review",
			"Website check: speed, mobile, clarity, basic SEO",
			"Social media check: handles, profiles, consistency, activity",
			"Brand consistency and contact details across platforms",
			"A short comparison with 2 to 3 competitors",
			"A branded PDF report with priority fixes",
		],
		youProvide: [
			"Your business name and what you do",
			"Links to your website and social media, if you have them",
		],
		payment: "upfront",
		timeline: "3 to 5 business days",
		faqs: [
			{
				q: "How long does the audit take?",
				a: "3 to 5 business days from payment. A faster turnaround can be arranged if you need it.",
			},
			{
				q: "Do I have to buy services after the audit?",
				a: "No. The report is yours to act on however you like. If you do go ahead with any of our services, the audit fee is credited toward them.",
			},
		],
	},
	{
		slug: "brand-documentation",
		name: "Brand Documentation",
		category: "start",
		kind: "service",
		summary:
			"Your business, written down properly: the foundation every other service is built from. Free with every engagement.",
		description: [
			"Before we design or build anything, we document your business: what you do, who you serve, how people reach you, and every decision we make along the way.",
			"You get an organised folder you keep for good, a \"How It Was Built\" document and a Brand Reference sheet you can hand to any designer, printer or partner. It's included free with every engagement.",
		],
		includes: [
			"An organised Google Drive folder for your business",
			"\"How It Was Built\": your business, market, services and every decision made",
			"Brand Reference: logo, colours, fonts, handles, domain, email and registration details in one place",
			"Both documents updated after every service we deliver",
		],
		youProvide: ["Answers to a short discovery questionnaire or call"],
		payment: "free",
	},

	// ── Domain & email ─────────────────────────────────────────────
	{
		slug: "domain-registration",
		name: "Domain Registration",
		category: "domain-email",
		kind: "service",
		summary:
			"Secure your business's own web address, like yourbusiness.com.ng, before someone else does.",
		description: [
			"We check which names are available, recommend the best option, and register it for you for one year. Then we set it up for whatever it needs to connect to: email, a workspace or a website.",
			"Unlike a social media handle, nobody can take your domain away or restrict it. It's your permanent address online.",
		],
		includes: [
			"Availability check and a recommendation",
			"One domain registered for one year (.com.ng or .com)",
			"DNS set up for the services we're connecting",
			"Renewal date tracked, with a reminder before it's due",
			"Domain details document in your folder",
		],
		youProvide: [
			"Your preferred names, in order",
			"Written confirmation of the exact name before we register it",
		],
		partOf: ["domain-email-bundle"],
		related: ["professional-email-setup", "domain-to-website-connection"],
		payment: "split",
		faqs: [
			{
				q: "Should I choose .com.ng or .com?",
				a: "For most Nigerian businesses, .com.ng is the better choice and costs less. A .com suits businesses with customers abroad, or if you already have the name in mind.",
			},
			{
				q: "What happens after the first year?",
				a: "The domain needs renewing every year. We remind you before it's due. You can renew it yourself or have us handle it for a small fee.",
			},
		],
	},
	{
		slug: "professional-email-setup",
		name: "Professional Email Setup",
		category: "domain-email",
		kind: "service",
		summary:
			"An email address on your own domain, like you@yourbusiness.com, set up so emails land in inboxes, not spam.",
		description: [
			"We set up a professional email for you on Zoho Mail, with up to 3 addresses (for example info@, hello@ and your name), a branded email signature, and the settings that stop your emails going to spam.",
			"It tells clients, partners and banks they're dealing with a real business, not a personal Gmail.",
		],
		includes: [
			"Zoho Mail set up for the first year",
			"Domain verified, with spam-protection records (MX, SPF, DKIM, DMARC)",
			"Up to 3 email addresses",
			"Branded HTML email signature",
			"Send, receive and spam tests",
			"A simple guide to using it on web, phone and desktop",
		],
		youProvide: [
			"A registered domain, or Domain Registration alongside",
			"The addresses you want and your signature details",
		],
		partOf: ["domain-email-bundle"],
		related: ["domain-registration", "email-signature-design", "business-workspace-setup"],
		payment: "split",
		faqs: [
			{
				q: "I have a team. Is this for me?",
				a: "This is for one person with up to 3 addresses. For several staff, each with their own account, see Business Workspace Setup.",
			},
		],
	},
	{
		slug: "domain-email-bundle",
		name: "Domain + Email Bundle",
		category: "domain-email",
		kind: "package",
		summary:
			"Your domain and professional email set up together, for less than buying them separately.",
		description: [
			"Most businesses need both, so we set them up in one go: we register your domain and set up your professional email on it, configuring everything in a single session.",
			"Each part can also be bought on its own.",
		],
		includes: [
			"Everything in Domain Registration",
			"Everything in Professional Email Setup",
		],
		contains: ["domain-registration", "professional-email-setup"],
		payment: "split",
	},
	{
		slug: "business-workspace-setup",
		name: "Business Workspace Setup",
		category: "domain-email",
		kind: "service",
		summary:
			"Team email and workspace accounts on Google Workspace or Zoho, so everyone emails from your business domain.",
		description: [
			"Every staff member gets their own professional address, plus shared addresses like info@ that several people can use. We set it all up on Google Workspace or Zoho, priced per user.",
			"Company emails, files and accounts then belong to the business, not to whoever set up a personal Gmail.",
		],
		includes: [
			"Your organisation set up on the platform, owned by you",
			"Domain verified, with spam-protection records",
			"The agreed number of user accounts and shared addresses",
			"Admin access and basic security",
			"Sign-in and email tests on every account",
			"Help getting each person's account working",
		],
		youProvide: [
			"A registered domain, or Domain Registration alongside",
			"Names of your users, and who should access each shared address",
		],
		related: ["domain-registration", "maintenance-support"],
		payment: "split",
		faqs: [
			{
				q: "Is the platform subscription included?",
				a: "No. The setup is a one-time fee. Google or Zoho charge their own subscription per user, monthly or yearly. You can pay them directly, or we can handle the billing for you.",
			},
			{
				q: "How long does it take?",
				a: "Usually within 48 hours of receiving everyone's details.",
			},
		],
	},
	{
		slug: "domain-to-website-connection",
		name: "Domain-to-Website Connection",
		category: "domain-email",
		kind: "service",
		summary:
			"Point your domain at your website so it loads at your own address, secured with https.",
		description: [
			"Already have a website on a temporary link, or a domain that isn't connected? We connect them so your site loads at yourbusiness.com, with the padlock showing.",
			"It's free when we build your website.",
		],
		includes: [
			"DNS records set to point your domain at your website",
			"SSL active (https and the padlock)",
			"www and non-www both working",
			"Existing email records left untouched and checked",
		],
		youProvide: [
			"Access to your domain's settings",
			"Access to your website's hosting, if we didn't build it",
		],
		related: ["business-website", "personal-website", "domain-registration"],
		payment: "split",
	},

	// ── Websites ───────────────────────────────────────────────────
	{
		slug: "business-website",
		name: "Business / Organisation Website",
		category: "websites",
		kind: "service",
		summary:
			"A professional website for your business, NGO, church or school: found when people search, trusted when they land.",
		description: [
			"Your website is where people go when they hear about you. We design and build one that says clearly who you are, what you do and how to reach you, in your brand colours, fast on every phone.",
			"Hosting is free, with no recurring hosting charge, and we connect it to your domain at no extra cost.",
		],
		includes: [
			"Home, About, Services, How We Work, Portfolio or Reviews, and Contact pages",
			"Designed with your brand colours, fonts and logo",
			"Works on phone, tablet and desktop",
			"One-tap WhatsApp button and a contact form",
			"Basic SEO, so Google can find and show your pages",
			"Free hosting and SSL",
			"Connected to your domain at no extra charge",
		],
		youProvide: [
			"Your services, photos and any reviews",
			"Your logo, or a brand identity alongside",
		],
		related: ["blog", "newsletter", "domain-registration", "full-brand-identity", "maintenance-support"],
		payment: "split",
		faqs: [
			{
				q: "Can you add booking, a shop or payments?",
				a: "Yes. Booking and payment integrations (like Paystack) are added on top and quoted based on what you need. If selling online is the main job, look at our Online Store service.",
			},
			{
				q: "Who writes the content?",
				a: "You supply it, usually from what we've already documented about your business. If you'd rather we write it, we can add copywriting.",
			},
			{
				q: "Will I have to pay for hosting every year?",
				a: "No. Hosting is free. The only yearly cost is renewing your domain.",
			},
		],
	},
	{
		slug: "personal-website",
		name: "Personal Website",
		category: "websites",
		kind: "service",
		summary:
			"Your own website as a professional, creative or public figure: your work, story and contact details in one place.",
		description: [
			"For lawyers, consultants, coaches, creatives, speakers and anyone whose name is their brand. We build a clean site that shows who you are and what you've done, and makes it easy to reach you.",
			"Hosting is free, and we connect it to your domain at no extra cost.",
		],
		includes: [
			"Home, About, Work or Portfolio, Experience, and Contact pages",
			"A clean design in your personal style",
			"Works on phone, tablet and desktop",
			"WhatsApp button and a contact form",
			"Basic SEO, free hosting and SSL",
			"Connected to your domain at no extra charge",
		],
		youProvide: [
			"Your bio or CV, and photos of you and your work",
			"Any testimonials you have",
		],
		related: ["blog", "newsletter", "domain-registration", "logo-design"],
		payment: "split",
	},
	{
		slug: "online-store",
		name: "Online Store (E-commerce Website)",
		category: "websites",
		kind: "service",
		summary:
			"A website where customers browse your products, pay online and get order updates, without the back-and-forth on WhatsApp.",
		description: [
			"If you sell products, an online store lets customers see what you have, pick what they want and pay, any time of day. You spend less time answering \"how much?\" and \"is it available?\", and more time packing and delivering orders.",
			"Payments go through Paystack or Flutterwave, into an account in your business's name, so the money comes straight to you. You manage products, prices and orders yourself from a simple dashboard.",
		],
		includes: [
			"Product catalogue with photos, prices and options like size or colour",
			"Cart and checkout that works well on phones",
			"Online payments with Paystack or Flutterwave",
			"Delivery areas and fees, or pick-up",
			"Order emails to you and your customer",
			"A dashboard to add products, change prices and see orders",
			"Your brand colours, fonts and logo, and basic SEO",
			"Connected to your domain, secured with https",
		],
		youProvide: [
			"Your products with photos, prices and options",
			"A Paystack or Flutterwave account in your business's name (we can help you open one)",
			"Delivery areas, fees and how you handle returns",
		],
		related: ["domain-registration", "whatsapp-business-setup", "maintenance-support"],
		payment: "split",
		faqs: [
			{
				q: "Do I need a registered business to take payments?",
				a: "Payment providers ask for your business details before they pay out larger amounts, and a registered business makes that easier. If you're not registered yet, we can do that too.",
			},
			{
				q: "Can I update products myself?",
				a: "Yes. You get a dashboard to add and remove products, change prices and stock, and see every order. We show you how before handover.",
			},
		],
	},
	{
		slug: "blog",
		name: "Blog",
		category: "websites",
		kind: "add-on",
		summary:
			"A blog on your website: we upload your posts, you publish them yourself, or we write them for you every month.",
		description: [
			"An add-on to any website we build. Choose how hands-on you want to be: send us posts to upload, publish them yourself with an easy editor, or have us write and publish 4 SEO-friendly posts every month.",
		],
		includes: [
			"Starter: a blog section with categories, SEO fields and up to 3 posts uploaded",
			"Self-Publish: everything in Starter, plus an easy editor and a walkthrough",
			"Managed Content: Self-Publish, plus 4 posts written and published every month",
		],
		related: ["business-website", "personal-website", "newsletter"],
		payment: "split",
		faqs: [
			{
				q: "Is there a minimum term for Managed Content?",
				a: "Yes, 3 months, with each month paid upfront before that month's posts are written.",
			},
		],
	},
	{
		slug: "newsletter",
		name: "Newsletter",
		category: "websites",
		kind: "add-on",
		summary:
			"A sign-up form on your site and a branded newsletter you send yourself, or we send for you.",
		description: [
			"An add-on to any website we build. Visitors join your mailing list from your site. Choose a simple setup, a fully branded one, or have us write, design and send 2 newsletters a month with a short report.",
			"With a Self-Publish blog and a Branded newsletter, new posts go to your subscribers automatically.",
		],
		includes: [
			"Starter: sign-up form, subscriber list, one welcome email",
			"Branded: Starter, plus a branded template, a 3-email welcome sequence and inbox-delivery setup",
			"Managed: Branded, plus 2 newsletters a month written, designed and sent, with a monthly report",
		],
		related: ["business-website", "personal-website", "blog"],
		payment: "split",
	},

	// ── Brand ──────────────────────────────────────────────────────
	{
		slug: "full-brand-identity",
		name: "Full Brand Identity",
		category: "brand",
		kind: "package",
		summary:
			"Logo system, colours, fonts and a brand guide: everything that makes your business look like one business.",
		description: [
			"Your complete visual identity: a logo system for every use, a colour palette, fonts, and a brand guide that keeps everything consistent from your website to your invoices.",
			"Each part can also be bought on its own.",
		],
		includes: [
			"Logo system: primary, secondary and icon versions, dark and light",
			"Files in SVG, PNG and PDF, with icon sizes for profile pictures and favicons",
			"Colour palette with hex codes",
			"Heading and body fonts",
			"A brand guide covering how to use it all",
		],
		contains: ["logo-design", "brand-guide"],
		related: ["brand-collateral-pack", "social-media-styling-setup", "trademark-registration"],
		payment: "split",
		faqs: [
			{
				q: "How many revisions do I get?",
				a: "Two rounds of revisions are included. Extra concepts or rounds can be added.",
			},
		],
	},
	{
		slug: "logo-design",
		name: "Logo Design",
		category: "brand",
		kind: "service",
		summary:
			"A professional logo system in every format you'll need, not a one-off image.",
		description: [
			"A logo that looks right everywhere: on your website, a profile picture, a signboard or a business card. You get a full system of versions, in dark and light, in every file format.",
		],
		includes: [
			"Primary, secondary and icon versions",
			"Dark and light variants of each",
			"SVG, PNG and PDF files",
			"Icon sizes for profile pictures, app icons and favicons",
		],
		partOf: ["full-brand-identity"],
		related: ["brand-guide", "business-card-design", "trademark-registration"],
		payment: "split",
	},
	{
		slug: "brand-guide",
		name: "Brand Guide",
		category: "brand",
		kind: "service",
		summary:
			"The rules for how your brand looks: colours, fonts and how to use your logo.",
		description: [
			"Already have a logo you like, but everything you make looks different? A brand guide fixes that. It sets your colours, fonts and logo rules, so anyone who designs for you gets it right.",
		],
		includes: [
			"Colour palette with hex codes",
			"Heading and body fonts",
			"Logo usage rules: which version where, sizes and spacing",
			"The brand guide as a PDF",
		],
		youProvide: ["Your logo files in good quality"],
		partOf: ["full-brand-identity"],
		related: ["logo-design", "brand-collateral-pack"],
		payment: "split",
	},
	{
		slug: "brand-collateral-pack",
		name: "Brand Collateral Pack",
		category: "brand",
		kind: "package",
		summary:
			"Business card, letterhead, invoice template and email signature, all in your brand.",
		description: [
			"Your brand applied to the everyday things clients actually see: the card you hand over, the letters you send, the invoices you issue and the signature on every email.",
			"Each item can also be bought on its own.",
		],
		includes: [
			"Business card, print-ready",
			"Letterhead, editable in Word and Google Docs",
			"Invoice template, editable",
			"HTML email signature",
		],
		contains: [
			"business-card-design",
			"letterhead-design",
			"invoice-template-design",
			"email-signature-design",
		],
		related: ["full-brand-identity"],
		payment: "split",
	},
	{
		slug: "business-card-design",
		name: "Business Card Design",
		category: "brand",
		kind: "service",
		summary: "A business card in your brand, ready to print.",
		description: [
			"A front and back design that matches the rest of your brand, delivered as a print-ready file you can take to any printer.",
		],
		includes: [
			"Front and back design",
			"Print-ready PDF",
			"Your brand's colours, fonts and logo",
		],
		youProvide: ["Names, titles and contact details for each card"],
		partOf: ["brand-collateral-pack"],
		related: ["letterhead-design", "logo-design"],
		payment: "split",
	},
	{
		slug: "letterhead-design",
		name: "Letterhead Design",
		category: "brand",
		kind: "service",
		summary: "A branded letterhead you can type straight into for letters and quotes.",
		description: [
			"For letters, quotes and official documents to clients, banks or government bodies. Delivered as an editable template you use again and again.",
		],
		includes: [
			"Letterhead in your brand",
			"Editable Word and Google Docs templates",
			"Print-ready PDF",
		],
		partOf: ["brand-collateral-pack"],
		related: ["invoice-template-design", "business-card-design"],
		payment: "split",
	},
	{
		slug: "invoice-template-design",
		name: "Invoice Template Design",
		category: "brand",
		kind: "service",
		summary: "A branded invoice template, so you stop billing clients with screenshots.",
		description: [
			"An invoice that looks as professional as your work, with your bank details and registration number already on it. Editable, so you fill it in each time.",
		],
		includes: [
			"Invoice design in your brand",
			"Editable Word and Google Docs templates",
			"Your bank and registration details built in",
		],
		partOf: ["brand-collateral-pack"],
		related: ["letterhead-design"],
		payment: "split",
	},
	{
		slug: "email-signature-design",
		name: "Email Signature Design",
		category: "brand",
		kind: "service",
		summary:
			"A branded email signature with your details and logo, installed on your email.",
		description: [
			"Every email you send becomes a small piece of branding. We design an HTML signature with your name, contact details, website and logo, and install it for you.",
			"It's already included in Professional Email Setup.",
		],
		includes: [
			"HTML signature in your brand",
			"Installed on your addresses, or with simple install steps",
			"Tested on desktop and phone",
		],
		partOf: ["brand-collateral-pack"],
		related: ["professional-email-setup"],
		payment: "split",
	},

	// ── Social & Google ────────────────────────────────────────────
	{
		slug: "social-media-handle-claiming",
		name: "Social Media Handle Claiming",
		category: "social-google",
		kind: "service",
		summary:
			"Your business name, secured as the same handle on every platform that matters.",
		description: [
			"We claim your business name on the platforms your customers use, as close to identical as possible everywhere, and set each up as a business account.",
			"Even if you're not posting yet, your name is yours before someone else takes it.",
		],
		includes: [
			"Platforms agreed with you, from Instagram, X, LinkedIn, Facebook, TikTok, YouTube and WhatsApp Business",
			"One consistent username",
			"Business account type set",
			"Basic profile details filled in",
			"Login details handed over",
		],
		youProvide: [
			"Phone numbers and emails to register with",
			"Being reachable for verification codes during setup",
		],
		related: ["social-media-styling-setup", "logo-design"],
		payment: "split",
	},
	{
		slug: "social-media-styling-setup",
		name: "Social Media Styling Setup",
		category: "social-google",
		kind: "package",
		summary:
			"Make every profile look like the same business: images, banners, details and a first post.",
		description: [
			"We style all your profiles at once: branded profile images and banners, the same bio and contact details everywhere, and a services flier ready to be your first post.",
			"Each part can also be bought on its own. The flier is free inside this package.",
		],
		includes: [
			"Profile image and banner for each platform",
			"Consistent bio, contact details and link in bio",
			"A branded services flier",
		],
		contains: [
			"social-media-profile-banner-design",
			"social-media-profile-details-setup",
			"services-flier-design",
		],
		related: ["social-media-handle-claiming", "social-media-styling-design"],
		payment: "split",
	},
	{
		slug: "social-media-profile-banner-design",
		name: "Social Media Profile Image & Banner Design",
		category: "social-google",
		kind: "service",
		summary: "Branded profile pictures and cover banners, sized for every platform.",
		description: [
			"The right logo version as your profile picture, and a banner in your brand colours on every platform that has one.",
		],
		includes: [
			"Profile image for each platform",
			"Banner or cover image for each platform that has one",
		],
		partOf: ["social-media-styling-setup"],
		related: ["social-media-profile-details-setup", "logo-design"],
		payment: "split",
	},
	{
		slug: "social-media-profile-details-setup",
		name: "Social Media Profile Details Setup",
		category: "social-google",
		kind: "service",
		summary:
			"The same bio, contact details and link on every platform, so customers never wonder if it's you.",
		description: [
			"If one profile says shoes and another says hair, people get suspicious. We make your bio, phone, WhatsApp, email, address and website the same everywhere, and set each account up as a business.",
		],
		includes: [
			"Bio written once and fitted to each platform",
			"Consistent contact details everywhere",
			"Link in bio set to your website or WhatsApp",
			"Business account type set",
		],
		partOf: ["social-media-styling-setup"],
		related: ["social-media-profile-banner-design"],
		payment: "split",
	},
	{
		slug: "services-flier-design",
		name: "Services Flier Design",
		category: "social-google",
		kind: "service",
		summary:
			"One branded graphic of everything you offer, ready to post and share on WhatsApp.",
		description: [
			"A flier listing your services and contact details, in sizes for your feed and for WhatsApp Status. It gives every new profile a real first post.",
		],
		includes: [
			"Services flier in your brand",
			"Sizes for feeds and for WhatsApp Status and stories",
		],
		partOf: ["social-media-styling-setup"],
		related: ["social-media-styling-design"],
		payment: "split",
	},
	{
		slug: "social-media-styling-design",
		name: "Social Media Styling & Design (Monthly)",
		category: "social-google",
		kind: "service",
		summary:
			"Branded post designs every month, so your feed keeps looking consistent.",
		description: [
			"A monthly service: typically 8 to 12 branded post designs across your platforms, delivered in one batch for you to review. You tell us the month's topics and offers; we make them look on-brand.",
		],
		includes: [
			"8 to 12 post designs a month (agreed with you)",
			"In your colours, fonts and logo",
			"Sized for each platform",
			"Delivered in one monthly batch",
		],
		youProvide: [
			"Topics, offers or announcements for the month",
			"Photos where posts need them",
		],
		related: ["social-media-styling-setup"],
		payment: "monthly",
	},
	{
		slug: "google-business-profile-setup",
		name: "Google Business Profile Setup",
		category: "social-google",
		kind: "service",
		summary:
			"Show up on Google Maps and in \"near me\" searches as a verified business.",
		description: [
			"When someone searches for what you do near them, businesses with a Google profile show up on the map with reviews, photos and a call button. We create yours, fill it in properly and see it through verification.",
		],
		includes: [
			"Profile created, or an existing listing claimed",
			"Name, categories, address or service area, hours, phone and website",
			"A description written with the right search keywords",
			"Your services listed and at least 5 photos uploaded",
			"Verification followed through to the end",
			"Owner access handed to you",
		],
		youProvide: [
			"Your address or service area, hours and photos",
			"Being available for Google's verification step",
		],
		related: ["business-website", "maintenance-support"],
		payment: "split",
		faqs: [
			{
				q: "How long does verification take?",
				a: "Usually 2 to 5 business days, depending on how Google decides to verify you.",
			},
		],
	},
	{
		slug: "whatsapp-business-setup",
		name: "WhatsApp Business Setup",
		category: "social-google",
		kind: "service",
		summary:
			"Your business on WhatsApp Business, set up properly: profile, catalogue, greeting messages and quick replies.",
		description: [
			"For many customers, WhatsApp is where the conversation starts. We set up WhatsApp Business so you look like an established business the moment someone messages you, and you answer common questions in a tap instead of typing them out every time.",
			"If your number is on regular WhatsApp, it can move to WhatsApp Business on the same phone, and your chats come with it.",
		],
		includes: [
			"WhatsApp Business set up on your business number",
			"Business profile: logo, description, address, hours, website and email",
			"A catalogue of your products or services",
			"Greeting and away messages",
			"Quick replies for the questions you get most",
			"Labels to keep track of new customers, orders and payments",
			"A short link and QR code customers can use to message you",
		],
		youProvide: [
			"The phone number you use for business",
			"Your logo, products or services with prices and photos",
			"Your opening hours and the questions customers ask most",
		],
		related: ["social-media-styling-setup", "google-business-profile-setup", "services-flier-design"],
		payment: "split",
	},

	// ── Registration ───────────────────────────────────────────────
	{
		slug: "business-name-registration",
		name: "Business Name Registration (CAC)",
		category: "registration",
		kind: "service",
		summary:
			"Register your business name with the CAC and get your certificate, BN number and TIN.",
		description: [
			"The simplest way to make your business official. We handle the name search, filing and paperwork with our registration partner, and hand everything over.",
			"Registration lets you open a business bank account and show customers a registered business.",
		],
		includes: [
			"Name availability search and reservation",
			"Registration filed with the CAC",
			"Certificate of Registration and BN number",
			"Confirmed TIN",
			"Bank Account Guidance, free",
		],
		youProvide: [
			"Name options, in order of preference",
			"ID and address of the owner(s)",
			"Business address and what the business does",
		],
		related: ["llc-registration", "bank-account-guidance", "trademark-registration", "annual-returns"],
		payment: "upfront",
		faqs: [
			{
				q: "Business Name or a company: which do I need?",
				a: "A Business Name suits most sole traders and small businesses. A company (LLC) is a separate legal entity with limited liability, better for partners, investors or bigger contracts. We'll explain the difference; you decide.",
			},
		],
	},
	{
		slug: "smedan-registration",
		name: "SMEDAN Registration",
		category: "registration",
		kind: "service",
		summary: "Get your small business on SMEDAN's records.",
		description: [
			"Registration with the Small and Medium Enterprises Development Agency of Nigeria, usually alongside your CAC registration.",
		],
		includes: [
			"Registration filed with SMEDAN",
			"Proof of registration in your folder",
			"Bank Account Guidance, free",
		],
		related: ["business-name-registration"],
		payment: "upfront",
	},
	{
		slug: "llc-registration",
		name: "LLC Registration",
		category: "registration",
		kind: "service",
		summary:
			"Incorporate a private limited company (Ltd) with the CAC: certificate, RC number and TIN.",
		description: [
			"A company is a separate legal entity, so the business, not you personally, carries its debts. It suits businesses with partners or investors, or that need a company for contracts and tenders.",
		],
		includes: [
			"Name availability search and reservation",
			"Incorporation filed with the CAC",
			"Certificate of Incorporation and RC number",
			"Confirmed TIN",
			"Bank Account Guidance, free",
		],
		youProvide: [
			"Name options, in order of preference",
			"ID and address of every director and shareholder",
			"Company address and what it does",
		],
		related: ["bank-account-guidance", "trademark-registration", "annual-returns"],
		payment: "upfront",
	},
	{
		slug: "llp-registration",
		name: "LLP Registration",
		category: "registration",
		kind: "service",
		summary:
			"Register a Limited Liability Partnership with the CAC, for professional partnerships.",
		description: [
			"For law, accounting, consulting and other professional firms where partners want limited liability.",
		],
		includes: [
			"Name availability search and reservation",
			"Registration filed with the CAC",
			"Certificate of Registration",
			"Bank Account Guidance, free",
		],
		related: ["bank-account-guidance", "annual-returns"],
		payment: "upfront",
	},
	{
		slug: "lbg-registration",
		name: "LBG Registration",
		category: "registration",
		kind: "service",
		summary:
			"Incorporate a Company Limited by Guarantee, the usual choice for NGOs and foundations.",
		description: [
			"A company with no shares, usually set up for non-profit purposes: NGOs, foundations and associations that want to be a company.",
		],
		includes: [
			"Name availability search and reservation",
			"Incorporation filed with the CAC",
			"Certificate of Incorporation",
			"Bank Account Guidance, free",
		],
		related: ["incorporated-trustees-registration", "business-website"],
		payment: "upfront",
	},
	{
		slug: "incorporated-trustees-registration",
		name: "Incorporated Trustees Registration",
		category: "registration",
		kind: "service",
		summary:
			"Register your church, mosque, association or NGO's trustees with the CAC.",
		description: [
			"Lets your association act as a legal body: own property, open accounts and sign agreements in its own name.",
		],
		includes: [
			"Name availability search and reservation",
			"Registration filed with the CAC",
			"Certificate of Incorporation",
			"Bank Account Guidance, free",
		],
		related: ["lbg-registration", "business-website"],
		payment: "upfront",
	},
	{
		slug: "scuml-registration",
		name: "SCUML Registration",
		category: "registration",
		kind: "service",
		summary:
			"Get your SCUML certificate from the EFCC's anti-money-laundering unit, which banks ask NGOs and some businesses for.",
		description: [
			"The Special Control Unit against Money Laundering (SCUML) registers non-profits and certain kinds of business, like real estate, car dealers, hotels, jewellers and some professional firms. Banks often ask for the certificate before they open or keep an account for them.",
			"We check whether you need it, prepare and submit the application, and follow it up until your certificate is issued.",
		],
		includes: [
			"A check that your organisation or business needs SCUML",
			"Application prepared and submitted on the SCUML portal",
			"Follow-up until the certificate is issued",
			"Your SCUML certificate, saved to your folder",
		],
		youProvide: [
			"Your CAC certificate and registration documents",
			"Your TIN",
			"Details and IDs of your directors, partners or trustees",
		],
		related: ["incorporated-trustees-registration", "lbg-registration", "bank-account-guidance"],
		payment: "upfront",
		faqs: [
			{
				q: "Who needs SCUML registration?",
				a: "Non-profits (NGOs, foundations, churches and mosques registered as incorporated trustees), and businesses the law lists as designated, such as real estate agents, car dealers, hotels, jewellers and some professional firms. If you're not sure, ask us and we'll check before you pay.",
			},
		],
	},
	{
		slug: "bank-account-guidance",
		name: "Bank Account Guidance",
		category: "registration",
		kind: "service",
		summary:
			"Help opening your business bank account: what to bring, and how to apply. Free with any registration.",
		description: [
			"Each bank asks for different documents. We tell you exactly what your bank needs for your type of business, help you prepare it, and walk you through the application.",
		],
		includes: [
			"A checklist of what your bank needs",
			"Help preparing and checking the documents",
			"A walkthrough of the application",
		],
		related: ["business-name-registration", "llc-registration"],
		payment: "split",
	},

	// ── After registration ─────────────────────────────────────────
	{
		slug: "annual-returns",
		name: "Annual Returns",
		category: "after-registration",
		kind: "service",
		summary:
			"File your yearly CAC annual return on time, whoever registered your business.",
		description: [
			"Every registered business name, company and association must file an annual return with the CAC. We file it for you each year and remind you before it's due.",
		],
		includes: [
			"Annual return filed with the CAC",
			"Proof of filing in your folder",
			"A reminder before next year's is due",
		],
		related: ["business-name-registration", "llc-registration"],
		payment: "upfront",
	},
	{
		slug: "change-of-directors-shareholders",
		name: "Change of Directors / Shareholders",
		category: "after-registration",
		kind: "service",
		summary:
			"Add, remove or replace a director, or transfer shares, and file it with the CAC.",
		description: [
			"When the people running or owning your company change, the CAC needs to know. We file the change and update your records.",
		],
		includes: [
			"Change filed with the CAC",
			"Updated CAC records",
			"Your Brand Reference updated",
		],
		related: ["share-capital-changes"],
		payment: "upfront",
	},
	{
		slug: "share-capital-changes",
		name: "Share Capital Changes",
		category: "after-registration",
		kind: "service",
		summary:
			"Increase your share capital or allot new shares, filed with the CAC.",
		description: [
			"For companies taking on investors, raising capital, or needing a higher share capital for a licence or contract.",
		],
		includes: ["Change filed with the CAC", "Updated CAC records"],
		related: ["change-of-directors-shareholders"],
		payment: "upfront",
	},
	{
		slug: "change-of-name-address",
		name: "Change of Company Name / Address",
		category: "after-registration",
		kind: "service",
		summary: "Moved or rebranding? Update your registered name or address with the CAC.",
		description: [
			"We file the change with the CAC. After a name change, we can also update your logo, domain, social profiles and Google listing so everything matches.",
		],
		includes: [
			"Change filed with the CAC",
			"New certificate or updated records",
			"Your Brand Reference updated",
		],
		related: ["logo-design", "social-media-profile-details-setup", "google-business-profile-setup"],
		payment: "upfront",
	},
	{
		slug: "other-cac-filings",
		name: "Other CAC Filings",
		category: "after-registration",
		kind: "service",
		summary:
			"Any other filing with the CAC: nature of business, proprietors, partners, trustees, certified copies and more.",
		description: [
			"Need a filing that isn't on this list? Tell us what you need and we'll confirm what's involved and quote it.",
		],
		includes: ["The agreed filing done with the CAC", "Proof in your folder"],
		payment: "upfront",
	},

	// ── IP ─────────────────────────────────────────────────────────
	{
		slug: "trademark-registration",
		name: "Trademark Registration",
		category: "ip",
		kind: "service",
		summary:
			"Register your business name, logo or slogan so no one else can use it for the same business.",
		description: [
			"Your brand is worth protecting. We file your trademark in the right class with the Trademarks, Patents and Designs Registry and see it through to the certificate.",
		],
		includes: [
			"Availability search",
			"Application filed in the right class",
			"Acknowledgement, then the certificate once registered",
		],
		related: ["logo-design", "full-brand-identity"],
		payment: "upfront",
	},
	{
		slug: "copyright-registration",
		name: "Copyright Registration",
		category: "ip",
		kind: "service",
		summary:
			"Record your original work with the Nigerian Copyright Commission as proof it's yours.",
		description: [
			"For writing, music, artwork, designs and software. Registration gives you evidence of ownership if anyone copies your work.",
		],
		includes: ["Application filed", "Certificate or acknowledgement in your folder"],
		payment: "upfront",
	},
	{
		slug: "patent-registration",
		name: "Patent Registration",
		category: "ip",
		kind: "service",
		summary: "Protect your invention so others can't make, use or sell it without you.",
		description: [
			"For inventors and businesses with a new product or process. We coordinate the filing with a patent professional and keep you updated.",
		],
		includes: ["Application filed", "Acknowledgement, then the certificate once granted"],
		payment: "upfront",
	},
	{
		slug: "design-registration",
		name: "Design Registration",
		category: "ip",
		kind: "service",
		summary: "Protect the look of your product or packaging from copycats.",
		description: [
			"Register the shape, pattern or appearance of a product as an industrial design, so others can't copy it.",
		],
		includes: ["Application filed", "Acknowledgement, then the certificate once registered"],
		payment: "upfront",
	},

	// ── Software ───────────────────────────────────────────────────
	{
		slug: "custom-software-development",
		name: "Custom Software Development",
		category: "software",
		kind: "service",
		summary:
			"Tools and information systems that simplify how your business runs, or your own product, built from idea to launch.",
		description: [
			"If your business runs on spreadsheets, notebooks and WhatsApp chats, a lot of time goes into keeping track. We build systems that do it for you: bookings, records, invoicing, inventory, staff, customers and reports, shaped around how you already work.",
			"For startups, we act as your tech partner: we build the product from scratch and can take over the tech side once it's live.",
			"Every project starts with a discovery session before any price or timeline is given.",
		],
		includes: [
			"Discovery session and a scope document",
			"Product design: screens and user flows",
			"Development: frontend, backend and database",
			"Testing, deployment and launch",
			"Optional tech operations after launch",
		],
		related: ["maintenance-support"],
		payment: "split",
		faqs: [
			{
				q: "How is it priced?",
				a: "Each project is scoped individually after a discovery session. Startups can choose a full fee, or a partnership with a smaller fee plus equity.",
			},
		],
	},

	// ── After-care ─────────────────────────────────────────────────
	{
		slug: "maintenance-support",
		name: "Maintenance & Support",
		category: "aftercare",
		kind: "service",
		summary:
			"Keep your website, software, email, workspace or Google profile running, with help whenever you need it.",
		description: [
			"Choose a care plan (monthly, quarterly at 10% off, or yearly with 2 months free) or pay for one-off help when you need it.",
			"Plans are available for websites, custom software, business workspaces, professional email and Google Business Profiles.",
		],
		includes: [
			"Website care: uptime checks, backups, updates and small content changes",
			"Software care: monitoring, bug fixes and updates",
			"Workspace and email care: adding or removing users, password resets, delivery problems",
			"Profile care: keeping your Google listing current, photos, posts and review replies",
			"One-time support jobs for anything outside a plan",
		],
		related: ["business-website", "business-workspace-setup", "google-business-profile-setup"],
		payment: "monthly",
	},
	{
		slug: "renewal-management",
		name: "Renewal Management",
		category: "aftercare",
		kind: "service",
		summary:
			"We renew your domain, email and workspace subscriptions on time, so nothing quietly expires.",
		description: [
			"An expired domain takes your website and email down with it. We track your renewal dates, remind you before they're due, and renew for you once you approve.",
			"You can always take the account over and renew it yourself instead.",
		],
		includes: [
			"Renewal dates tracked",
			"A reminder and the exact amount before each renewal",
			"Renewed on time once paid",
		],
		related: ["domain-registration", "professional-email-setup", "business-workspace-setup"],
		payment: "upfront",
	},
];

export const getService = (slug: string) =>
	services.find((service) => service.slug === slug);

export const getServicesByCategory = (category: ServiceCategoryId) =>
	services.filter((service) => service.category === category);

const paymentAnswer: Record<PaymentTerms, string> = {
	split: "50% upfront before we start, and 50% on delivery before final files and logins are handed over.",
	upfront:
		"In full upfront. For registrations and filings, most of the cost is the government or registry fee, which is paid before filing.",
	monthly: "Each month (or plan period) is paid upfront, before that period's work starts.",
	free: "Nothing. It's included free with every engagement.",
};

/** FAQs shown on every service page, after the service's own. */
export const getSharedFaqs = (service: Service): FAQ[] => [
	{
		q: "Can't I just do this myself with AI?",
		a: "You can, and AI has made a lot of it easier. What it doesn't remove is the hours of learning each platform, the trial and error, and knowing what \"done properly\" looks like. We've done this many times, so we get it right quickly, and you keep your time for running your business.",
	},
	{
		q: "How do I pay?",
		a: paymentAnswer[service.payment],
	},
	{
		q: "How do we get started?",
		a: "Send us a message on WhatsApp or through the contact form. We'll ask a few quick questions, then send you a clear quote with what's included and how long it takes.",
	},
];

/** Short form of how a service is paid for, for the facts row on a service page. */
export const paymentShort: Record<PaymentTerms, string> = {
	split: "50% upfront, 50% on delivery",
	upfront: "In full, upfront",
	monthly: "Each period, upfront",
	free: "Free with every engagement",
};

/** The homepage FAQ. */
export const generalFaqs: FAQ[] = [
	{
		q: "Do you only work with new businesses?",
		a: "No. Some clients come to us before they've even registered; others have been running for years. For running businesses we fix what's patchy, keep CAC filings and renewals on time, and build tools that take the busywork off your desk.",
	},
	{
		q: "Can't I just do this myself with AI?",
		a: "You can, and AI has made a lot of it easier. What it doesn't remove is the hours of learning each platform, the trial and error, and knowing what \"done properly\" looks like. We do this every day, so we get it right quickly, and you keep your time for delivering and selling.",
	},
	{
		q: "How do I pay?",
		a: "Most services are 50% upfront and 50% on delivery. Registrations and filings are paid in full upfront, since most of the cost is the government fee. Monthly services are paid at the start of each month. Buy 3 or more services together and get 10 to 15% off.",
	},
	{
		q: "How long does it take?",
		a: "It depends on the service. Your quote says how long before you pay anything, and we keep you updated as we go.",
	},
	{
		q: "Do I own everything you set up?",
		a: "Yes. Every file, login and document goes into one organised folder that's yours to keep, in your name, whether or not you stay with us.",
	},
	{
		q: "Where are you based?",
		a: "Ogun State, Nigeria. We work with clients across Nigeria over WhatsApp, email and calls, so you don't need to be nearby.",
	},
];
