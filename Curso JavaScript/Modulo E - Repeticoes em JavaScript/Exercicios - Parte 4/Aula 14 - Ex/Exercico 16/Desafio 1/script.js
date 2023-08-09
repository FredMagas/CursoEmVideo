function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! CONSIDERANDO PASSO = 1')
            p= 1
        }
        var quantidadeContada = 0
        if (i < f) {
            // Contagem Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}` 
                quantidadeContada++
            }
        } else {
            // Contagem Decrescente
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
                quantidadeContada++
            }
        }
        res.innerHTML += `\u{1f3c1} <br>`
        res.innerHTML += ` <br>Essa é a quantidade de números contados de ${i} até ${f} com passo de ${p}: ${quantidadeContada}`
    }

}



