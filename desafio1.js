function exibeMensagem() {
    console.log ('Olá mundo');
}
exibeMensagem ();


function exibeNome(nome) {
    console.log (`Olá ${nome}`);
}
exibeNome('Celinha');

function media (num1,num2,num3){
   let media = ((num1 + num2 + num3)/3);
   console.log (media);
}

media (10,5,5);
media (50,20,20);

function maiorDentreDois (n1, n2){
    if (n1 > n2){
        console.log(`${n1} é o maior número`);
    }else{
        console.log(`${n2} é o maior número`);
    }
}
maiorDentreDois (28, 9);

function aoQuadrado (num){
    console.log (num * num);
}

aoQuadrado (5);
aoQuadrado (10);