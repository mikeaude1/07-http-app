/**
 * @returns {Object} quote information
 */
const fetchQuote = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  let id =[]
  for (const dat of data.results) {
    id.push(  dat);     
    }
    console.log(id);
  return id
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breakingbad App";

  element.innerHTML = "Loading...";

  const quoteLabel = document.createElement("blockquote");
  const authoLabel = document.createElement("h3");
  const nextQuoteButton = document.createElement("button");
  
  nextQuoteButton.innerHTML = `Next Quote`;
  
  const renderQuote = (quote) => {
      for (const dat of quote) {
          console.log(dat.status);
      quoteLabel.innerHTML = dat.name;
      authoLabel.innerHTML = dat.species;
      element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
      }
    };
    
    const quote =  fetchQuote().then(renderQuote)
    console.log(quote);
};


