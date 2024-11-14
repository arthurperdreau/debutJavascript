

const couleurTexte = document.querySelector(".bouttonCouleur")
let listeCarct="0123456789ABCDEFJH"
let maCouleur="#"
const leH1 = document.querySelector(".leH1");
couleurTexte.addEventListener("click", ()=>{
    let nbHasard = Math.random()*listeCarct.length;
    let nbArrondi = Math.floor(nbHasard);
    maCouleur = maCouleur+listeCarct[nbArrondi];
    console.log(maCouleur)

    nbHasard = Math.random()*listeCarct.length;
    nbArrondi = Math.floor(nbHasard);
    maCouleur = maCouleur+listeCarct[nbArrondi];
    console.log(maCouleur)

    nbHasard = Math.random()*listeCarct.length;
    nbArrondi = Math.floor(nbHasard);
    maCouleur = maCouleur+listeCarct[nbArrondi];
    console.log(maCouleur)

    nbHasard = Math.random()*listeCarct.length;
    nbArrondi = Math.floor(nbHasard);
    maCouleur = maCouleur+listeCarct[nbArrondi];
    console.log(maCouleur)

    nbHasard = Math.random()*listeCarct.length;
    nbArrondi = Math.floor(nbHasard);
    maCouleur = maCouleur+listeCarct[nbArrondi];
    console.log(maCouleur)

    nbHasard = Math.random()*listeCarct.length;
    nbArrondi = Math.floor(nbHasard);
    maCouleur = maCouleur+listeCarct[nbArrondi];
    console.log(maCouleur)

    leH1.style.color = maCouleur;
})



