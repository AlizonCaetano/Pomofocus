import ToggleTheme from './toggleTheme.js'
import Controls from './controls.js'
import Timer from './timer.js'
import { buttonPressAudio, kitchenTimer } from './sounds.js'

let lgtThemeBtn = document.querySelector('.theme-btn.lgt-theme-btn')
let drkThemeBtn = document.querySelector('.theme-btn.drk-theme-btn')

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPause = document.querySelector('.pause')
const buttonAddMinutes = document.querySelector('.add-minutes')
const buttonDecMinutes = document.querySelector('.dec-minutes')

const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')

const bodyDocument = document.querySelector('body')
const theme = ToggleTheme({ lgtThemeBtn, drkThemeBtn, bodyDocument })

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetTimer: controls.stop
})

lgtThemeBtn.addEventListener('click', () => {
  buttonPressAudio.play()
  theme.changeToLightTheme()
})

drkThemeBtn.addEventListener('click', () => {
  buttonPressAudio.play()
  theme.changeToDarkTheme()
})

buttonPlay.addEventListener('click', () => {
  buttonPressAudio.play()
  controls.play()
  timer.countdown()
})

buttonStop.addEventListener('click', () => {
  buttonPressAudio.play()
  controls.stop()
  timer.reset()
})

buttonPause.addEventListener('click', () => {
  buttonPressAudio.play()
  controls.pause()
  timer.hold()
})

buttonAddMinutes.addEventListener('click', () => {
  buttonPressAudio.play()
  timer.addMinutes()
})

buttonDecMinutes.addEventListener('click', () => {
  buttonPressAudio.play()
  timer.decMinutes()
})

//sound cards

const forestCard = document.querySelector('.forest-sound')
const rainCard = document.querySelector('.rain-sound')
const voicesCard = document.querySelector('.voices-sound')
const firepitCard = document.querySelector('.firepit-sound')

const forestSound = document.querySelector('#forest')
const rainSound = document.querySelector('#rain')
const voicesSound = document.querySelector('#voices')
const fireSound = document.querySelector('#fire')

forestCard.addEventListener('click', () => {
  forestCard.classList.toggle('active')
  buttonPressAudio.play()
  isButtonActivated(forestCard, forestSound)

  let volumeForest = document.getElementById('volume-forest')
  volumeForest.addEventListener('change', () => {
    forestSound.volume = volumeForest.value / 100
  })
})

rainCard.addEventListener('click', () => {
  rainCard.classList.toggle('active')
  buttonPressAudio.play()
  isButtonActivated(rainCard, rainSound)

  let volumeRain = document.getElementById('volume-rain')
  volumeRain.addEventListener('change', () => {
    rainSound.volume = volumeRain.value / 100
  })
})

voicesCard.addEventListener('click', () => {
  voicesCard.classList.toggle('active')
  buttonPressAudio.play()
  isButtonActivated(voicesCard, voicesSound)

  let volumeVoices = document.getElementById('volume-voices')
  volumeVoices.addEventListener('change', () => {
    voicesSound.volume = volumeVoices.value / 100
  })
})

firepitCard.addEventListener('click', () => {
  firepitCard.classList.toggle('active')
  buttonPressAudio.play()
  isButtonActivated(firepitCard, fireSound)

  let volumeFire = document.getElementById('volume-fire')
  volumeFire.addEventListener('change', () => {
    fireSound.volume = volumeFire.value / 100
  })
})

function isButtonActivated(button, sound) {
  if (button.className.match('.active')) {
    sound.play()
  } else {
    sound.pause()
  }
}
