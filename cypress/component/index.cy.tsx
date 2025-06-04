import Home from "@/app/page";

describe("<Page />", () => {
	it("should render and display expected content", () => {
		// Mount the React component for the Home page
		cy.mount(<Home />);

		// The new page should contain an h1 with "Home"
		// cy.get("h1").contains("Home");

		// Validate that a link with the expected URL is present
		// Following the link is better suited to an E2E test
		cy.get(
			'a[href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"]'
		).should("be.visible");
		cy.get("img").should("be.visible");
	});
});
