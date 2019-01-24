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
  let newLetters = [];
  let encodeOffSet = parseInt(document.getElementById('deslocamento-cifrar').value);
  let messageToEncode = document.getElementById('mensagem-cifrar').value;


  for( i = 0; i < messageToEncode.length; i++) {
  messageLetterCode[i] = messageToEncode.charCodeAt(i);
  let includeOffset = ((messageLetterCode[i] - 65 + encodeOffSet)%26) + 65;
  newLetters[i] = String.fromCharCode(includeOffset);
  console.log(messageLetterCode);
  console.log(includeOffset);
  console.log(newLetters);
    } 

    let newMessage = newLetters.join(' '); 

    let printNewMessage = document.getElementById('mensagem-nova');
   return printNewMessage.innerHTML = newMessage;

}




