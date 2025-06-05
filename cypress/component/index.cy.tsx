import Home from "@/app/page";

describe("<Page />", () => {
	it("should render and display expected content", () => {
		// Mount the React component for the Home page
		cy.mount(<Home />);

		// beforeEach(() => {
		// 	cy.visit('/'); // Visit the root URL of your Next.js app
		//   });

		// The new page should contain an h1 with "Home"
		// cy.get("h1").contains("Home");

		// Validate that a link with the expected URL is present
		// Following the link is better suited to an E2E test
		cy.get(
			'a[href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"]'
		).should("be.visible");
		cy.get("img").should("be.visible");

		// it('should display the header with correct text and navigation', () => {
		//   cy.get('header').should('be.visible');
		//   cy.get('header').contains('MIA').should('be.visible');
		//   cy.get('header').contains('Get Started').should('be.visible');

		//   // Check desktop navigation links
		//   cy.get('header').contains('Solutions').should('be.visible');
		//   cy.get('header').contains('Portfolio').should('be.visible');
		//   cy.get('header').contains('Contact').should('be.visible');
		// });

		// it('should toggle between light and dark mode', () => {
		//   // Check initial color mode (should be light based on _app.tsx config)
		//   cy.get('body').should('have.css', 'background-color', 'rgb(247, 250, 252)'); // gray.50

		//   // Click the toggle button
		//   cy.get('header button[aria-label="Toggle color mode"]').click();

		//   // Check if color mode changed to dark
		//   cy.get('body').should('have.css', 'background-color', 'rgb(26, 32, 44)'); // gray.800

		//   // Click again to switch back to light mode
		//   cy.get('header button[aria-label="Toggle color mode"]').click();
		//   cy.get('body').should('have.css', 'background-color', 'rgb(247, 250, 252)'); // gray.50
		// });

		// it('should display the Hero section with key elements', () => {
		//   cy.get('section').contains('Innovate . Connect . Grow .').should('be.visible');
		//   cy.get('section').contains('Custom digital solutions for your business.').should('be.visible');
		//   cy.get('section').contains('Get Started').should('be.visible');
		// });

		// it('should display the Services section with service cards', () => {
		//   cy.get('section').contains('Services').should('be.visible');
		//   cy.get('section').contains('Custom software').should('be.visible');
		//   cy.get('section').contains('Mobile development').should('be.visible');
		//   cy.get('section').contains('Web solutions').should('be.visible');
		// });

		// it('should display the Call to Action section', () => {
		//   cy.get('section').contains('Let\'s build something lively.').should('be.visible');
		//   cy.get('section').contains('Start a new project').should('be.visible');
		// });

		// it('should display the Footer with copyright and links', () => {
		//   cy.get('footer').should('be.visible');
		//   cy.get('footer').contains('MIA').should('be.visible');
		//   cy.get('footer').contains(`© ${new Date().getFullYear()} MIA. All rights reserved.`).should('be.visible');
		//   cy.get('footer').contains('Solutions').should('be.visible');
		//   cy.get('footer').contains('Company').should('be.visible');
		// });

		// // Mobile responsiveness test for header
		// it('should show mobile menu on small screens and hide on large screens', () => {
		//   cy.viewport('iphone-x'); // Set viewport to a mobile size
		//   cy.get('header button[aria-label="Open menu"]').should('be.visible');
		//   cy.get('header').contains('Solutions').should('not.be.visible'); // Desktop nav should be hidden

		//   cy.get('header button[aria-label="Open menu"]').click(); // Open mobile menu
		//   cy.get('header').contains('Solutions').should('be.visible'); // Mobile nav should be visible

		//   cy.get('header button[aria-label="Close menu"]').click(); // Close mobile menu
		//   cy.get('header').contains('Solutions').should('not.be.visible'); // Mobile nav should be hidden again

		//   cy.viewport('macbook-13'); // Set viewport to a desktop size
		//   cy.get('header button[aria-label="Open menu"]').should('not.be.visible');
		//   cy.get('header').contains('Solutions').should('be.visible'); // Desktop nav should be visible
		// });
	});
});
