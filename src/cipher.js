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
  
  let messageArray = [];
  let messageLetterCode  = [];
  let encodeOffSet = document.getElementById('deslocamento-decifrar').value;
  let messageToEncode = document.getElementById('mensagem-cifrar').value;

  for( i = 0; i < messageToEncode.length; i++) {
  messageLetterCode[i] = (messageToEncode.charCodeAt(i) - 65 + encodeOffSet) % 26 + 65;
    } 

    let newMessage = messageLetterCode.join(' '); 

    let printNewMessage = document.getElementById('mensagem-nova');
   return printNewMessage.innerHTML = newMessage;

}




