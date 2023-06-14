function calculo(){
    var cal = window.document.getElementById('tab')
    var res1 = window.document.getElementById('res')
    var sel = window.document.getElementById('sel')
    if(cal.value.length == 0){
        alert('[ERRO] Digite um número!')
    }else{
        var tab = Number(cal.value)        
        sel.innerHTML = ''
        for(var c = 1;c <= 10;c++){
            var item = document.createElement('option') // cria um tag dentro do html
            item.text = `${tab} x ${c} = ${tab*c}`
            sel.appendChild(item)// exibe a teg feita via js
            
            
            
            // var mul = tab * c
            // res.innerHTML +=`${tab} x ${c} = ${mul}<br/>`
            // console.log('res') esse bloco e outra forma de fazer
            
            
        }
        
        
        
        
    }
    
    
}