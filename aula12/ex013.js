var hora = new Date()
var hr = hora.getHours()
console.log(`Agora são exatamente ${hr} horas.`)
if(hr >= 5 && hr < 12){
    console.log('Bom dia!!')
} else if(hr >=12 && hr < 18){
    console.log('Boa tarde!!')

}  else if(hr >= 18 && hr < 24){
    console.log('boa noite!!')
}    else{
       console.log('Boa madrugada')
}