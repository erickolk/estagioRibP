
function inverteString(str) {
  let strInvertida = '';

  for ( let i = str.length - 1; i >= 0; i--){
    strInvertida += str[i];
  }

  return strInvertida;
}

console.log(inverteString('jacaMole')); // eloMacaj