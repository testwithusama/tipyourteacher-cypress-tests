describe("Dashboard Tests", () => {
  it("Should be able to land on the login page", () => {
    cy.visit("https://tipyourteacher-staging.vercel.app");
    cy.get(".get-started-default-input").type("testing");
    cy.get(".get-started-default-input-button").click();
    cy.get(".justify-content-between > :nth-child(1)").should(
      "have.text",
      "Email/Password"
    );
    cy.get(".justify-content-between > :nth-child(1)").click();
    cy.get(":nth-child(2) > #formEmail").type("usamatesteng@gmail.com");
    cy.get(":nth-child(3) > .input-group > #formpassword").type("Test@1998");
    cy.get(":nth-child(4) > .input-group > #formpassword").type("Test@1998");
    cy.get(".login100-form-btn").click();
    cy.get(".bg-white").should(
      "have.text",
      "get an email from us soon, when we will go live."
    );
  });
});
