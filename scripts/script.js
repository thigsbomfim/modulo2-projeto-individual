const buttEnviar = document.getElementById('bttenviar'); // id do botão input
const select = document.getElementById('select'); // id da seleçao de Base64 ou Cifra de cesar
const mensagem = document.getElementById('mensagem'); // id da caixa de texto
const resMensagem = document.getElementById('res'); // id da caixa de resultado 
const codfDecodf = document.getElementsByClassName('radio'); // id do radio CODIFICAR/DECODIFICAR
const incremento = document.querySelector('#inc') // id do incremento



//---------------------Função CODIFICAR Cifra de cesar---------------------//

function codificarCesar(txt, inc){
    return txt.map((char) => {
        let texto = char.charCodeAt()
        if(texto >= 65 && texto <= 90){
            return String.fromCharCode(((texto - 65 + inc) % 26) + 65)
        } else if(texto >= 97 && texto <= 122){
            return String.fromCharCode(((texto - 97 + inc) % 26) + 97)
        }else {
            return char
        }
    }
    ).join('')
}
                                               


//---------------------Função DECODIFICAR Cifra de cesar---------------------//

function decodificarCesar(txt, inc){
    return txt.map((char) => {
        let texto = char.charCodeAt()
        if(texto >= 65 && texto <= 90){
            return String.fromCharCode(((texto - 90 - inc) % 26) + 90)
        } else if(texto >= 97 && texto <= 122){
            return String.fromCharCode(((texto - 122 - inc) % 26) + 122)
        }else {
            return char
        }
    }
    ).join('')
}



//---------------------------------ALERTA--------------------------------//

function alerta(selectValor){
    if(selectValor === "selecione" ){
        alert('Escolha um tipo de codificação')
    }
    if(mensagem.value === ""){
        alert('Escreva um texto')
        
    }
    
}



//----------------------------Mudança do botão----------------------------//

function mudancaButt(){
    let mudanca1 = codfDecodf[0]
    let mudanca2 = codfDecodf[1]
    if(mudanca1.checked){
        buttEnviar.value = "codificar"
        buttEnviar.style.backgroundColor = "#076307"
        buttEnviar.style.color = "black"
    } if (mudanca2.checked){
        buttEnviar.value = "decodificar"
        buttEnviar.style.backgroundColor = "#791118"
        buttEnviar.style.color = "black"
    }
}



//-----------------Função para Esconder o incremento 1-26-----------------//

function esconderIncremento() {
    let selectValor = select.value;
    if (selectValor === "selecione") {
        document.getElementById('incTxt').style.display = "none"
        document.getElementById('inc').style.display = "none"
        document.getElementById('selecione').style.display = "none"
    }
    if (selectValor === "b64") {
        document.getElementById('incTxt').style.display = "none"
        document.getElementById('inc').style.display = "none"
        document.getElementById('selecione').style.display = "none"
    }
    if (selectValor === "cdc") {
        document.getElementById('incTxt').style.display = "inline"
        document.getElementById('inc').style.display = "inline"
        document.getElementById('selecione').style.display = "inline"
    }
}



                // Evento de click Cifra de Cesar e Base 64
            
buttEnviar.addEventListener("click",(a) => {
    a.preventDefault();
    let selectValor = select.value;
    
//---------------------------Cifra de Cesar---------------------------//

                    // Chamada de CODIFICAÇÃO 
    if(selectValor == "cdc" && codfDecodf[0].checked){
        let msgValor = mensagem.value.toUpperCase()
        msgValor = mensagem.value.split('')
        let incremento1 = parseInt(incremento.value)
        resMensagem.value = codificarCesar(msgValor, incremento1)
    } 
                    // Chamada de DECODIFICAÇÃO
    else if(selectValor == "cdc" && codfDecodf[1].checked){
        let msgValor = mensagem.value.toUpperCase()
        msgValor = mensagem.value.split('')
        let incremento1 = parseInt(incremento.value)
        resMensagem.value = decodificarCesar(msgValor, incremento1)
        
    }
    


//-------------------------------Base 64-------------------------------//

                    // Chamada de CODIFICAÇÃO
    else if (selectValor == "b64" && codfDecodf[0].checked) {
        let encodeb64 = window.btoa(mensagem.value)
        return resMensagem.value = encodeb64

    }
                    // Chamada de DECODIFICAÇÃO 
    else if (selectValor == "b64" && codfDecodf[1].checked){
        let decob64 = window.atob(mensagem.value)
        return resMensagem.value = decob64
    }
})
