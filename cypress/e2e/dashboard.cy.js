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
    cy.get(".get-started-default-input-button").click();
    cy.wait(2000);
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
      "Hi, We can't wait to launch our services and we show you all the great things we've been working on. You'll get an email from us soon, when we will go live."
    );
  });
});
