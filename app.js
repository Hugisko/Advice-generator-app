const dice = document.querySelector('.dice'),
      url = "https://api.adviceslip.com/advice",
      advice_quote = document.querySelector('.advice-quote'),
      advice_id = document.querySelector('.advice-id span');


async function generator() {
    try {
        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error("Network response was not OK");
        }
        const data = await resp.json();
        advice_id.innerText = data.slip.id; 
        advice_quote.innerText = data.slip.advice;  
    } catch (error) {
        console.log(error);
    }
}

dice.addEventListener('click', generator);
