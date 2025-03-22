const { selectors: registerSelectors }  = require("../e2e/selectors/user/register-selectors");

export function closePopUps(popUpSelectors = [registerSelectors.dismissButton, registerSelectors.closeDialogButton]) {
    popUpSelectors.forEach(selector => {
        cy.querySelectorIfExistInDom(selector).then(el => {
            if (el) cy.get(selector).click({ force: true });
        });
    });
}
