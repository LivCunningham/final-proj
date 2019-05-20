let spaceX = {}
let index = 0

const getHeroImage = () => {
  fetch(' https://sdg-astro-api.herokuapp.com/api/Nasa/apod ')
    .then(resp => {
      return resp.json()
    })
    .then(message => {
      console.log(message)
      document.querySelector('.hero-image').style.backgroundImage =
        'url(' + message.url + ')'
      document.querySelector('.copy-right').innerHTML =
        'copyright: ' + message.copyright + ' | title: ' + message.title
    })
}

const getFlightData = () => {
  fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
    .then(resp => {
      return resp.json()
    })
    .then(missions => {
      console.log(missions)
      document.querySelector('.launch-title').textContent =
        missions[0].mission_Name
      document.querySelector('.launch-site').textContent =
        missions[index].launch_site.site_name_long
      document.querySelector('.launch-description').textContent =
        missions[index].details
    })
}
const showCurrentLaunchSites = () => {
  document.querySelector('.launch-title').textContent = spaceX.mission_Name
  document.querySelector('.launch-description').textContent = spaceX.details
  document.querySelector('.launch-site').textContent =
    spaceX.launch_site.site_name_long
  spaceX = missions
}

const main = () => {
  getHeroImage()
  getFlightData()
  showCurrentLaunchSites()
}

document.addEventListener('DOMContentLoaded', main)
