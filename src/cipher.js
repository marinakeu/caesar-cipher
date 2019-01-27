var initialPage = document.getElementById('pagina-inicial');
var cipherPage = document.getElementById('pagina-cifrar');
var decodePage = document.getElementById('pagina-decifrar');
var cipherMessage = document.getElementById('mensagem-cifrada');
var decodeMessage = document.getElementById('mensagem-decifrada');

cipherPage.className = 'hide';
decodePage.className = 'hide';
cipherMessage.className = 'hide';
decodeMessage.className = 'hide';

function showEncodePage() {
  initialPage.className = 'hide';
  decodeMessage.className = 'hide';
  decodePage.className = 'hide';
  cipherPage.className = 'show';
}

function showDecodePage() {
  initialPage.className = 'hide';
  cipherMessage.className = 'hide';
  cipherPage.className = 'hide';
  decodePage.className = 'show';
  }
  
function encode() {
  cipherMessage.className = 'show';
  
  let messageLetterCode  = [];
  let encodeOffSet = parseInt(document.getElementById('deslocamento-cifrar').value);

  let messageToEncode = document.getElementById('mensagem-cifrar').value;
  console.log(messageToEncode);

  let newMessage = '';

  for( i = 0; i < messageToEncode.length; i++) {
  messageLetterCode[i] = messageToEncode.charCodeAt(i);
  let includeOffset = (messageLetterCode[i] - 32 + encodeOffSet%223 + 223)%223 + 32;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  console.log(messageLetterCode);
  console.log(encodeOffSet);
  console.log(includeOffset);
  console.log(newMessage);
   } 

  let printNewMessage = document.getElementById('mensagem-nova-cifrada');
   return printNewMessage.innerHTML = newMessage;

}

function decode() {
  decodeMessage.className = 'show';
  
  let messageLetterCode  = [];
  let decodeOffSet = parseInt(document.getElementById('deslocamento-decifrar').value);
  let messageToDecode = document.getElementById('mensagem-decifrar').value;
  
  let newMessage = '';

  for( i = 0; i < messageToDecode.length; i++) {
  messageLetterCode[i] = messageToDecode.charCodeAt(i);
  console.log(decodeOffSet);
  let includeOffset = (messageLetterCode[i] - 32 - (decodeOffSet%223) + 223)%223 + 32;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  console.log(messageLetterCode);
  console.log(decodeOffSet);
  console.log(includeOffset);
  console.log(newMessage);
  } 

    let printNewMessage = document.getElementById('mensagem-nova-decifrada');
   return printNewMessage.innerHTML = newMessage;

}

function showInitialPage() {
  cipherPage.className = 'hide';
  decodePage.className = 'hide';
  cipherMessage.className = 'hide';
  decodeMessage.className = 'hide';
  initialPage.className = 'show';
}

