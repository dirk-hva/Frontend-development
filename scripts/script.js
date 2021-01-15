// JavaScript Document

var body = document.querySelector('body');

if (body.classList.contains('home')) {

  const button = document.querySelector('#button');
  const body = document.querySelector('#body');

  function laadMeer() {
    body.classList.add('view-more');
  }
  button.addEventListener('click', laadMeer);
}


if (body.classList.contains('pagina2')) {

}
