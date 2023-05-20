var idade = 67
console.log(`Sua idade de ${idade} anos !`)
if(idade < 16){
    console.log('Voçê não vota!!')
} else if(idade < 18 || idade > 65){
    console.log('Voto Opcional!!')
}   else{
    console.log('Voto obrigatório!!')
}