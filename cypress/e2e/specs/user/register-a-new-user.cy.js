const { URLS } = require("../../../support/urls");
const { textContent } = require("../../data/user/register-data");
const { selectors } = require("../../selectors/user/register-selectors");

describe('Register a new user', function () {
    beforeEach(function () {
        cy.visit(Cypress.env('baseUrl') + URLS.REGISTER);
    })
    it('Assert Register Page - URL, Title, Fields, Buttons and Required Fields', function () {
        cy.url().should('eq', Cypress.env('baseUrl') + URLS.REGISTER);

        cy.get(selectors.homeButton).find(selectors.span).should('have.text', textContent.homeButtonText);

    })

    it('Check Title, Label and Button of the Fixed Deposit Product Edit Page', function () {
        
    })

})