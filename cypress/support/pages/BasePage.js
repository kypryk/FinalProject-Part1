export default class BasePage{
    getWelcomeBannerDismissButton(){
        return cy.get('[aria-label="Close Welcome Banner"]');
    }

    clickWelcomeBannerDismissButton(){
        cy.log('**Dismissing Welcome Banner**');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    }

    getAccountButton(){
        return cy.get('#navbarAccount');
    }

    clickNavbarAccountButton(){
        cy.get('#navbarAccount').click();
    }

    getNavbarLoginButton(){
        return cy.get('#navbarLoginButton');
    }

    clickNavbarLoginButton(){
        cy.get('#navbarLoginButton').click();
    }

    getRegistationButton(){
        return cy.get('#newCustomerLink');
    }

    clickRegistationButton(){
        cy.get('#newCustomerLink').click();
    }

    openRegistrationPage(){
        this.clickNavbarAccountButton();
        this.clickNavbarLoginButton();
        this.clickRegistationButton();
    }

    openLoginPage(){
        this.clickNavbarAccountButton();
        this.clickNavbarLoginButton();
    }

    getSearchButton(){
        return cy.get('#searchQuery');
    }

    clickSearchButton(){
        cy.get('#searchQuery').click();
    }

    getSearchField(){
        return cy.get('#mat-input-0');
    }

    getSearchForm(){
        return cy.get('#searchQuery mat-form-field');
    }

    submitSearchField(searchQuery){
        this.clickSearchButton();
        this.getSearchField().type(searchQuery).type('{enter}');
    }

    getYourBasketButton(){
        return cy.get('[routerlink="/basket"]');
    }

    clickYourBasketButton(){
        cy.get('[routerlink="/basket"]').click();
    }
}

