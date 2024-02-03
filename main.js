const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const p = document.querySelector(".screen2 p")

const randomText = [
    "Quem leu é daora",
    "se voce leu, vai pro ceu",
    "o mundo é uma piada e eu sou a graça",
    "deus na defesa e eu mesmo no ataque 100 simpatia",
    "a vida é uma brisa",
    "o imposivel, é imposivel mesmo",
]

console.log(randomText);

let generetedText = Math.round(Math.random() * randomText.length)

function text() {
    let generetedText = Math.round(Math.random() * randomText.length)
    const enterText = randomText[generetedText]
    p.innerText = enterText
    toggleScreen()

}

openCookie.addEventListener('click', text)
tryAgain.addEventListener('click', toggleScreen)


function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}