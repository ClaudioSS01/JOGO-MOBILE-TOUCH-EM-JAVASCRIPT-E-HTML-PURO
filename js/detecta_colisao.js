/*
console.log('detecta_colisao.js carregado')
/* O código de arrastar para '.draggable' da demonstração acima
 * também se aplica a esta demonstração, portanto, não precisa ser repetida. 
try {
  
  // permite que draggables sejam soltos neste
  //abxio temos onde queremos a coli
  interact('.dropzone').dropzone({
    // só aceita elementos que correspondam a este seletor CSS
    //comente elemento com o seletor abaixo sao validos na leitura da capitura do drga drop
    accept: '#shirley'/*valor padroa = '#yes-drop' 
    // Requer uma sobreposição de elementos de 75% para que uma queda seja possível
    overlap: 0.75,
  
    // escuta eventos relacionados à queda:
  
    ondropactivate: function (event) {
  
      console.log('evento ondropactivate')
      console.log(event)
        // adiciona feedback ativo da zona de lançamento
        event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target
  
        // informa a possibilidade de queda
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
        // remove o estilo drop feedback
        console.log('fora de colisao')
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
        console.log('colisao detectada')
        event.relatedTarget.textContent = 'Dropped'
    },
    ondropdeactivate: function (event) {
        // remove o feedback ativo da zona de lançamento
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
    }
  })
  
  interact('.drag-drop')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],
        autoScroll: true,
        // dragMoveListener da demonstração de arrastar acima
        listeners: {
            move: dragMoveListener
        }
    })
  
  
  //aqui temos o html padrao do exemplo
  const html_do_exemplo = `
  
    ##div abaixo nao tem seu efeito lido no drag drop
    <div id="no-drop" class="drag-drop"> #no-drop </div>
  
    #div abaixo tem seu drag drop lido pelos eventos
  <div id="yes-drop" class="drag-drop"> #yes-drop </div>
  
  #zona de fora do elemento
  #ideal para quando queremos capiturar que esta ao lado ou proximo do alvo e nao dentro do elemento
  <div id="outer-dropzone" class="dropzone">
  
  #outer-dropzone ideal para quando queremo capiturar que o drag drop esta dentro do elemento selecionado
  <div id="inner-dropzone" class="dropzone">#inner-dropzone</div>
  </div>
    `;
  
  
  //aqui temos o css padrao do exemplo
  const css_padrao_do_exemplo = `
  #outer-dropzone {
    height: 140px;
  }
  
  #inner-dropzone {
    height: 80px;
  }
  
  .dropzone {
    background-color: #bfe4ff;
    border: dashed 4px transparent;
    border-radius: 4px;
    margin: 10px auto 30px;
    padding: 10px;
    width: 80%;
    transition: background-color 0.3s;
  }
  
  .drop-active {
    border-color: #aaa;
  }
  
  .drop-target {
    background-color: #29e;
    border-color: #fff;
    border-style: solid;
  }
  
  .drag-drop {
    display: inline-block;
    min-width: 40px;
    padding: 2em 0.5em;
    margin: 1rem 0 0 1rem;
  
    color: #fff;
    background-color: #29e;
    border: solid 2px #fff;
  
    touch-action: none;
    transform: translate(0px, 0px);
  
    transition: background-color 0.3s;
  }
  
  .drag-drop.can-drop {
    color: #000;
    background-color: #4e4;
  }
  
  `
  } catch (error) {
    console.log('detector de colisao diz::: '+error)
  }
*/