// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageTOffset ||
  this.document.documentElement.scrollTop;

  if(scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
  } else {
    navbar.style.top="0";
  }
  lastScrollTop = scrollTop;
});


// TYPED
var typed = new Typed('.typed', {
  strings : ["Bonjour à tous et bienvenue sur ma page, Je me présente je m'appelle Mélissa", "Étudiante motivée en reconversion professionnelle à la suite d'une reconnaissance de la qualité de travailleur handicapé (RQTH). Je suis actuellement à la recherche d'une entreprise pour un contrat en alternance avec Openclassrooms formation développeur Web – Titre RNCP – niveau BAC +2 de 12 mois au rythme de 4-5 jours entreprise, 1-2 jours formation. Dotée d'une grande capacité d'adaptation, je sais me montrer proactive et digne de confiance dans la réalisation de mes missions."],
  typeSpeed: 25,
});