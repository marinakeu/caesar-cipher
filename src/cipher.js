var initialPage = document.getElementById('pagina-inicial');
var cipherPage = document.getElementById('pagina-cifrar');
var decodePage = document.getElementById('pagina-decifrar');
var messagePage = document.getElementById('pagina-mensagem');

cipherPage.className = 'hide';
decodePage.className = 'hide';
messagePage.className = 'hide';

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
  
  let messageLetterCode  = [];
  let newLetters = [];
  let encodeOffSet = parseInt(document.getElementById('deslocamento-cifrar').value);
  let messageToEncode = document.getElementById('mensagem-cifrar').value;
  let newMessage = '';


  for( i = 0; i < messageToEncode.length; i++) {
  messageLetterCode[i] = messageToEncode.charCodeAt(i);

  if(messageLetterCode[i] >= 65 && messageLetterCode[i]<= 90) {
  let includeOffset = ((messageLetterCode[i] - 65 + encodeOffSet)%26) + 65;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  console.log(messageLetterCode);
  console.log(includeOffset);
  console.log(newLetters);
  } 
  else if(messageLetterCode[i] >= 97 && messageLetterCode[i] <= 122) {
  let includeOffset = ((messageLetterCode[i] - 97 + encodeOffSet)%26) + 97;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  }
  else {
  newMessage = newMessage + String.fromCharCode(messageLetterCode[i]);
  }

    } 

  let printNewMessage = document.getElementById('mensagem-nova');
   return printNewMessage.innerHTML = newMessage;

}

function decode() {
  decodePage.className = cipherPage.className.replace('show' , 'hide');
  messagePage.className = messagePage.className.replace('hide' , 'show');
  
  let messageLetterCode  = [];
  let newLetters = [];
  let encodeOffSet = parseInt(document.getElementById('deslocamento-decifrar').value);
  let messageToEncode = document.getElementById('mensagem-decifrar').value;
  let newMessage = '';

  for( i = 0; i < messageToEncode.length; i++) {
  messageLetterCode[i] = messageToEncode.charCodeAt(i);

  if(messageLetterCode[i] >= 65 && messageLetterCode[i]<= 90) {
  let includeOffset = ((messageLetterCode[i] - 65 - encodeOffSet)%26) + 65;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  console.log(messageLetterCode);
  console.log(includeOffset);
  console.log(newLetters);
  }
  else if(messageLetterCode[i] >= 97 && messageLetterCode[i] <= 122) {
  let includeOffset = ((messageLetterCode[i] - 97 - encodeOffSet)%26) + 97;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  }
  else {
  newMessage = newMessage + String.fromCharCode(messageLetterCode[i]);
  }
  
  } 

    let printNewMessage = document.getElementById('mensagem-nova');
   return printNewMessage.innerHTML = newMessage;

}

function showInitialPage() {
  messagePage.className = messagePage.className.replace('show' , 'hide');
  initialPage.className = initialPage.className.replace('hide' , 'show  ');
}

