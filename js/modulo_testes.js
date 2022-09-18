console.log('modolo testes iniciado')
modo_testes = false;
if(modo_testes == true){
    console.log('modulo testes ativado pagina sera recarregada em 20 segundos')
}else{
    console.log('modulo testes desativado, a pagina NAO sera recarregada')
}

setInterval(()=>{
    if(modo_testes == true){
        //console.log('modulo testes ativado pagina sera recarregada em 10 segundos')
        window.location.reload()
    }
},30000)
