class userRegistrationPage {
    visit() {
      cy.visit(Cypress.env('regUrl'))
    }
  
    fillFirstName(firstName) {
      cy.get('[id="firstname"]').type(firstName)
    }
  
    fillSurname(surname) {
      cy.get('[id="surname"]').type(surname)
    }
  
    fillEmail(email) {
      cy.get('[id="email"]').type(email)
    }
  
    fillPassword1(password) {
      cy.get('[id="password1"]').type(password)
    }
  
    fillPassword2(password) {
      cy.get('[id="password2"]').type(password)
    }
  
    clickAgreeCheckbox() {
      cy.get('[id="cbAgr"]').click()
    }
  
    clickRegisterButton() {
      cy.get('[title="Register"]').click()
    }
  
    assertSuccessMessageVisible() {
      cy.get('[class="message success"]').should('be.visible')
    }
  
    assertEmailValidationMessage(expectedMessage) {
      cy.get('[id="email"]').invoke('prop', 'validationMessage').should('equal', expectedMessage)
    }
  
    assertPassword1Validity(expectedValidity) {
      cy.get('[id="password1"]').then(($el) => {
        expect($el[0].checkValidity()).to.equal(expectedValidity)
      })
    }

    assertEmailValidity(expectedEmailValidity){
      cy.get('[id="email"]').then(($el) => {
        expect($el[0].checkValidity()).to.equal(expectedEmailValidity)
        })
    }

    assertFirstNameValidity(expectedFirstNameValidity){
      cy.get('[id="firstname"]').then(($el) => {
        expect($el[0].checkValidity()).to.equal(expectedFirstNameValidity)
        })
    }
      
    assertFirstNameValidationMessage(expectedMessage) {
      cy.get('[id="firstname"]').invoke('prop', 'validationMessage').should('equal', expectedMessage)
    }
  }
  
  export default new userRegistrationPage()