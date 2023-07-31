let num = window.document.getElementById('cx')
let sel = window.document.getElementById('sel')
let res = window.document.getElementById('res')
let vet = []






function adicionar(){
    if(isNumero(num.value) && !inlista(num.value, vet)){
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        sel.appendChild(item)
        res.innerHTML = ''

    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}


 function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true 
    }else{
        return false
    }
 }

 function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){

        return true
    }else{
        return false
    }
 } 

 function finalizar(){
    if(vet.length == 0){
        window.alert('Adicione um valor antes de finalizar!')
    }else{
        let tot = vet.length
        let maior = vet[0]
        let menor = vet[0]
        let soma = 0
        for(let pos in vet){
            soma += vet[pos]
            if(vet[pos]> maior){
                maior = vet[pos]
            }
            if(vet[pos]< menor){
                menor= vet[pos]
            }
            
        }
        

        //res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${tot} números cadastrado <br/>`
        res.innerHTML += `O maior valor informado foi ${maior}.<br/>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br/>`
        res.innerHTML += `A soma de todos os valores informado é ${soma}.<br/>`
        res.innerHTML += `A média dos valores informados é ${soma/tot}.`
    }
 }