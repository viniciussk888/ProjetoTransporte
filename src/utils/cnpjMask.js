export const cnpjMask = value => {
  return value
    //Coloca ponto entre o segundo e o terceiro dígitos
    .replace(/^(\d{2})(\d)/, "$1.$2")
    //Coloca ponto entre o quinto e o sexto dígitos
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    //Coloca uma barra entre o oitavo e o nono dígitos
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    //Coloca um hífen depois do bloco de quatro dígitos
    .replace(/(\d{4})(\d)/, "$1-$2") // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}