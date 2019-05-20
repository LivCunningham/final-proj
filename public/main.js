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
      document.querySelector('.launch-card').textContent =
        missions + [''] + missions.mission_Name
    })
    .then(missions => {
      // console.log(missions.index]launch_site.site_name_long)
    })
  spaceX = missions
}
const showCurrentLaunchTitle = () => {
  document.querySelector('.launch-title').textContent = spaceX.mission_Name
}

const main = () => {
  getHeroImage()
  getFlightData()
  showCurrentLaunchTitle()
}

document.addEventListener('DOMContentLoaded', main)
