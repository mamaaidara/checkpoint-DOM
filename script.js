/*DEBUT DU SCRIPTE*/
//RECUPERTION DES PREMIERS ELEMENTS ESSENTIELS
var article = document.querySelectorAll('.item');
var parentArticle = document.querySelector('.parent');
var prixTotal = document.getElementById('total-price');


//AUGEMENTATION , DIMINUTION , SUPRESSION ET FAVORITE
for (var i = 0; i < article.length; i++) {


//RECUPERATION DES BOUTONS ET DES PRIX
    let moins = article[i].children[1]; //BOUTONS MOINS
    let plus = article[i].children[3]; //BOUTONS PLUS
    let btnDelete = article[i].children[4]; //BOUTON DELETE
    let articleNum = article[i].children[2]; //NOMRE D'ARTICLE
    let quantity = parseInt(articleNum.innerText); //LA QUANTITE
    let prix = article[i].children[7].children[0]; //PRIX TOTAL DES ARTICLES
    let prixUnit = article[i].children[6]; //UNITAIRE
    let ArticlePrice = parseInt(prixUnit.innerText); //PRIX DE L'ARTICLE EN TEXTE
    let fav = article[i].children[5]; //BOUTON FAVORIS


//DECRIMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR LE PRIX
    moins .addEventListener('click', function () {
        if (quantity > 0) {
            quantity--;
            articleNum.innerHTML = quantity;
            prix.innerText = quantity * ArticlePrice;
            calsum();
        }
    } );


//AUGMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR
    plus.addEventListener('click', function () {
        quantity++; 
        articleNum.innerHTML = quantity;
        prix.innerText = quantity * ArticlePrice;
        calsum();
    });


//SUPPRIMER UN ARTICLE ET METTRE A JOUR 
    btnDelete.addEventListener('click', function (e) {
        e.target.parentElement.remove();
        calsum(); // Mettez a jour le total a chaque suppression
    } );


//AJOUT EN FAVORIS ET CHANGEMENT DE COULEUR
    const color = ['red', 'transparent']; // Liste de couleurs 
    let currentIndex = 0;


    fav.addEventListener('click', function () {
        fav.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        return alert('Added to favorite')
    });
}

//CALCUL DES PRIX TOTAUX 
    function calsum() {
        let total = 0;


        //parcourez chaque article pour calculer le total
        for (var i = 0; i < article.length; i++ ) {
            total += parseInt(article[i].querySelector('.price').innerText.replace('$', '' )) * parseInt(article[i].querySelector('.quantity').innerText);
        }

        prixTotal.textContent = total.toFixed(2) + '$';
    }



                                              /*FIN DU SCRIPT*/

