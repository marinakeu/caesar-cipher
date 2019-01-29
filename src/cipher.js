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

function saveEncode() {
 const encodeOffset = parseInt(document.getElementById('deslocamento-cifrar').value);
  const messageToEncode = document.getElementById('mensagem-cifrar').value;
  let cipher = encode(messageToEncode, encodeOffset);
  
  let printNewMessage = document.getElementById('mensagem-nova-cifrada');
  printNewMessage.innerHTML = cipher;
}
  
function encode(messageToEncode, encodeOffset) {
  cipherMessage.className = 'show';
  
  let messageLetterCode  = [];
   let newMessage = '';

  for( i = 0; i < messageToEncode.length; i++) {
  messageLetterCode[i] = messageToEncode.charCodeAt(i);

  if(messageLetterCode[i] >= 65 && messageLetterCode[i]<= 90) {
  let includeOffset = (messageLetterCode[i] - 65 + encodeOffset%26 + 26)%26 + 65;
  newMessage = newMessage + String.fromCharCode(includeOffset);
  console.log(messageLetterCode);
  console.log(encodeOffset);
  console.log(includeOffset);
  console.log(newMessage);
  } 
  else if(messageLetterCode[i] >= 97 && messageLetterCode[i] <= 122) {
    let includeOffset = (messageLetterCode[i] - 97 + encodeOffset%26 + 26)%26 + 97;
    newMessage = newMessage + String.fromCharCode(includeOffset);
  }
  else {
    newMessage = newMessage + String.fromCharCode(messageLetterCode[i]);
  }

  }
  return newMessage;

}

function saveDecode(){
  const decodeOffSet = parseInt(document.getElementById('deslocamento-decifrar').value);
  const messageToDecode = document.getElementById('mensagem-decifrar').value;
  let decipher = decode(messageToDecode, decodeOffSet);

  let printNewMessage = document.getElementById('mensagem-nova-decifrada');
  printNewMessage.innerHTML = decipher;
}

function decode(messageToDecode, decodeOffSet) {
  decodeMessage.className = 'show';
  
  let messageLetterCode  = [];
  let newMessage = '';

  for( i = 0; i < messageToDecode.length; i++) {
  messageLetterCode[i] = messageToDecode.charCodeAt(i);
  console.log(decodeOffSet);
  
  if(messageLetterCode[i] >= 65 && messageLetterCode[i]<= 90) {
    let includeOffset = (messageLetterCode[i] - 65 - decodeOffSet%26 + 26)%26 + 65;
    newMessage = newMessage + String.fromCharCode(includeOffset);
    console.log(messageLetterCode);
    console.log(decodeOffSet);
    console.log(includeOffset);
    console.log(newMessage);
    } 
    else if(messageLetterCode[i] >= 97 && messageLetterCode[i] <= 122) {
      let includeOffset = (messageLetterCode[i] - 97 - decodeOffSet%26 + 26)%26 + 97;
      newMessage = newMessage + String.fromCharCode(includeOffset);
    }
    else {
      newMessage = newMessage + String.fromCharCode(messageLetterCode[i]);
    }
  } 
console.log(newMessage);
    
return newMessage;

}

function showInitialPage() {
  cipherPage.className = 'hide';
  decodePage.className = 'hide';
  cipherMessage.className = 'hide';
  decodeMessage.className = 'hide';
  initialPage.className = 'show';
}

