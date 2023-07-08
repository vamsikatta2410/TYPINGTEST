let resetBtnE1 = document.getElementById("resetBtn");
let submitBtnE1 = document.getElementById("submitBtn")
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInpute1 = document.getElementById("quoteInput");
let timerE1 = document.getElementById("timer")
let errormessage = document.getElementById("result")
let spinnerEl = document.getElementById("spinner");

function displayrandomquote(jsonData) {
    console.log(jsonData)
    let value = jsonData.content;
    quoteDisplay.textContent = value


}

function method() {
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            quoteDisplay.textContent = jsonData.content
            displayrandomquote(jsonData)

        })
}
method()


let intervalId = null

function counter() {
    let counter = 0;
    intervalId = setInterval(function() {
        timerE1.textContent = counter + "seconds"
        counter = counter + 1;
    }, 1000);


}

function submit() {
    console.log(quoteInpute1.value)
    console.log(quoteDisplay.textContent)
    if (quoteInpute1.value === quoteDisplay.textContent) {
        errormessage.textContent = "you typed in" + intervalId + "seconds"
    } else {
        errormessage.textContent = "you enter the incorrect"
    }

}
resetBtnE1.addEventListener("click", function() {
    method()
    spinnerEl.classList.remove("d-none");
    counter()
})
submitBtnE1.addEventListener("click", function() {
    spinnerEl.classList.add("d-none");

    submit()
    clearInterval(intervalId);


})