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
  decodePage.className = decodePage.className.replace('show' , 'hide');
  cipherPage.className = cipherPage.className.replace('hide' , 'show');
}

function showDecodePage() {
  initialPage.className = 'hide';
  cipherMessage.className = 'hide';
  cipherPage.className = cipherPage.className.replace('show' , 'hide');
  decodePage.className = decodePage.className.replace('hide' , 'show');
  }
  
function encode() {
  cipherMessage.className = cipherMessage.className.replace('hide' , 'show');
  
  let messageLetterCode  = [];
  let encodeOffSet = parseInt(document.getElementById('deslocamento-cifrar').value);

  let messageToEncode = document.getElementById('mensagem-cifrar').value;
  console.log(messageToEncode);
  messageToEncode = messageToEncode.replace(/[ÀÁÂÃÄÅ]/g,'A');
  messageToEncode = messageToEncode.replace(/[àáâãäå]/g,'a');
  messageToEncode = messageToEncode.replace(/[ÈÉÊË]/g,'E');
  messageToEncode = messageToEncode.replace(/[éèêë]/g,'e');
  messageToEncode = messageToEncode.replace(/[ÍÌÎÏ]/g,'I');
  messageToEncode = messageToEncode.replace(/[íìîï]/g,'i');
  messageToEncode = messageToEncode.replace(/[ÓÒÕÖÔ]/g,'O');
  messageToEncode = messageToEncode.replace(/[óòõôö]/g,'o');
  messageToEncode = messageToEncode.replace(/[ÚÙÛÜ]/g,'U');
  messageToEncode = messageToEncode.replace(/[úùûü]/g,'u');
  messageToEncode = messageToEncode.replace(/[Ç]/g,'C');
  messageToEncode = messageToEncode.replace(/[ç]/g,'c');

  let newMessage = '';
console.log(messageToEncode);

  for( i = 0; i < messageToEncode.length; i++) {
  messageLetterCode[i] = messageToEncode.charCodeAt(i);

  if(messageLetterCode[i] >= 65 && messageLetterCode[i]<= 90) {
  let includeOffset = (messageLetterCode[i] - 65 + encodeOffSet%26 + 26)%26 + 65;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  console.log(messageLetterCode);
  console.log(encodeOffSet);
  console.log(includeOffset);
  console.log(newMessage);
  } 
  else if(messageLetterCode[i] >= 97 && messageLetterCode[i] <= 122) {
  let includeOffset = (messageLetterCode[i] - 97 + encodeOffSet%26 + 26)%26 + 97;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  }
  else {
  newMessage = newMessage + String.fromCharCode(messageLetterCode[i]);
  }

    } 

  let printNewMessage = document.getElementById('mensagem-nova-cifrada');
   return printNewMessage.innerHTML = newMessage;

}

function decode() {
  decodeMessage.className = decodeMessage.className.replace('hide' , 'show');
  
  let messageLetterCode  = [];
  let htmlDecodeOffSet = parseInt(document.getElementById('deslocamento-decifrar').value);
  let decodeOffSet = htmlDecodeOffSet * (-1);
  let messageToDecode = document.getElementById('mensagem-decifrar').value;
  messageToDecode = messageToDecode.replace(/[ÀÁÂÃÄÅ]/g,'A');
  messageToDecode = messageToDecode.replace(/[àáâãäå]/g,'a');
  messageToDecode = messageToDecode.replace(/[ÈÉÊË]/g,'E');
  messageToDecode = messageToDecode.replace(/[éèêë]/g,'e');
  messageToDecode = messageToDecode.replace(/[ÍÌÎÏ]/g,'I');
  messageToDecode = messageToDecode.replace(/[íìîï]/g,'i');
  messageToDecode = messageToDecode.replace(/[ÓÒÕÖÔ]/g,'O');
  messageToDecode = messageToDecode.replace(/[óòõôö]/g,'o');
  messageToDecode = messageToDecode.replace(/[ÚÙÛÜ]/g,'U');
  messageToDecode = messageToDecode.replace(/[úùûü]/g,'u');
  messageToDecode = messageToDecode.replace(/[Ç]/g,'C');
  messageToDecode = messageToDecode.replace(/[ç]/g,'c');
  let newMessage = '';

  for( i = 0; i < messageToDecode.length; i++) {
  messageLetterCode[i] = messageToDecode.charCodeAt(i);
  console.log(decodeOffSet);

  if(messageLetterCode[i] >= 65 && messageLetterCode[i]<= 90) {
  let includeOffset = (messageLetterCode[i] - 65 + (decodeOffSet%26) + 26)%26 + 65;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  console.log(messageLetterCode);
  console.log(decodeOffSet);
  console.log(includeOffset);
  console.log(newMessage);
  }
  else if(messageLetterCode[i] >= 97 && messageLetterCode[i] <= 122) {
  let includeOffset = (messageLetterCode[i] - 97 + (decodeOffSet%26) + 26)%26 + 97;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  }
  else {
  newMessage = newMessage + String.fromCharCode(messageLetterCode[i]);
  }
  
  } 

    let printNewMessage = document.getElementById('mensagem-nova-decifrada');
   return printNewMessage.innerHTML = newMessage;

}

function showInitialPage() {
  cipherPage.className = cipherPage.className.replace('show' , 'hide');
  decodePage.className = decodePage.className.replace('show' , 'hide');
  cipherMessage.className = cipherMessage.className.replace('show' , 'hide');
  decodeMessage.className = decodeMessage.className.replace('show' , 'hide');
  initialPage.className = initialPage.className.replace('hide' , 'show  ');
}

