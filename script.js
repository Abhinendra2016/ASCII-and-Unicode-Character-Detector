document.addEventListener("DOMContentLoaded", function () {
    const inputChar = document.getElementById("inputChar");
    const result = document.getElementById("result");
    const checkButton = document.getElementById("checkButton");

    function checkCharacter() {
        const char = inputChar.value;

        if (char.length === 1) {
            result.textContent = `Character: ${char}`;
            result.textContent += `\nASCII code: ${char.charCodeAt(0)}`;
            result.textContent += `\nUnicode code point: U+${char.codePointAt(0).toString(16)}`;
        } else {
            result.textContent = "Enter a single character.";
        }
    }

    checkButton.addEventListener("click", checkCharacter);
});
