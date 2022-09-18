console.log(`ao_iniciar_execute.js carregado`);

var id_do_penultimo_elemento_clicado = "";


//se esta sendo clicado
document.addEventListener('click',(e)=>{
    var id_do_elemento_clicado_atual = e.target.id;
    
    console.log(`FOI CLICADO EM "${id_do_elemento_clicado_atual}"`)

    //trasendo o elemento para frente
    if(id_do_elemento_clicado_atual == 'guarda_roupa'){
      abrir_guarda_roupa();
    }

})


//se começou a ser arrastado
document.addEventListener("drag",(e)=>{
    var id_do_elemento_clicado_atual = e.target.id;
    
    console.log(`COMEÇOU A SEER ARRASTADO "${id_do_elemento_clicado_atual}"`)

  });
  

  //se foi solto
  document.addEventListener("dragend",(e)=>{
    var id_do_elemento_clicado_atual = e.target.id;
    
    console.log(`FOI SOLTO "${id_do_elemento_clicado_atual}"`)

  });




  //listar todos os eventos



  function listAllEventListeners() {
    const allElements = Array.prototype.slice.call(document.querySelectorAll('*'));
    allElements.push(document);
    allElements.push(window);
  
    const types = [];
  
    for (let ev in window) {
      if (/^on/.test(ev)) types[types.length] = ev;
    }
  
    //criando a lista para guardar os elementos
    let elements = [];
    for (let i = 0; i < allElements.length; i++) {
      const currentElement = allElements[i];
      for (let j = 0; j < types.length; j++) {
        if (typeof currentElement[types[j]] === 'function') {
console.log(`NO "${JSON.stringify(currentElement)}" \r\n tipo "${types[j].toString()}"\r\n funcao "${currentElement[types[j]].toString()}"\r\n `)
            //salvando os elementos na lista
          elements.push({
            "node": currentElement,
            "type": types[j],
            "func": currentElement[types[j]].toString(),
          });
        }
      }
    }
  
    return elements.sort(function(a,b) {
      return a.type.localeCompare(b.type);
    });
  }