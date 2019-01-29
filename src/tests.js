function checkCipher(calculado, esperado){
if (calculado === esperado) {
    console.log('Eba!');
    return true;
} else {
    console.log('Deu erro ' + calculado + 'não é igual a ' + esperado);
    return false;
}
}

checkCipher(encode('a', 1), 'b');


