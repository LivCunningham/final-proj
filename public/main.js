let spaceX = {}
let index = 0

// fetch hero image

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

// fetch launch data

const getFlightData = () => {
  fetch('https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming')
    .then(resp => {
      return resp.json()
    })
    .then(missions => {
      console.log(missions)
      const spaceX = missions

      document.querySelector('.launch-title').textContent =
        spaceX[index].mission_name
      document.querySelector('.launch-site').textContent =
        spaceX[index].launch_site.site_name_long
      document.querySelector('.launch-description').textContent =
        spaceX[index].details

      // // button click event listener
      // document
      //   .querySelector('.button-left')
      //   .addEventListener('click', function(e) {
      //     if (index === 0) {
      //       index = missions.length -= 1
      //     // } else {
      //     //   index--
      //     // }
      //     showCurrentLaunch(missions[index])
      //   })
      // document
      //   .querySelector('.button-right')
      //   .addEventListener('click', function(e) {
      //     if (index === missions.length = 1) {
      //       index = 0
      //     // } else {
      //     //   index++
      //     // }
      //     showCurrentLaunch(missions[index])
    })
}

const clearSlide = () => {
  document.querySelector('.launch-title').textContent = ''
  document.querySelector('.launch-description').textContent = ''
  document.querySelector('.launch-site').textContent = ''
}

// if there is no Launch description

const main = () => {
  getHeroImage()
  getFlightData()
  clearSlide()
  clickLeft()
  clickRight()
}

//clear slide function

// button click functions

const clickLeft = () => {
  clearSlide()
  getFlightData()
  index -= 1
}

const clickRight = () => {
  clearSlide()
  getFlightData()
  index += 1
}

document.querySelector('.button-left').addEventListener('click', clearSlide)
document.querySelector('.button-left').addEventListener('click', clickLeft)
document.querySelector('.button-right').addEventListener('click', clearSlide)
document.querySelector('.button-right').addEventListener('click', clickRight)

document.addEventListener('DOMContentLoaded', main)
