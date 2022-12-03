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

  it.skip('Registration with invalid email', () => {
    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.openRegistrationPage();
    
  

  })
})

describe('Login', () => {
  it('Login with valid data', () => {
    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.openLoginPage();

    LoginPage.submitLoginForm();

    LoginPage.clickNavbarAccountButton();
    cy.get('[aria-label="Go to user profile"]').should('contain', user.email);

    cy.writeFile('E:/QAAuto/QALightProjects.2nd-try/FinalProject-Part1/cypress/fixtures/user.json', {
      "email": user.email,
      "password": user.password,
      "securityAnswer": user.securityAnswer,
      "token": "",
      "bid": ""
    })

  })
})

describe('Order', () => {

  it('Making an order', () => {
    /*cy.setCookie("token", user.token);
    window.localStorage.setItem('token', user.token);
    window.localStorage.setItem('email', user.email);*/

    loginViaApi(); //TODO finish adding token and bid in user.json

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
    CheckoutAddressPage.checkOrderConfirmationMessage();
  })
})

describe.only('Order with helper', () => {
  it('Making an order searching it on the homepage', () => {

    loginViaApi();

    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    //dismissing cookie
    cy.get('.cc-compliance').click();

    searchProductOnMainPage("Strawberry Juice (500ml)");
    
  })
})

describe('Contact Us', () => {
  it('Sending contact us with valid data', () => {
    ContactUsPage.visit();

    ContactUsPage.clickWelcomeBannerDismissButton();

    ContactUsPage.submitContactUsForm();
    ContactUsPage.checkSubmitContactUsSuccessMessage();
  })
})