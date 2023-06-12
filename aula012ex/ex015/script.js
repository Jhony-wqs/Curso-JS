function verificar(){
   var data = new Date()
   var anuAtual = data.getFullYear()
   var anoNasc = window.document.getElementById('txt')
   var res = window.document.getElementById('res')
   if (anoNasc.value.length == 0 || anoNasc > anuAtual){
    window.alert('[ERRO] Verifique os dados e tente novamente!')

   }else{
        var sexo = window.document.getElementsByName('sexm')
        var idade = anuAtual - Number(anoNasc.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked) {
            genero = 'HOMEM'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','foto-m-1.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','foto-m-2.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','foto-m-3.png')
            }else {
                //idoso
                img.setAttribute('src','foto-m-4.png')
            }
        }else if(sexo[1].checked){
            genero = 'MULHER'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','foto-f-1.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','foto-f-2.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','foto-f-3.png')
            }else {
                //idoso
                img.setAttribute('src','foto-f-4.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `detectamos  ${genero} com idade ${idade}`
        res.appendChild(img) 
   }
        
   
}
