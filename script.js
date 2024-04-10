function inverterTexto() {
    
    let inputText = document.getElementById("inputTextarea").value.trim();


    let wordsArray = inputText.split(/\s+/);


    let reversedWordsArray = wordsArray.reverse();

   
    let invertedText = reversedWordsArray.join(' ');

    
    document.getElementById("outputTextarea").value = invertedText;
}
