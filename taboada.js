function taboada (numero){
    let conta = 1;
    while (conta < 11){
    let  multiplica = numero * conta;
    console.log (`${numero} vezes ${conta} = ${multiplica}`);
    conta ++
    } 
    
}

taboada (5);

function taboadaComFor (num){
    for (let i = 1; i< 11; i ++){
        let  multiplicado = num * i;
        console.log (`${num} x ${i} = ${multiplicado}`);
    }
}

taboadaComFor (6);
taboadaComFor (30);