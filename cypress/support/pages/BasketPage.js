import BasePage from "./BasePage";

class BasketPage extends BasePage{
    getCheckoutButton(){
        return cy.get('#checkoutButton');
    }

    clickCheckoutButton(){
        cy.get('#checkoutButton').click();
    }

}
export default new BasketPage();