describe("Login Tests", () => {
  it("Should not be able to Login if the user doesn't exist", () => {
    cy.visit("https://tipyourteacher-staging.vercel.app/auth/login/");
    cy.get("#formpassword").type("usamatesteng@gmaill.com");
    cy.get(".login100-form-btn").click();
    cy.get(":nth-child(2) > .input-group > #formpassword").type("Test@1998");
    cy.get(".input-icon > .fa").click();
    cy.get(".login100-form-btn").click();
    cy.get(":nth-child(1) > .text-danger").should("have.text", "No user found");
  });
});
