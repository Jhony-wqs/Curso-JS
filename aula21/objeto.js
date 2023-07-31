let amigo = {nome:'jhony',
sexo:'masculino',
altura:1.74,
peso:65,
engordar(p=0){//função dentro de um objeto
    'engordou'
    this.peso+=p// this para se referir a o objeto que esta modificando ou concatenando 
}}
amigo.engordar(2)//chamado com paramentro para função dentro do objeto
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)