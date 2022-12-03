import BasePage from "./BasePage";
import { faker } from "@faker-js/faker";

let name = '';
let cardFullName = faker.name.fullName();

class CheckoutAdressPage extends BasePage{

    getAddNewAddressButton(){
        return cy.get('[routerlink="/address/create"]');
    }

    clickAddNewAddressButton(){
        cy.get('[routerlink="/address/create"]').click();
    }

    getNewAddressCountryField(){
        return cy.get('#mat-input-1');
    }

    getNewAddressNameField(){
        return cy.get('#mat-input-2');
    }

    getNewAddressMobileNumberField(){
        return cy.get('#mat-input-3');
    }

    getNewAddressZipCodeField(){
        return cy.get('#mat-input-4');
    }

    getNewAddressAddressField(){
        return cy.get('#address');
    }

    getNewAddressCityField(){
        return cy.get('#mat-input-6');
    }

    getNewAddressStateField(){
        return cy.get('#mat-input-7');
    }
    
    getNewAddressSubmitButton(){
        return cy.get('#submitButton');
    }
    
    //creating new address
    submitAddNewAddressForm(){

        //remember name for further search in saved addresses
        name = faker.name.firstName()

        this.getNewAddressCountryField().type(faker.address.country());
        this.getNewAddressNameField().type(name);
        this.getNewAddressMobileNumberField().type(faker.phone.number('########'));
        this.getNewAddressZipCodeField().type(faker.address.zipCode('####'));
        this.getNewAddressAddressField().type(faker.address.streetAddress());
        this.getNewAddressCityField().type(faker.address.city());
        this.getNewAddressStateField().type(faker.address.state());
        this.getNewAddressSubmitButton().click();
    }

    getNewlyCreatedAddressRadioButton(){
        return cy.get(`.mat-row.cdk-row.ng-star-inserted:contains(${name})`);
    }

    clickNewlyCreatedAddressRadioButton(){
        cy.get(`.mat-row.cdk-row.ng-star-inserted:contains(${name})`).click();
    }

    getContinueButton(){
        return cy.get('[aria-label="Proceed to payment selection"]');
    }

    clickContinueButton(){
        cy.get('[aria-label="Proceed to payment selection"]').click();
    }
    
    getDeliveryStandardDeliveryRadioButton(){
        return cy.get('.mat-row.cdk-row.ng-star-inserted:contains("Standard Delivery")');
    }

    clickDeliveryStandardDeliveryRadioButton(){
        cy.get('.mat-row.cdk-row.ng-star-inserted:contains("Standard Delivery")').click();
    }

    getDeliveryContinueButton(){
        return cy.get('button:contains("Continue")');
    }

    clickDeliveryContinueButton(){
        cy.get('button:contains("Continue")').click();
    }

    getPaymentExpandNewCardButton(){
        return cy.get('#mat-expansion-panel-header-0');
    }

    clickPaymentExpandNewCardButton(){
        cy.get('#mat-expansion-panel-header-0').click();
    }

    getPaymentNewCardNameField(){
        return cy.get('#mat-input-8');
    }

    getPaymentNewCardNumberField(){
        return cy.get('#mat-input-9');
    }
    
    getPaymentNewCardExpirationMonthField(){
        return cy.get('#mat-input-10');
    }

    selectPaymentNewCardExpirationMonth1stOption(){
        cy.get('#mat-input-10').select(0);
    }
    
    getPaymentNewCardExpirationYearField(){
        return cy.get('#mat-input-11');
    }
    
    selectPaymentNewCardExpirationYear1stOption(){
        cy.get('#mat-input-11').select(0);
    }

    getPaymentNewCardSubmitButton(){
        return cy.get('#submitButton');
    }

    clickPaymentNewCardSubmitButton(){
        cy.get('#submitButton').click();
    }
    
    submitPaymentNewCard(){
        this.clickPaymentExpandNewCardButton();
        this.getPaymentNewCardNameField().type(cardFullName); 
        this.getPaymentNewCardNumberField().type(faker.finance.creditCardNumber('4###############'));
        this.selectPaymentNewCardExpirationMonth1stOption();
        this.selectPaymentNewCardExpirationYear1stOption();
        this.clickPaymentNewCardSubmitButton();
    }

    clickPaymentCreatedCardRadioButton(){
        cy.get(`.mat-row.cdk-row.ng-star-inserted:contains(${cardFullName}) mat-radio-button`).click();
    }

    clickPaymentContinueButton(){
        cy.get('button[aria-label="Proceed to review"]').click();
    }

    clickPlaceYourOrderAndPayButton(){
        cy.get('#checkoutButton').click();
    }

    checkOrderConfirmationMessage(){
        cy.get('h1[class="confirmation"]').should('contain', "Thank you for your purchase!")
    }
}
export default new CheckoutAdressPage();