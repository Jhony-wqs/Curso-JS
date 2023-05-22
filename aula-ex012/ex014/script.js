function carregando (){
    var dia = window.document.getElementById('dia')
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('foto')
    var hora = new Date()
    var hr = 12//hora.getHours()
    msg.innerHTML =`Agora são ${hr}: horas`
    if(hr > 0 && hr < 12){
        dia.innerHTML = 'Bom dia !!!'
        foto.src = 'imagens/manha.png'
        window.document.body.style.background ="#9B9A79"
        window.document.body.style.color = '#C2CACC'
    } else if(hr >= 12 && hr < 18){
        dia.innerHTML = 'Boa tarde'
        foto.src = 'imagens/tarde.png'
        window.document.body.style.background = '#E68936'
    } else{
        dia.innerHTML = 'Boa noite'
        foto.src = 'imagens/noite.png'
        window.document.body.style.background = '#64514B'
        window.document.body.style.color = '#1F2627'
    }
}