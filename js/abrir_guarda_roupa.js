console.log('abrir_guardaroupa.js carregado')
function abrir_guarda_roupa(){
    try {
        console.log('abrindo o guarda roupa');
        //trocando a imagem para o guarda roupa aberto
        document.getElementById('guarda_roupa').setAttribute('src','./img/moveis/guardaroupa_aberto.png');
        setTimeout(()=>{
            adicionar_roupas()
        },3000)
    } catch (error) {
        console.log('erro ao abrir o guarda roupa ::: '+error)
    }
}




function adicionar_roupas(){
    try {
        roupa1 = ` <div class="draggable" id="roupa1" class="roupa1">
        <img src="./img/personagens/vestido shirley.png" id="vestido_shirley">
      </div>`;
      document.getElementById('roupas').innerHTML = roupa1
    } catch (error) {
        console.log(`erro ao adicionar roupas '${error}'`)
    }
}