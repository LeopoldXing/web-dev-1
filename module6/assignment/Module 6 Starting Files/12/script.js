/********f************

    Do not alter this comment block.
    Only fill out the information below.

    Competency 12 Javascript Syntax
    Name: Luping Xing
    Date: Mar 8, 2024
    Description: Competency 12 of Assignment 6 - five quotes

*********************/

// array of five quotes
let quotes = [
  '"He who knows others is wise; he who knows himself is enlightened." - Lao Tzu',
  '"The purpose of our lives is to be happy." - Dalai Lama',
  '"The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle." - Steve Jobs',
  '"In the end, it\'s not the years in your life that count. It\'s the life in your years." - Abraham Lincoln',
  '"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well." - Ralph Waldo Emerson'];

// getting body element
let body = document.getElementsByTagName("body")[0];

// insert five p into body
for(let i = 0; i < 5; i++) {
  body.innerHTML += `<p>${quotes[i]}</p>`;
}
