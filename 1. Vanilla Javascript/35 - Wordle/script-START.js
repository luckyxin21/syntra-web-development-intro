const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");

async function init() {
  console.log("lets get started");
  // the state for the app
  let isLoading = true;
  let done = false;
  let currentRow = 0;
  let currentGuess = "";

  // nab the word of the day
  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  console.log(res);
  const { word: wordRes } = await res.json();

  console.log({ word: wordRes });
  const word = wordRes.toUpperCase();
  //console.log(word);
  const wordParts = word.split("");
  //console.log(wordParts);
  // user adds a letter to the current guess
  function addLetter(letter) {
    if (currentGuess.length < ANSWER_LENGTH) {
      currentGuess += letter;
    } else {
      //?????
      currentGuess =
        currentGuess.substring(0, currentGuess.length - 1) + letter;
    }

    letters[currentRow * ANSWER_LENGTH + currentGuess.length - 1].innerText =
      letter;
  }

  // use tries to enter a guess
  async function commit() {
    if (currentGuess.length !== ANSWER_LENGTH) {
      return;
    }
    let isLoading = true;
    setLoading(isLoading);
    const res = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: currentGuess }),
    });
    //console.log(res.json());
    const { validWord } = await res.json();
    //console.log({ validWord });
    if (!validWord) {
      markInvalidWord();
      return;
    }
  }
  const guessParts = currentGuess.split("");
  const map = makeMap(wordParts);
  let allRight = true;
  // user hits backspace, if the the length of the string is 0 then do
  // nothing
  function backspace() {
    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
    letters[currentRow * ANSWER_LENGTH + currentGuess.length].innerText = "";
  }

  // let the user know that their guess wasn't a real word
  // skip this if you're not doing guess validation
  function markInvalidWord() {
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[currentRow * ANSWER_LENGTH + i].classList.remove("invalid");
      setTimeout(
        () => letters[currentRow * ANSWER_LENGTH + i].classList.add("invalid"),
        10
      );
    }
  }

  // listening for event keys and routing to the right function
  // we listen on keydown so we can catch Enter and Backspace
  document.addEventListener("keydown", function handleKeyPress(event) {
    if (done || isLoading) {
      return;
    }
    const action = event.key;
    if ((action = "enter")) {
      commit();
    } else if (action === "backspace") {
      backspace();
    } else {
      return;
    }
  });
}
// a little function to check to see if a character is alphabet letter
// this uses regex (the /[a-zA-Z]/ part) but don't worry about it
// you can learn that later and don't need it too frequently
function isLetter(letter) {}

// show the loading spinner when needed
function setLoading(isLoading) {
  loadingDiv.classList.toggle("hidden", !isLoading);
}

// takes an array of letters (like ['E', 'L', 'I', 'T', 'E']) and creates
// an object out of it (like {E: 2, L: 1, T: 1}) so we can use that to
// make sure we get the correct amount of letters marked close instead
// of just wrong or correct
function makeMap(array) {}

init();
