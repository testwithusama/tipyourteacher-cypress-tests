describe("Dashboard Tests", () => {
  it("Should be able to land on the login page", () => {
    cy.visit("https://tipyourteacher-csvj1c7qr-desolintdev.vercel.app/");
    cy.get(".login100-form-btn").click();
    cy.get(".dark-layout > .fe").click();
  });
});
