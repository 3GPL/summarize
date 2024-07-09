// Define a translation object
const translationDict = {
    "hello": "hola",
    "world": "mundo",
    "javascript": "JavaScript",
    "translator": "traductor",
    "example": "ejemplo"
};

// Function to translate text
function translate() {
    let inputText = document.getElementById("inputText").value;
    let words = inputText.toLowerCase().split(" ");
    let translatedWords = [];

    for (let word of words) {
        let translatedWord = translationDict[word] || word;
        translatedWords.push(translatedWord);
    }

    let translatedSentence = translatedWords.join(" ");
    document.getElementById("output").textContent = translatedSentence;
}
