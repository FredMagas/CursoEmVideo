function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    var minFormat = min < 10 ? `0${min}` : min

    msg.innerHTML = `Agora são ${hora}:${minFormat} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#ffdfb5'
    } else if (hora >=12 && hora <= 17) {
        img.src = 'tarde.png'
        document.body.style.background = '#a96e64'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0e1b21'
    }

    if (min < 10) {

    }
}

