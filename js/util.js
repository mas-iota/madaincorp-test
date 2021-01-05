const options = ['rock', 'paper', 'scissors']

export function getRandomOption() {
  return options[Math.floor(Math.random() * (2 + 1))]
}
