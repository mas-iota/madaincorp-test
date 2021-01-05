import { getRandomOption } from './util.js'

const score = { computer: 0, player: 0 }
const playerCtrlBtns = document.querySelectorAll('.player-controls img')
const resetBtn = document.querySelector('.reset-img')

playerCtrlBtns.forEach((btn) => btn.addEventListener('click', play))
resetBtn.addEventListener('click', reset)

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
      log('computer')
    } else if (computerOption === 'scissors') {
      // u win
      status = 'Won!'
      log('player')
    }
  } else if (playerOption === 'paper') {
    if (computerOption === 'scissors') {
      // c win
      status = 'Lost!'
      log('computer')
    } else if (computerOption === 'rock') {
      // u win
      status = 'Won!'
      log('player')
    }
  } else if (playerOption === 'scissors') {
    if (computerOption === 'rock') {
      // c win
      status = 'Lost!'
      log('computer')
    } else if (computerOption === 'paper') {
      // u win
      status = 'Won!'
      log('player')
    }
  }

  document.querySelector('#round-status').innerText = status
}

function log(winner) {
  score[winner]++

  let tableRef = document.querySelector('.score-table').getElementsByTagName('tbody')[0]
  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1)
  // Insert a cell in the row at index 0
  let playerCell = newRow.insertCell(0)
  let computerCell = newRow.insertCell(1)

  // Append a text node to the cell
  let winnerText = document.createTextNode('1')
  let loserText = document.createTextNode('0')

  playerCell.appendChild(winner === 'player' ? winnerText : loserText);
  computerCell.appendChild(winner === 'computer' ? winnerText : loserText)
  updateScores()
}

function reset() {
  const tableRef = document.querySelector('.score-table').getElementsByTagName('tbody')[0]
  tableRef.innerHTML = ''

  score.computer = 0
  score.player = 0

  updateScores()
}

function updateScores() {
  document.querySelector('#computer-score').innerText = score.computer
  document.querySelector('#player-score').innerText = score.player
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
