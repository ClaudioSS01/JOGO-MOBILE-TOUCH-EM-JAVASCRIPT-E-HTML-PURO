/*
var id = null;
function move_y(id_d0_elemento_que_vamos_mover, limite_y = 50,velocidade = 1) {
  var limite_y = limite_y;
  var velocidade = velocidade; //quanto menos mais rapido
  var elem = document.getElementById(id_d0_elemento_que_vamos_mover);   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, velocidade);
  function frame() {
    if (pos == limite_y) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px';  
    }
  }
}

function pega_cooredenada(id_do_elemento_que_queremos_as_coordenadas){
    try {
    // seleciona elemento
let el = document.getElementById(id_do_elemento_que_queremos_as_coordenadas);
// utiliza método
let elCoordenadas = el.getBoundingClientRect();
// verificar as propriedades com as coord
console.log(`id : "${id_do_elemento_que_queremos_as_coordenadas}"`);
console.log(elCoordenadas);
console.log(`${id_do_elemento_que_queremos_as_coordenadas} x :: ${elCoordenadas.x}`);
console.log(`${id_do_elemento_que_queremos_as_coordenadas} y :: ${elCoordenadas.y}`); 
console.log(`${id_do_elemento_que_queremos_as_coordenadas} top :: ${elCoordenadas.top}`);
console.log(`${id_do_elemento_que_queremos_as_coordenadas} left :: ${elCoordenadas.left}`);   
 
if(id_do_elemento_que_queremos_as_coordenadas == "gabriel"){
    if(elCoordenadas.top < 10){
        console.log('gravidade em gabriel ativada')
        move_y(id_do_elemento_que_queremos_as_coordenadas,-2,1);
    }
}


} catch (error) {
        console.log(`erro a pegar coordenadas do elemento "${id_do_elemento_que_queremos_as_coordenadas} ::: "${error}"`)
    }
}
*/