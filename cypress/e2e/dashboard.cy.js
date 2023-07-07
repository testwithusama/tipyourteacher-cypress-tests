describe("Dashboard Tests", () => {
  it("Should be able to land on the login page", () => {
    cy.visit("https://tipyourteacher-staging.vercel.app");
    function getRandomItem(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex];
      return item;
    }
    const array = ["testing", "hello", "user", "new", "maximus"];
    const result = getRandomItem(array);
    cy.get(".get-started-default-input").type(result);
    cy.get(".d-none > .w-100").click();
    cy.wait(2000);
    cy.get("form > .text-center").should("have.text", " Sign Up");
    cy.get(":nth-child(2) > .input-group > #formpassword").type(
      "usamatesteng@gmail.com"
    );
    cy.get(":nth-child(3) > .input-group > #formpassword").type("Test@1998");
    cy.get(":nth-child(5) > .input-group > #formpassword").type("Test@1998");
    cy.get(".login100-form-btn").click();
    cy.wait(6000);
    cy.get(".bg-white").should(
      "have.text",
      "Success!You are now a part of Tip Your Teacher! We look forward to helping those you serve show their appreciation for all you do in the noblest of professions. We have added you to our list to be a part of our intitial launch. Look for an email from us with additional information on your next steps!"
    );
  });
});
