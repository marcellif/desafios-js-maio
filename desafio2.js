function calculaImc (altura, peso){
    let imc = peso / altura;
    return imc;
}

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }

function converteDolar (reais){
   let dolares = reais * 5;
   return parseFloat(dolares);
}
console.log(converteDolar(26));
console.log(converteDolar(25));

function areaEPerimetroRetangular (altura, largura ){
    let area = altura * largura;
    let perimetro = 2*(largura * altura);
    let informacao = `a área do retângulo é ${area}, o seu perímetro é ${perimetro}`;
    console.log (informacao);
}

areaEPerimetroRetangular (8, 9);
areaEPerimetroRetangular (10, 12);

function salaCircular (raio) {
    let pi = parseFloat(3.14);
    let areaCirulo = pi * (raio * raio);
    let perimetroCirculo = 2 * (pi * (raio * raio));
    console.log (`a área do círculo é ${areaCirulo}, o seu perímetro é ${perimetroCirculo}`);
}

salaCircular (5)

