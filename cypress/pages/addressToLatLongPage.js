class AddressToLatLongPage {
    visit() {
      cy.visit(Cypress.env('adrUrl'))
    }
  
    fillAddress(address) {
      cy.get('[class="width70"]').clear().type(address)
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
  
  export default new AddressToLatLongPage()