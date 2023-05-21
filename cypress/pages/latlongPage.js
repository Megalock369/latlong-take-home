class latlongPage {
    visit() {
      cy.visit(Cypress.env('latUrl'))
    }
  
    fillLocationName(name) {
      cy.get('[id="place"]').clear().type(name)
    }
  
    clickFindButton() {
      cy.get('[id="btnfind"]').click()
    }
  
    assertLatitudeVisible(latitude) {
      cy.contains(latitude).should('be.visible')
    }
  
    assertLongitudeVisible(longitude) {
      cy.contains(longitude).should('be.visible')
    }
  }
  
  export default new latlongPage()