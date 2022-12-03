///<reference types="cypress"/>
import RegistrationPage from '../support/pages/RegistrationPage';
import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';
import SearchPage from '../support/pages/SearchPage';
import BasketPage from '../support/pages/BasketPage';
import CheckoutAddressPage from '../support/pages/CheckoutAddressPage';
import { loginViaApi } from '../support/helper';
import { searchProductOnMainPage } from '../support/helper';
import user from '../fixtures/user.json'
import ContactUsPage from '../support/pages/ContactUsPage';

describe('Registration', () => {
  it('Registration with valid data', () => {
    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.openRegistrationPage();
    
    RegistrationPage.submitRegistrationForm();
  })

  it('Registration with invalid email', () => {
    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.openRegistrationPage();
    
    RegistrationPage.fillRegistrationFormWithInvalidEmail();
    RegistrationPage.getInvalidEmailError().should('contain', "Email address is not valid");
    RegistrationPage.getRegisterButton().should('be.disabled');
  })

})

describe('Login', () => {
  it('Login with valid data', () => {
    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.openLoginPage();

    LoginPage.submitLoginForm();

    LoginPage.clickNavbarAccountButton();
    LoginPage.getProfileButton().should('contain', user.email);

    cy.log('**Rewrite newly created user in user.json**')
    cy.writeFile('E:/QAAuto/QALightProjects.2nd-try/FinalProject-Part1/cypress/fixtures/user.json', {
      "email": user.email,
      "password": user.password,
      "securityAnswer": user.securityAnswer,
      "token": "",
      "bid": ""
    })

  })

  it('Login with non existent user', () => {
    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.openLoginPage();

    LoginPage.submitLoginFormWithNotRegisteredUser();

    LoginPage.getErrorMessage().should('contain', "Invalid email or password")
  })

})

describe('Order', () => {

  it('Making an order', () => {

    loginViaApi();

    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.submitSearchField("Apple Juice");

    SearchPage.clickAddToBasketOnFirstProduct();
    SearchPage.clickYourBasketButton();

    BasketPage.clickCheckoutButton();

    //adding new address and selecting it
    CheckoutAddressPage.clickAddNewAddressButton();
    CheckoutAddressPage.submitAddNewAddressForm();
    CheckoutAddressPage.clickNewlyCreatedAddressRadioButton();
    CheckoutAddressPage.clickContinueButton();
    //selecting Standard Delivery
    CheckoutAddressPage.clickDeliveryStandardDeliveryRadioButton();
    CheckoutAddressPage.clickDeliveryContinueButton();
    //adding and selecting new card
    CheckoutAddressPage.submitPaymentNewCard();
    CheckoutAddressPage.clickPaymentCreatedCardRadioButton();
    CheckoutAddressPage.clickPaymentContinueButton();
    CheckoutAddressPage.clickPlaceYourOrderAndPayButton();
    //checking success message
    CheckoutAddressPage.getOrderConfirmationMessage().should('contain', "Thank you for your purchase!");
  })
})

describe('Order with helper', () => {
  it('Making an order searching it on the homepage', () => {

    loginViaApi();

    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.dismissingCookie();

    let product = "Strawberry Juice (500ml)"
    searchProductOnMainPage(product);

    HomePage.clickYourBasketButton();
    BasketPage.getProductInTheBasket().should('contain', product);
    BasketPage.clickCheckoutButton();

    //adding new address and selecting it
    CheckoutAddressPage.clickAddNewAddressButton();
    CheckoutAddressPage.submitAddNewAddressForm();
    CheckoutAddressPage.clickNewlyCreatedAddressRadioButton();
    CheckoutAddressPage.clickContinueButton();
    //selecting Standard Delivery
    CheckoutAddressPage.clickDeliveryStandardDeliveryRadioButton();
    CheckoutAddressPage.clickDeliveryContinueButton();
    //adding and selecting new card
    CheckoutAddressPage.submitPaymentNewCard();
    CheckoutAddressPage.clickPaymentCreatedCardRadioButton();
    CheckoutAddressPage.clickPaymentContinueButton();
    CheckoutAddressPage.clickPlaceYourOrderAndPayButton();
    //checking success message
    CheckoutAddressPage.getOrderConfirmationMessage().should('contain', "Thank you for your purchase!");

  })
})

describe('Contact Us', () => {
  it('Sending contact us with valid data', () => {
    ContactUsPage.visit();

    ContactUsPage.clickWelcomeBannerDismissButton();

    ContactUsPage.submitContactUsForm();
    ContactUsPage.getSubmitContactUsOutcomeMessage().should('contain', 'Thank you for your feedback.');
  })

  it('Sending contact us with invalid captcha', () => {
    ContactUsPage.visit();

    ContactUsPage.clickWelcomeBannerDismissButton();

    ContactUsPage.submitContactUsFormWithInvalidCaptcha();
    ContactUsPage.getSubmitContactUsOutcomeMessage().should('contain', 'Wrong answer to CAPTCHA. Please try again.');
    
  })
})