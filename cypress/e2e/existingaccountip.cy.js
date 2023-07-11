describe("Tipping Tests", () => {
  it("Verify an existing account", () => {
    cy.visit("https://tipyourteacher-juhrosp73-desolintdev.vercel.app/tip/");
    cy.get(".col-md-8 > .text-start > .input-group > .form-control").type(
      "usamatesteng@gmail.com"
    );
    cy.get('[sx="8"] > .btn').click();
    cy.get(".fade > .d-flex > :nth-child(2)").should(
      "have.text",
      "Thank you for considering tipping testing. We'll notify them as soon as the payment is completed."
    );
  });

  it("Should be able to proceed with the amount", () => {
    cy.visit("https://tipyourteacher-juhrosp73-desolintdev.vercel.app/tip/");
    cy.get(".col-md-8 > .text-start > .input-group > .form-control").type(
      "usamatesteng@gmail.com"
    );
    cy.get('[sx="8"] > .btn').click();
    cy.get(".fade > .d-flex > :nth-child(2)").should(
      "have.text",
      "Thank you for considering tipping testing. We'll notify them as soon as the payment is completed."
    );
    cy.get("#tip-amount").type("100");
    cy.get(".col-8 > .text-center").click();
  });
});
