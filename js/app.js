import { getRandomOption } from './util.js'

let playerCtrlBtns = document.querySelectorAll('.player-controls button')
playerCtrlBtns.forEach((btn) => btn.addEventListener('click', play))

const score = { computer: 0, player: 0 }

function play(e) {
  const playerOption = e.target.dataset.type
  const computerOption = getRandomOption()
  let status

  document.querySelector('#player-option').innerText = playerOption
  document.querySelector('#computer-option').innerText = computerOption

  if (playerOption === computerOption) {
    status = 'Tie!'
  } else if (playerOption === 'rock') {
    if (computerOption === 'paper') {
      // c win
      status = 'Lost!'
    } else if (computerOption === 'scissors') {
      // u win
      status = 'Won!'
    }
  } else if (playerOption === 'paper') {
    if (computerOption === 'scissors') {
      // c win
      status = 'Lost!'

    } else if (computerOption === 'rock') {
      // u win
      status = 'Won!'

    }
  } else if (playerOption === 'scissors') {
    if (computerOption === 'rock') {
      // c win
      status = 'Lost!'

    } else if (computerOption === 'paper') {
      // u win
      status = 'Won!'

    }
  }

  document.querySelector('#round-status').innerText = status
}

// 1- click on rock / paper / scissors

// fn play()
 // 1- random computer option
 // 2- reflect on document what computer chose
 // 3- evaluate both options
 //   a- if equal then draw
 //   b- if user rock
 //     i- if computer paper computer WIN
 //     ii- if computer scissors user WIN
 //   b- if user paper
 //     i- if computer scissors computer WIN
 //     ii- if computer rock user WIN
 //   b- if user scissors
 //     i- if computer rock computer WIN
 //     ii- if computer paper user WIN
 // 4- log the result


// fn log()
 // 1- add score
 // 2- reflect on document

// fn helper.random()
