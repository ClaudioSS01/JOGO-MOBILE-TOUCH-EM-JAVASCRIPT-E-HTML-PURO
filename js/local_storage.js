function salvar_local(chave,valor_que_vamos_guardar){
    try {
        console.log(`salvando \r\nchave :: "${chave}" \r\nvalor :: "${valor_que_vamos_guardar}"`)
        localStorage.setItem(chave, valor_que_vamos_guardar);

    } catch (error) {
        console.log(`erro ao guardar ${valor_que_vamos_guardar} na chave ${chave} : ${error}`)
    }

}
function ler_local(chave){
    try {
        console.log('lendo: '+chave)
        console.log('resultado da busca: '+localStorage.getItem(chave));
        return localStorage.getItem(chave);
    } catch (error) {
        console.log(`erro ao ler o valor da chave ${chave} : ${error}`)
    }
    
}

function apagar_local(chave){
    try {
        console.log('apagando : '+chave);
        localStorage.removeItem(chave);
    } catch (error) {
        console.log(`erro ao apagar o valor da chave ${chave} : ${error}`)
    } 
}