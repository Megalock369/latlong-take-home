import addressToLatLongPage from '../pages/addressToLatLongPage'

describe('Address to LatLong Page Tests', () => {
  beforeEach(() => {
    addressToLatLongPage.visit()
  })

  it('should display correct latitudes and longitudes for multiple addresses', () => {
    cy.fixture('address').then((addresses) => {
      addresses.forEach((address) => {
        addressToLatLongPage.fillAddress(address.address)
        addressToLatLongPage.clickFindButton()
        addressToLatLongPage.assertLatitudeVisible(address.latitude)
        addressToLatLongPage.assertLongitudeVisible(address.longitude)
      })
    })
  })
})