import BasePage from "./BasePage";

class SearchPage extends BasePage{
    getAddToBasketOnFirstProduct(){
        return cy.get('.mat-grid-tile.ng-star-inserted button').first();
    }
    
    clickAddToBasketOnFirstProduct(){
        cy.log('**Adding product to the basket**');
        cy.get('.mat-grid-tile.ng-star-inserted button').first().click({force: true});
    }

}
export default new SearchPage();