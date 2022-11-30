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
})

describe('Login', () => {
  it('Login with valid data', () => {
    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    HomePage.openLoginPage();

    LoginPage.submitLoginForm();
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

describe.skip('Order with helper', () => {
  it('Making an order searching it on the homepage', () => {

    HomePage.visit();
    HomePage.clickWelcomeBannerDismissButton();

    searchProductOnMainPage();
    
  })
})

describe('Contact Us', () => {
  it('Sending contact us with valid data', () => {
    ContactUsPage.visit();

    ContactUsPage.clickWelcomeBannerDismissButton();

    ContactUsPage.submitContactUsForm();
  })
})