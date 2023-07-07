describe("Login Tests", () => {
  it("Should not be able to Login if the user doesn't exist", () => {
    cy.visit("https://tipyourteacher-staging.vercel.app/auth/login/");
    cy.get("#formpassword").type("usamatesteng@gmail.com");
    cy.get(".login100-form-btn").click();
    cy.get(":nth-child(2) > .input-group > #formpassword").type("Test@1998");
    cy.get(".input-icon > .fa").click();
    cy.get(".login100-form-btn").click();
    cy.get(".bg-white").should(
      "have.text",
      "Success!You are now a part of Tip Your Teacher! We look forward to helping those you serve show their appreciation for all you do in the noblest of professions. We have added you to our list to be a part of our intitial launch. Look for an email from us with additional information on your next steps!"
    );
  });
});
