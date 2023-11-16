// VARIABLES 
let blockquote = document.querySelector('blockquote');
let quote = document.querySelector('p');
let author = document.querySelector('footer');
let btn = document.querySelector('button');

let quotes = [
    {author: "Pierre Corneille", quote:"À vaincre sans péril, on triomphe sans gloire.", url:"https://citations.ouest-france.fr/citation-pierre-corneille/vaincre-sans-peril-triomphe-sans-116483.html"},
    {author: "Oscar Wilde", quote:"La beauté est dans les yeux de celui qui regarde.", url:"https://citations.ouest-france.fr/citation-oscar-wilde/beaute-yeux-celui-regarde-25108.html"},
    {author: "Antoine de Saint-Exupéry", quote:"Fais de ta vie un rêve, et d'un rêve, une réalité.", url:"https://citations.ouest-france.fr/citation-antoine-de-saint-exupery/fais-vie-reve-reve-realite-19201.html"},
    {author: "Gandhi", quote:"Vis comme si tu devais mourir demain. Apprends comme si tu devais vivre toujours.", url:"https://citations.ouest-france.fr/citation-gandhi/vis-comme-devais-mourir-demain-33364.html"},
    {author: "Helen Keller", quote:"Lorsqu'une porte du bonheur se ferme, une autre s'ouvre ; mais parfois on observe si longtemps celle qui est fermée qu'on ne voit pas celle qui vient de s'ouvrir à nous.", url:"https://citations.ouest-france.fr/citation-helen-keller/lorsqu-porte-bonheur-ferme-autre-41453.html"},
    {author: "Friedrich Nietzsche", quote:"La vie sans musique est tout simplement une erreur, une fatigue, un exil.", url:"https://citations.ouest-france.fr/citation-friedrich-nietzsche/vie-sans-musique-simplement-erreur-32031.html"},
    {author: "Albert Einstein", quote:"Un problème sans solution est un problème mal posé.", url:"https://citations.ouest-france.fr/citation-albert-einstein/probleme-sans-solution-probleme-mal-30797.html"},
    {author: "Napoléon Bonaparte", quote:"Quand on veut on peut, quand on peut on doit.", url:"https://citations.ouest-france.fr/citation-napoleon-bonaparte/quand-veut-peut-quand-peut-86143.html"},
    {author: "René Descartes", quote:"Je pense, donc je suis.", url:"https://citations.ouest-france.fr/citation-rene-descartes/pense-donc-suis-6590.html"},
    {author: "Jules César", quote:"Qui veut la paix prépare la guerre.", url:"https://citations.ouest-france.fr/top/citations-celebres/#google_vignette"},
    {author: "George Washington", quote:"Si la liberté d'expression nous est enlevée alors, muets et silencieux, nous pourrons être conduits à l'abattoir comme des brebis.", url:"https://citations.ouest-france.fr/citation-george-washington/liberte-expression-nous-enlevee-alors-124152.html"},
]


// FUNCTIONS
function getRandomQuote() {
    let min = Math.ceil(0);
    let max = Math.floor(quotes.length-1);
    let random = quotes[Math.floor(Math.random() * (max - min + 1) + min)];
    
    blockquote.setAttribute('cite', random.url);
    quote.innerText = random.quote;
    author.innerText = random.author;
}


// CODE
btn.addEventListener('click', getRandomQuote);
getRandomQuote();
