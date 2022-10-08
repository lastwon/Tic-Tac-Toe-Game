// function turning on change name overlay when user clicks edit
function editPlayerName(event) {
    editedPlayer = +event.target.dataset.playerid;
    backdrop.style.display = "block";
    overlay.style.display = "block";
}

// cancel button function on overlay
function cancelButtonClicked() {
    backdrop.style.display = "none";
    overlay.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutput.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

// save name function and validation
function saveEnteredName(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim();

    if (enteredPlayerName === "") {
        event.target.firstElementChild.classList.add("error");
        errorsOutput.textContent = "Please enter valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;       // h3 element player name

    players[editedPlayer - 1].name = enteredPlayerName;  // player name set in object

    cancelButtonClicked();      // call function to reset
}