import latlongPage from '../pages/latlongPage'

describe('Validate features in latlong.net page', () => {
  beforeEach(() => {
    latlongPage.visit()
  })

  it('should display correct latitudes and longitudes for multiple locations', () => {
    cy.fixture('locations').then((locations) => {
      locations.forEach((location) => {
        latlongPage.fillLocationName(location.name)
        latlongPage.clickFindButton()
        latlongPage.assertLatitudeVisible(location.latitude)
        latlongPage.assertLongitudeVisible(location.longitude)
      })
    })
  })
})