function checkCipher(calculado, esperado) {
    if (calculado === esperado) {
        console.log('Funcionando');
        return true;
    } else {
        console.log('Deu erro ' + calculado + ' não é igual a ' + esperado);
        return false;
    }
}

checkCipher(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 10), 'KLMNOPQRSTUVWXYZABCDEFGHIJ');
checkCipher(encode('abcdefghijklmnopqrstuvwxyz', 3), 'defghijklmnopqrstuvwxyzabc');
checkCipher(encode(' ', 5), ' ');
checkCipher(encode('é', 15), 'é');
checkCipher(encode('Ú', 25), 'Ú');
checkCipher(encode('A', 500), 'G');

checkCipher(decode('KLMNOPQRSTUVWXYZABCDEFGHIJ', 10), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
checkCipher(decode('defghijklmnopqrstuvwxyzabc', 3), 'abcdefghijklmnopqrstuvwxyz');
checkCipher(decode(' ', 5), ' ');
checkCipher(decode('é', 15), 'é');
checkCipher(decode('Ú', 25), 'Ú');
checkCipher(decode('G', 500), 'A');

