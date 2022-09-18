console.log(`shirley.js carregado`);

//var gabi_width = (largura_da_tela / 100) * 10;
var shi_width = 120;

function redimencionar_shirley() {
    try {
        document.querySelector("#shirley-img").setAttribute('width', `${shi_width}px`);


        //manter a ultima posição que ele foi usado
    } catch (error) {
        console.log(`erro ao recimencionar shirley ${error}`);
    }
}



function setar_ultima_posicao_shirley() {
    try {

//verificando ultima posicao salva do shirley
var ultima_posicao_salva_shirley_top = ler_local('shirley_top');
var ultima_posicao_salva_shirley_left = ler_local('shirley_left');

console.log(`ultima posicao salva do shirley top :: ${ultima_posicao_salva_shirley_top}`);
console.log(`ultima posicao salva do shirley left :: ${ultima_posicao_salva_shirley_left}`);

//setabdi a posicao
//document.querySelector("#shirley").setAttribute('data-x', ultima_posicao_salva_shirley_x)
//document.querySelector("#shirley").setAttribute('data-y', ultima_posicao_salva_shirley_y)
document.querySelector("#shirley-img").style.marinTop = `${ultima_posicao_salva_shirley_top}`;
document.querySelector("#shirley-img").style.marginLeft = `${ultima_posicao_salva_shirley_left}`;



    } catch (error) {
        console.log(`erro ao setar a ultima posicao salva do shirley :: ${error}`);
        //caso de erro ao recuperar os valores da ultima posicao de shirley vamos colocar os valores padrao
        document.querySelector("#shirley-img").style.maringTop = '60px';
        document.querySelector("#shirley-img").style.marginLeft = '250px';

    }
}

















function salvar_posicoes_shirley() {
    try {

        var shirley_left = document.querySelector("#shirley-img").getBoundingClientRect().left;
        var shirley_top = document.querySelector("#shirley-img").getBoundingClientRect().top;

        console.log(`shirley top : ${shirley_top}`);
        console.log(`shirley left : ${shirley_left}`);

        //salvar as posições para usar depois

        salvar_local('shirley_top', shirley_top);

        //necessario um pequeno delay antes de salvar o segundo valor para nao dar erro
        setTimeout(() => {
            salvar_local('shirley_left', shirley_left);
        }, 100)


    } catch (error) {
        console.log(` erro ao guardar as opsiçoes x e y do shirley para carregar depois: ${error}`);
    }
}