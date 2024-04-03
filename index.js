//Gerador de senhas

function gerarSenha(comprimento){
    let caracteres = 
    'ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789!@#$%¨&*()-_/*-+<>?{}[]~^'
    
    let senha = ''

    for(let i = 0; i < comprimento; i++){
        let randomIndex = Math.floor
        (Math.random() * caracteres.length)
        senha += caracteres[randomIndex]
    }

    return senha;

}

console.log(gerarSenha(12));


