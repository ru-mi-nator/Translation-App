var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/shakespeare.json"

btnTranslate.addEventListener("click", clickHandler);

function getTranslationURl(input) {
    return serverURL + "?text=" + input;
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
}

function errorHandler(error){
    console.log("error occured", error);
    alert("There is some problem with the server! Please try again later.")
}