/**
 * What is the output of the code snippet?
 */
{
  const promise = new Promise((resolve, reject) => {
    resolve("success1");
    reject("fail");

    resolve("success2");
  });
  console.log(promise);
  promise
    .then((res) => {
      console.log("then: ", res);
    })
    .catch((err) => {
      console.log("catch: ", err);
    });
  console.log("ok");
}

/**
 * What is the output of the code snippet?
 */
{
  const promise = new Promise((resolve, reject) => {
    reject("fail");
    resolve("success2");
  });
  promise
    .then((res) => {
      console.log("then1: ", res);
    })
    .then((res) => {
      console.log("then2: ", res);
    })
    .catch((err) => {
      console.log("catch: ", err);
    })
    .then((res) => {
      console.log("then3: ", res);
    });
}

/**
 * What is the output of this code snippet?
 */
{
  Promise.resolve(1)
    .then((res) => {
      console.log(res);
      return 2;
    })
    .catch((err) => {
      return 3;
    })
    .then((res) => {
      console.log(res);
    })
    .then((res) => {
      console.log(res);
    });
}

/**
 * What is the output of this code snippet?
 */
{
  Promise.reject(1)
    .then((res) => {
      console.log(res);
      return 2;
    })
    .catch((err) => {
      return 3;
    })
    .then((res) => {
      console.log(res);
    })
    .then((res) => {
      console.log(res);
    });
}

/**
 * What is the output of this code snippet?
 */
{
  const promise = new Promise((resolve, reject) => {
    resolve(1);
  });

  promise.then((res) => {
    console.log("first then: ", res);
    return 2;
  });

  promise.then((res) => {
    console.log("second then: ", res);
    return 3;
  });

  promise.then((res) => {
    console.log("third then: ", res);
  });
}

/**
 * What is the output of this snippet?
 */
{
  Promise.resolve()
    .then(() => {
      return new Error("error!!!");
    })
    .then((res) => {
      console.log("then: ", res);
    })
    .catch((err) => {
      console.log("catch: ", err);
    });
}

/**
 * What is the output of this snippet?
 */
{
  Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
}

/**
 * Promisify the following function
 */
//function loadScript(src, callback) {
//  let script = document.createElement("script");
//  script.src = src;

//  script.onload = () => callback(null, script);
//  script.onerror = () => callback(new Error(`Script load error for ${src}`));

//  document.head.append(script);
//}

//const waitForMove = (element, transform) => {
//  element.addEventListener("transitionend", () => console.log("done"), {
//    once: true,
//  });
//  element.style.transform = transform;
//};

//const ball = document.getElementById("ball");
//await waitForMove(ball, "translate(10px)");

/**
 * Let's do some practice with a simple exercice. You must modify the code below based on the following rules:
    1. The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
    2. The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data
 */
function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  });
}

job().then((v) => console.log(v));
//job().then(console.log).then(console.log);

/**
 * Let's do a harder exercise. In this code, your function receives a parameter data. You must modify the code below based on the following rules:
    1. Your function must always return a promise
    2. If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
    3. If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
    4. If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)
 */

function job(data) {
  function job(data) {
    return new Promise((resolve, reject) => {
      if (isNaN(data)) {
        reject("error");
      }
      if (data % 2 === 0) {
        setTimeout(() => {
          resolve("even");
        }, 2000);
      } else if (data % 2 === 1) {
        setTimeout(() => {
          resolve("odd");
        }, 1000);
      }
    });
  }
  job("18")
    .then((v) => console.log(v))
    .catch((v) => console.log(v));
}
/**
 * Build a guessing game:
 *  1. A user can enter a number
    2. The system picks a random number from 1 to 6
    3. If the user's number is equal to a random number, give the user 2 points
    4. If the user's number is different than the random number by 1, give the user 1 point. Otherwise, give the user 0 points
    5. The user can play the game as long as they want to
 */
/*1.create a prompt;
  2.get user Input;
  3.generate random number */
const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const number = Number(window.prompt("input a number between 1 and 6"));
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    if (isNaN(number)) {
      reject(new Error("Wrong Input Type"));
    }

    //?????if (number < 1 || number > 6) {
    //  reject(new Error("Wrong Input Number"));
    //}

    if (number === randomNumber) {
      resolve({ points: 2, randomNumber });
    }
    if (number - randomNumber === 1 || randomNumber - number === 1) {
      resolve({ points: 1, randomNumber });
    }
  });
};
/**enterNumber()
 .then((v) => console.log(v))
  .catch((v) => console.log(new Error("Wrong Input Type"))); */
/*    1.creat a promise
      2.resolve if user wants to continue
      3.reject if user doesnot want to continue*/

/*1.creat a promise
      2.resolve if user wants to continue
      3.reject if user doesnot want to continue*/

const continueGame = () => {
  return new Promise((resolve, reject) => {
    continueOfNot = confirm("Continue?");
    if (continueOfNot) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

//this function brings it all together
//1.call the enterNumber function

//2.if we have a result, display it

//3.ask the user if they want to continue
//4.if so, call enterNumber again
//enterNumber();
const handleGuess = () => {
  enterNumber() // This returns a Promise
    .then((result) => {
      alert(`Dice: ${result.randomNumber}: you got ${result.points} points`); // When resolve is run, we get the points and the random number

      // Let's ask the user if they want to continue the game
      continueGame().then((result) => {
        if (result) {
          handleGuess(); // If yes, we run handleGuess again
        } else {
          alert("Game ends"); // If no, we show an alert
        }
      });
    })
    .catch((error) => alert(error));
};
handleGuess();
