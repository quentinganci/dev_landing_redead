//Animations
ScrollReveal().reveal('.headline', {
    easing: 'ease-in',
    duration: 500,
    reset: true
});

ScrollReveal().reveal('.subtitle', {
    easing: 'ease-in',
    duration: 500,
    reset: true
});

ScrollReveal().reveal('.my-cta', {
    easing: 'ease-in',
    duration: 500,
    reset: true
});

ScrollReveal().reveal('#scrollPicto', {
    easing: 'ease-in',
    duration: 500,
    reset: true
});

ScrollReveal().reveal('#scrollPicto', {
    easing: 'ease-in',
    duration: 500,
    reset: true
});

ScrollReveal().reveal('#cortisol', {
    easing: 'ease-in',
    origin: 'left',
    distance: '50px',
    duration: 500,
    delay: 400,
    reset: true
});

ScrollReveal().reveal('#francais', {
    easing: 'ease-in',
    origin: 'right',
    distance: '50px',
    scale: 1,
    duration: 500,
    delay: 700,
    reset: true
});

ScrollReveal().reveal('.media-is-left', {
    easing: 'ease-in',
    origin: 'bottom',
    distance: '50px',
    scale: 1,
    duration: 500,
    delay: 900,
    reset: true
});

ScrollReveal().reveal('.media-is-right', {
    easing: 'ease-in',
    origin: 'bottom',
    distance: '50px',
    scale: 1,
    duration: 500,
    delay: 900,
    reset: true
});


ScrollReveal().reveal('.campain-column', {
    easing: 'ease-in',
    distance: '50px',
    scale: 2,
    duration: 500,
    delay: 990,
    reset: true
});

ScrollReveal().reveal('.campagne-headline', {
    easing: 'ease-in',
    distance: '50px',
    scale: 2,
    duration: 500,
    delay: 990,
    reset: true
});

ScrollReveal().reveal('.orange-center', {
    easing: 'ease-in',
    origin: 'bottom',
    distance: '20px',
    scale: 1,
    duration: 500,
    delay: 500,
    reset: true
});

ScrollReveal().reveal('.is-one-fifths', {
    easing: 'ease-in',
    origin: 'top',
    distance: '30px',
    scale: 1,
    duration: 500,
    delay: 500,
    reset: true
});

ScrollReveal().reveal('#inspiration h2', {
    easing: 'ease-in',
    origin: 'top',
    distance: '30px',
    scale: 1,
    duration: 500,
    delay: 500,
    reset: true
});

ScrollReveal().reveal('.is-1', {
    easing: 'ease-in',
    interval: 200,
    duration: 500,
    reset: true
});

ScrollReveal().reveal('#inspiration div article div', {
    easing: 'ease-in',
    interval: 200,
    duration: 500,
    reset: true
});

ScrollReveal().reveal('.networks h2', {
    easing: 'ease-in',
    distance: '50px',
    scale: 2,
    duration: 500,
    delay: 500,
    reset: true
});

ScrollReveal().reveal('.is-one-fifth', {
    easing: 'ease-in',
    distance: '50px',
    scale: 1,
    duration: 500,
    delay: 900,
    reset: true
});

ScrollReveal().reveal('.hashtag', {
    easing: 'ease-in',
    distance: '50px',
    scale: 2,
    duration: 500,
    delay: 500,
    reset: true
});

ScrollReveal().reveal('.my-container', {
    easing: 'ease-in',
    origin: 'bottom',
    distance: '20px',
    scale: 1,
    duration: 500,
    delay: 500,
    reset: true
});

ScrollReveal().reveal('section.association h2', {
    easing: 'ease-in',
    duration: 500,
    reset: true
});

ScrollReveal().reveal('section.association p', {
    easing: 'ease-in',
    duration: 500,
    reset: true
});
//END OF ANIMATION



document.getElementById('photo').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '<a href="https://www.offi.fr/expositions-musees/photographie.html" class="column" target="_blank">Exposition de photos</a><a href="https://www.kazoart.com/fr/45-photographie" class="column" target="_blank">Achat de photos d\'art</a><a href="https://www.youtube.com/watch?v=qAen30AFzNE" class="column" target="_blank">Vidéo sur la photo</a>';
};
document.getElementById('peinture').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '<a href="https://www.offi.fr/expositions-musees/beaux-arts.html" class="column" target="_blank">Exposition de peintures</a><a href="https://www.artsper.com/fr/oeuvres-d-art-contemporain/peinture" class="column" target="_blank">Achat de peintures</a><a href="https://www.youtube.com/watch?v=bXQiVJydvDM" class="column" target="_blank">Vidéo sur la peinture</a>';
};
document.getElementById('cinema').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '<a href="http://www.allocine.fr/" class="column" target="_blank">Séances de cinéma</a><a href="https://www.fnac.com/video.asp?awc=12665_1575907359_119da06b6dfee0e43d7193f357a1b078&ectrans=1&Origin=Awin101248" class="column" target="_blank">Achat de dvds</a><a href="https://www.kazoart.com/blog/le-cinema-dans-lhistoire-de-lart/" class="column" target="_blank">Article sur le cinéma</a>';
};
document.getElementById('danse').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '';
};
document.getElementById('theatre').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '';
};
document.getElementById('scene').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '<a href="https://www.fnacspectacles.com/place-spectacle/humour/humour-7110577968918422048-lt.htm" class="column" target="_blank">Spéctacle d\'humour</a>';
};
document.getElementById('musique').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '<a href="https://philharmoniedeparis.fr/fr/musee-de-la-musique/expositions" class="column" target="_blank">Exposition sur la musique</a><a href="https://www.youtube.com/playlist?list=PLKxspWK8-EBAG02ZcuFVMnDzyEbmPXyvI" class="column" target="_blank">Musique relaxante</a><a href="https://www.spotify.com/fr/" class="column" target="_blank">Plateforme de musique en ligne</a>';
};
document.getElementById('architecture').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '<a href="https://www.offi.fr/expositions-musees/architecture-design.html" class="column" target="_blank">Exposition architecture</a><a href="https://www.youtube.com/watch?v=jMOzC2U8zfw" class="column" target="_blank">Vidéo sur l\'architecture</a><a href="https://www.parisinfo.com/visiter-a-paris/monuments/monuments-incontournables" class="column" target="_blank">Visiter des monuments d\'architectures célèbres</a>';
};
document.getElementById('litterature').onclick = function() {
    document.getElementById('boite').innerHTML = '';
    document.getElementById('boite').innerHTML = '<a href="http://www.parismusees.paris.fr/fr/activites/conferences-litteraires" class="column" target="_blank">Conférence littéraire</a><a href="https://www.52we.com/fr/guides/week-end-au-coeur-du-paris-litteraire.html" class="column" target="_blank">Evenements littéraires</a><a href="https://www.pagesjaunes.fr/annuaire/paris-75/livres-anciens" class="column" target="_blank">Adresses de librairies anciennes</a>';
};


document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
        $notification = $delete.parentNode;
        $delete.addEventListener('click', () => {
            $notification.parentNode.removeChild($notification);
        });
    });
});

// Cookie, inject in javascript
$('body').append(
            '<section class="cookie">\n' +
            '        <div class="notification cookie_alert">\n' +
            '            <button class="delete"></button>\n' +
            '            En poursuivant votre navigation, vous acceptez l’utilisation des cookies permettant\n' +
            '            de réaliser des études d’audience et suivis facebook et twtiter.\n' +
            '            <a target="_blank" href="mentions-legales.html">En savoir plus</a>\n' +
            '                <div class="btn-cookie-container">\n' +
            '                    <button id="#btn-cookie" class="button is-success is-rounded button-cookie">\n' +
            '                        <span>OK</span>\n' +
            '                    </button>\n' +
            '                </div>\n' +
            '\n' +
            '        </div>\n' +
            '    </section>'
        );

// Disable cookie on click ok
$( ".btn-cookie-container" ).click(function() {
    $( ".cookie" ).hide();
});


