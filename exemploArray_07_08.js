const tamanho = 10;

let numeros = [1, 87 , 32, 11, 63, 9, 75, 10, 44, 3];

for(let i = 0; i < tamanho; i++){
    let num = numeros[i];

    if ( num % 2 === 0){
        console.log("O número:" ,num, "é par")
            //PAR
    }
    else{
        console.log("O número "+num+" é impar")
            //IMPAR
    }

}