import { Facebook, Instagram, Linkedin } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export const businessEmail = "contact@mitudoagency.com";
export const businessWANumber = "2348147697225";
export const businessWANumberSpread = "+234 814 769 7225";
export const businessWABaseLink = "https://wa.me/2348147697225";
export const businessAddress = "Ogun, Nigeria";

// other pages
export const whatsappLink = `${businessWABaseLink}?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20a%20website%20for%20my%20business.`;
// contact page
// const whatsappLink =
// 	"https://wa.me/2348147697225?text=Hello%20Mitudo%20Agency,%20I'm%20interested%20in%20your%20services.";

export const socialLinks = [
	{
		label: "Instagram",
		href: "https://instagram.com/mitudoagency",
		icon: Instagram,
		color: "#E1306C",
		handle: "@mitudoagency",
		hoverColor: "#E1306C",
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/mitudoagency",
		icon: Linkedin,
		color: "#0077B5",
		handle: "mitudoagency",
		hoverColor: "#0077B5",
	},
	{
		label: "X",
		href: "https://x.com/mitudoagency",
		icon: BsTwitterX,
		color: "#FFFFFF",
		handle: "@mitudoagency",
		hoverColor: "#0D1B2A",
	},
	{
		label: "Facebook",
		href: "https://facebook.com/mitudoagency",
		icon: Facebook,
		color: "#1877F2",
		handle: "@mitudoagency",
		hoverColor: "#0D1B2A",
	},
];

export const emailServiceEmailAddress =
	"Mitudo Services <services@mitudoagency.com>";

export const fallbackProjects = [
	{
		id: "dglides-apartments",
		title: "D'Glides Apartments",
		type: "Real Estate",
		tag: "Live Website",
		tagBg: "#10B981",
		// tagColor: "white",
		tagColor: "#10B981",
		// desc
		//feats
		imageUrl:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
		image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
		liveUrl: "https://dglidestcl.com",
		features: ["Responsive design", "Modern branding", "Lead capture"],
		// features: [
		//             "Professional property showcase",
		//             "Trust-building design",
		//             "Direct enquiry options",
		//             "Mobile & desktop optimized",
		//         ],

		description:
			"A professional real estate website built to help D'Glides Apartments present its properties clearly, build trust with potential clients, and make enquiries easy.",
	},
	{
		id: "school-training-center",
		title: "School / Training Center",
		type: "Education",
		tag: "Concept",
		tagBg: "#0077FF",
		// tagColor: "white",
		tagColor: "#0077FF",
		imageUrl:
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
		image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
		liveUrl: null,
		features: ["Professional layout", "Service showcase", "Easy updates"],
		// features: [
		// 	"Homepage + About + Programs",
		// 	"Easy navigation for parents & students",
		// 	"Professional layout",
		// 	"Enrollment enquiry forms",
		// ],

		description:
			"A professional website designed for educational institutions to present their programs clearly and make it easy for parents and students to find information and enrol.",
	},
	{
		id: "logistics-real-estate",
		title: "Logistics / Real Estate",
		type: "Business",
		tag: "Concept",
		tagBg: "#0077FF",
		// tagColor: "white",
		tagColor: "#0077FF",
		imageUrl:
			"https://images.unsplash.com/photo-1586528116493-da5e30be6e99?w=800&q=80",
		image: "https://images.unsplash.com/photo-1586528116493-da5e30be6e99?w=800&q=80",
		liveUrl: null,
		features: [
			"Business-first design",
			"Clear service paths",
			"Customer trust",
		],
		// features: [
		// 			"Bold homepage with clear positioning",
		// 			"Services showcase",
		// 			"Trust-building elements",
		// 			"Strong call-to-action",
		// 		],

		description:
			"A modern business website concept designed to establish credibility and drive customer action for logistics and real estate businesses.",
	},
];
