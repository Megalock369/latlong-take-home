class loginPage {
    visit() {
      cy.visit(Cypress.env('logUrl'))
    }
  
    fillEmail(email) {
      cy.get('[id="email"]').clear().type(email)
    }
  
    fillPassword(password) {
      cy.get('[id="password1"]').clear().type(password)
    }
  
    clickLoginButton() {
      cy.get('[title="Login"]').click()
    }
  
    assertMessageVisible(message) {
      cy.contains(message).should('be.visible')
    }
  }
  
  export default new loginPage()