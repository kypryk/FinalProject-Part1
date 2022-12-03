import BasePage from "./BasePage";

class BasketPage extends BasePage{

    getProductInTheBasket(){
        cy.log('**Getting product in the basket**');
        return cy.get('.mat-row.cdk-row.ng-star-inserted');
    }

    getCheckoutButton(){
        return cy.get('#checkoutButton');
    }

    clickCheckoutButton(){
        cy.log('**Clicking Checkout Button**');
        cy.get('#checkoutButton').click();
    }

}
export default new BasketPage();