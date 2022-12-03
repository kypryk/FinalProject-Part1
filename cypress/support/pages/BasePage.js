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
        cy.log('**Clicking Account in navbar**');
        cy.get('#navbarAccount').click();
    }

    getNavbarLoginButton(){
        return cy.get('#navbarLoginButton');
    }

    clickNavbarLoginButton(){
        cy.log('**Clicking Login in navbar**');
        cy.get('#navbarLoginButton').click();
    }

    getProfileButton(){
        cy.log('**Getting Profile button**');
        return cy.get('[aria-label="Go to user profile"]');
    }

    getRegistationButton(){
        return cy.get('#newCustomerLink');
    }

    clickRegistationButton(){
        cy.log('**Clicking registration button**');
        cy.get('#newCustomerLink').click();
    }

    openRegistrationPage(){
        cy.log('**Opening registration page**');
        this.clickNavbarAccountButton();
        this.clickNavbarLoginButton();
        this.clickRegistationButton();
    }

    openLoginPage(){
        cy.log('**Opening login page**');
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
        cy.log(`**Seaching for the: ${searchQuery}**`);
        this.clickSearchButton();
        this.getSearchField().type(searchQuery).type('{enter}');
    }

    getYourBasketButton(){
        return cy.get('[routerlink="/basket"]');
    }

    clickYourBasketButton(){
        cy.log('**Opening Basket**');
        cy.get('[routerlink="/basket"]').click();
    }
}

