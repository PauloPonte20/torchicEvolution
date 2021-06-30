let img = document.querySelector("img");
const torchic = document.querySelector("#torchic");
const combusken = document.querySelector("#combusken");
const blaziken = document.querySelector("#blaziken");
const megaBlaziken = document.querySelector("#megaBlaziken");
let status = document.getElementById('status');

torchic.addEventListener("click", () => {
    img.src = '/mypoke/img/torchic.png';
    status.textContent = 'Torchic: Basic Form and Chick Pokémon'
})

combusken.addEventListener("click", () => {
    img.src = '/mypoke/img/combusken.png';
    status.textContent = 'Combusken: Evolution at level 16, Young Fowl Pokémon'
})

blaziken.addEventListener("click", () => {
    img.src = '/mypoke/img/blaziken.png';
    status.textContent = 'Blaziken: Evolution at level 36, Blaze Pokémon'
})

megaBlaziken.addEventListener("click", () => {
    img.src = '/mypoke/img/megaBlaziken.png';
    status.textContent = 'Using Mega Stone Blazikenite, Blaze Pokémon'
});