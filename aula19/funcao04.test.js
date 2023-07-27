//Fatorial  e 5! = 5x4x3x2 x1
function fatorial(n) {
    fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
fatorial(5)
console.log(fat)