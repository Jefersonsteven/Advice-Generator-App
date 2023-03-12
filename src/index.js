// !
const app = document.querySelector('#app');

// * contruccion de elemento
const container = document.createElement('div');
container.className = 'card';
app.appendChild(container);

const card = document.querySelector('.card');

const span = document.createElement('span');
span.classList.add('number')
span.textContent = `ADVICE #001`
const h2 = document.createElement('h2');
h2.textContent = `
"It is easy to sit up and take notice,
what's difficult is getting up and taking action"
`;
h2.classList.add('advice');


const div = document.createElement('div');
div.classList.add('divider');
const div2 = document.createElement('div');
div2.classList.add('random-tip');
const img = document.createElement('img');
img.src = '../images/pattern-divider-mobile.svg'
const img2 = document.createElement('img');
img2.src = '../images/icon-dice.svg'
const div3 = document.createElement('div');
div.append(div3, img);
div2.appendChild(img2);

card.append(span, h2, div, div2);

// !
const URL_API = 'https://api.adviceslip.com/advice';
// const URL_API = 'https://pokeapi.co/api/v2/pokemon/ditto';

const numberAdvice = document.getElementsByClassName('number');
const advice = document.getElementsByClassName('advice');

const fetchData = (urlApi) => {
  const response = fetch(urlApi);
  return response;
}

const randomTips = async () => {
  await fetchData(URL_API)
    .then( response => response.json())
    .then(({ slip }) => {
      numberAdvice[0].textContent = `ADVICE #${slip.id}`
      advice[0].textContent = slip.advice
    })
}

const random = document.querySelector('.random-tip');

random.addEventListener('click', randomTips);












