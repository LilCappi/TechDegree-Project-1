/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const quotes = [
  {quote: 'Sometimes, we have to look beyond what we want and do what is best.', source: 'Piccolo', citation: 'Dragon Ball Z', year: '1999'},
  {quote: `If you can't do something, then don't. Focus on what you can do.`, source: 'Shiroe', citation: 'Log Horizon'},
  {quote: 'The only thing we have to fear is fear itself.', source: 'Franklin D. Roosevelt', year: '1933'},
  {quote: 'The road to success is always under contruction.', source: 'Lily Tomlin', tag: 'Inspirational'},
  {quote: `Don't let yesterday take up too much of today.`, source: 'Will Rogers', tag: 'Motivational'},
  {quote: 'It does not matter how slowly you go as long as you do not stop.', source: 'Confucius'}
]

const intervalID = setInterval(printQuote, 10000); // Random quote displayed every 10 seconds

// randomNumberGenerator takes in a 'value' (quotes array length and '250' for this project)
// and uses that number as the bases for the randomly generated number.

function randomNumberGenerator(value) {
  const randomNumber = Math.floor(Math.random() * value);
  return randomNumber;
}

// getRandomQuote takes in an array (quotes array for this project)
// and returns a random quote chosen by the randomNumberGenerator (using the quotes array length)

function getRandomQuote(arr) {
  return arr[randomNumberGenerator(arr.length)];
}


// printQuote takes the random quote (randomQuote) generated by 'getRandomQuote' function.
// 'htmlString' array takes in elements from randomeQuote and creates an html string.

function printQuote() {
  const randomQuote = getRandomQuote(quotes);
  let htmlString = [
    `<p class="quote">${randomQuote.quote}</p>`,
    `<p class="source">${randomQuote.source}`
  ]

// if statements are placed to check for additional elements within the randomQuote object (citation and year)

  if (randomQuote.citation) {
    htmlString.push(`<span class="citation">${randomQuote.citation}</span>`)
  }
  if (randomQuote.year) {
    htmlString.push(`<span class="year">${randomQuote.year}</span>`)
  }
  if (randomQuote.tag) {
    htmlString.push(`<span class="tag">${randomQuote.tag}</span>`)
  }

  // Final closing '</p>' tag is added and innerHTML is used to push htmlString.join('') to html file

  htmlString.push(`</p>`)
  
  document.getElementById('quote-box').innerHTML = htmlString.join('');

  // *** added randomBackground color to ending of printQuote method to change background each quote cycle

  const randomBackground = `rgb(${randomNumberGenerator(250)}, ${randomNumberGenerator(250)}, ${randomNumberGenerator(250)})`

  document.body.style.backgroundColor = randomBackground; // citation: https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);