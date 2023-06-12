function clicar() {
    let cx1 = window.document.getElementById('cx1')
    let cx2 = window.document.getElementById('cx2')
    let pas = window.document.getElementById('pas')
    let res = window.document.getElementById('res')
    if (cx1.value.length == 0 || cx2.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Verique os dados!')
    } else {
        res.innerHTML =`Contando... <br/>`
        let i = Number(cx1.value)
        let f = Number(cx2.value)
        let p = Number(pas.value)
        if(i < f){
            for(let c = i;c <= f;c += p){
                res.innerHTML +=`\u{1f449}${c}`
            }
        }else{
            for(let c = i;c>=f;c-=p){
                res.innerHTML +=`\u{1f449}${c}`
            }
        }
    }res.innerHTML +=`\u{1f3c1}`

}