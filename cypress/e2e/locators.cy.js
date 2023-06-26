///references types="cypress"/>

describe("Find or get elements by using different locators", () => {

beforeEach(() => {
    cy.clearCookies();
    cy.visit("/login");
})

it("check different locators strategies", () => {
        cy.get("input[name='username']").type("CydeoStudent");
})












})