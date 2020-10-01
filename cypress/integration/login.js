describe("Navagation", () => {
  beforeEach(() => {
    cy.visit("https://zenpal.netlify.app/");
  });

  it("Should find signup link on redirect and sign a user in", () => {
    cy.contains("Login").click();

    cy.url().should("include", "/login");
    cy.get("#username")
      .type("rudeboyrupert@protonmail.com")
      .should("have.value", "rudeboyrupert@protonmail.com");
  });
});
