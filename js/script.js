//ScrollReveal
ScrollReveal().reveal('.headline',{delay: 2000});

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