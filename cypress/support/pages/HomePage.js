import BasePage from "./BasePage";

class HomePage extends BasePage{
    visit(){
        cy.visit('/');
    }
    
    dismissingCookie(){
        cy.get('.cc-compliance').click();
    }

    checkPlaceIntoBasketTooltip(){
        cy.get('.cdk-overlay-pane').should('contain', "into basket.")
    }

}
export default new HomePage();