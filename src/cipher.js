var initialPage = document.getElementById('pagina-inicial');
var cipherPage = document.getElementById('pagina-cifrar');
var decodePage = document.getElementById('pagina-decifrar');
var messagePage = document.getElementById('pagina-mensagem');

cipherPage.className = 'hide';
decodePage.className = 'hide';
messagePage.className = 'hide';

function showInitialPage() {
  messagePage.className = messagePage.className.replace('hide' , 'show');
  initialPage.className = initialPage.className.replace('show' , 'hide');
}

function showEncodePage() {
  initialPage.className = 'hide';
  cipherPage.className = cipherPage.className.replace('hide' , 'show');
}

function showDecodePage() {
  initialPage.className = 'hide';
  decodePage.className = decodePage.className.replace('hide' , 'show');
  }
  
function encode() {
  cipherPage.className = cipherPage.className.replace('show' , 'hide');
  messagePage.className = messagePage.className.replace('hide' , 'show');
  let messageToEncode = document.getElementById('mensagem-cifrar').nodeValue;

}




