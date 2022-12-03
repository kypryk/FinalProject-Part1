import user from "../fixtures/user.json"

let requestBody = {
    "email": user.email,
    "password": user.password
}

export function loginViaApi(){
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
            cy.get(`div.mat-grid-tile-content:contains(${productName}) [aria-label="Add to Basket"]`).click();
        }else{
            cy.get('[aria-label="Next page"]').click();
            searchProductOnMainPage(productName)
        }
    })

    /*let product = cy.get('div.mat-grid-tile-content')
    if(product == productName){
        cy.get(`div.mat-grid-tile-content:contains(${productName}) [aria-label="Add to Basket"]`).click();
        console.log("found")
    }else{
        cy.get('[aria-label="Next page"]').click();
        console.log("didn't found, clicking next")
        searchProductOnMainPage(productName)
    }*/
}