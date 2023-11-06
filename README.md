# ASCII-and-Unicode-Character-Detector
This simple web application allows you to determine whether a given character is an ASCII character or a Unicode character. It also provides the ASCII code and Unicode code point for the character.

## How to Use

1. Enter a single character into the input field.
2. Click the "Check" button.
3. The character's ASCII code and Unicode code point will be displayed in the result box.

## ASCII vs. Unicode

ASCII (American Standard Code for Information Interchange) is a character encoding standard that assigns a unique number to each of 128 characters, including letters, numbers, punctuation marks, and control characters. ASCII characters are typically used for text-based applications, such as web pages and email.

Unicode is a more comprehensive character encoding standard that supports a wider range of characters, including symbols, scripts, and emojis. Unicode characters are typically used for applications that require more complex text formatting, such as word processors and graphic design software.

## Project Setup

To set up this project, you will need to create the following files:

* index.html: The HTML file for the web page.
* script.js: The JavaScript file that contains the code for the application.
* style.css: The CSS file that styles the web page.

Place the HTML, JavaScript, and CSS files in the same directory. Then, open the index.html file in your web browser.

## Developer Notes

* The ASCII range is from 0 to 127.
* The Unicode range is from 0 to 1,114,111.
* The codePointAt() method returns the Unicode code point of the character at the specified index.
* The toString(16) method converts the Unicode code point to a hexadecimal string.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this project for any purpose.

