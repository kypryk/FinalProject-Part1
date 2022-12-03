import user from "../fixtures/user.json"

let requestBody = {
    "email": user.email,
    "password": user.password
}

export function loginViaApi(){
    cy.log('**Login via api, setting cookie, local and session storage**')
    cy.request('POST', '/rest/user/login', requestBody).then((response) => {
        user.token = response.body.authentication.token;
        user.bid = response.body.authentication.bid;
    
        console.log(user)

        cy.setCookie('token', user.token);
        window.localStorage.setItem('token', user.token);
        window.localStorage.setItem('email', user.email);
        window.sessionStorage.setItem('bid', user.bid);
    })
}

export function searchProductOnMainPage(productName){

    cy.get('body').then(body => {
        if(body.find(`div.mat-grid-tile-content:contains(${productName})`).length > 0){
            cy.log('**Adding the product to the basket**');
            cy.get(`div.mat-grid-tile-content:contains(${productName}) [aria-label="Add to Basket"]`).click();
        }else{
            cy.log('**No product here, moving to the next page**');
            cy.get('[aria-label="Next page"]').click();
            searchProductOnMainPage(productName)
        }
    })

}