/*
console.log('a_cada_tick.js carregado');
var tick = 0;
try {
    //antes de mais nada seta as ultimas posicoes de gabriel
    //setar_ultima_posicao_gabriel();

    carregar_estado_da_pagina_anterior();

    var ativar_a_cada_tick = true

    if (ativar_a_cada_tick == true) {
        setInterval(() => {
            try {
               // salvar_posicoes_gabriel();
               //salvar_estado_da_pagina();
               pega_cooredenada('gabriel');
               pega_cooredenada('shirley');
            } catch (error) {
                console.log(`a cada tick diz: ${error}`);
            }
        }, 5000)

        //para ajudar no desempenho do jogo vamos limpar o console a cada 1 minuto
        setInterval(() => {
           // console.clear();
           tick = tick + 1
           //console.log(`${tick}`)
           // window.location.reload()
        }, 10000)
    }
} catch (error) {
    console.log('a_cada_tick.js diz: ' + error)
}
*/