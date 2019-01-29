var initialPage = document.getElementById('pagina-inicial');
var cipherPage = document.getElementById('cifrar');
var newMessage = document.getElementById('mensagem-cifrada');

cipherPage.className = 'hide';
newMessage.className = 'hide';

function showCipherPage() {
  initialPage.className = 'hide';
  cipherPage.className = cipherPage.className.replace('hide', 'display');
  newMessage.className = newMessage.className.replace('hide', 'display');
}

function saveEncode() {
  const encodeOffset = parseInt(document.getElementById('deslocamento').value);
  const messageToEncode = document.getElementById('mensagem').value;
  let cipher = encode(messageToEncode, encodeOffset);

  let printNewMessage = document.getElementById('mensagem-nova');
  printNewMessage.innerHTML = cipher;
}

function encode(messageToEncode, encodeOffset) {
  let messageLetterCode = [];
  let newMessage = '';

  for (i = 0; i < messageToEncode.length; i++) {
    messageLetterCode[i] = messageToEncode.charCodeAt(i);

    if (messageLetterCode[i] >= 65 && messageLetterCode[i] <= 90) {
      let includeOffset = (messageLetterCode[i] - 65 + encodeOffset % 26 + 26) % 26 + 65;
      newMessage = newMessage + String.fromCharCode(includeOffset);
      console.log(messageLetterCode);
      console.log(encodeOffset);
      console.log(includeOffset);
      console.log(newMessage);
    }
    else if (messageLetterCode[i] >= 97 && messageLetterCode[i] <= 122) {
      let includeOffset = (messageLetterCode[i] - 97 + encodeOffset % 26 + 26) % 26 + 97;
      newMessage = newMessage + String.fromCharCode(includeOffset);
    }
    else {
      newMessage = newMessage + String.fromCharCode(messageLetterCode[i]);
    }

  }
  return newMessage;

}

function saveDecode() {
  const decodeOffSet = parseInt(document.getElementById('deslocamento').value);
  const messageToDecode = document.getElementById('mensagem').value;
  let decipher = decode(messageToDecode, decodeOffSet);

  let printNewMessage = document.getElementById('mensagem-nova');
  printNewMessage.innerHTML = decipher;
}

function decode(messageToDecode, decodeOffSet) {
  let messageLetterCode = [];
  let newMessage = '';

  for (i = 0; i < messageToDecode.length; i++) {
    messageLetterCode[i] = messageToDecode.charCodeAt(i);
    console.log(decodeOffSet);

    if (messageLetterCode[i] >= 65 && messageLetterCode[i] <= 90) {
      let includeOffset = (messageLetterCode[i] - 65 - decodeOffSet % 26 + 26) % 26 + 65;
      newMessage = newMessage + String.fromCharCode(includeOffset);
      console.log(messageLetterCode);
      console.log(decodeOffSet);
      console.log(includeOffset);
      console.log(newMessage);
    }
    else if (messageLetterCode[i] >= 97 && messageLetterCode[i] <= 122) {
      let includeOffset = (messageLetterCode[i] - 97 - decodeOffSet % 26 + 26) % 26 + 97;
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
  cipherPage.className = cipherPage.className.replace('display', 'hide');
  newMessage.className = newMessage.className.replace('display', 'hide');
  initialPage.className = 'show';
}

