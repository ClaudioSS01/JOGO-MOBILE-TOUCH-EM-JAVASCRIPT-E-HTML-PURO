console.log(`iniciar_arrastavel.js carregado`);

// elementos de destino com a classe "arrastável"
interact('.draggable')
  .draggable({
    // habilitar arremesso inercial
    inertia: false,
    // manter o elemento dentro da área de seu pai
    modifiers: [
      interact.modifiers.restrictSize({
        min: { width: 10, height: 10 },
        max: { width: 5000, height: 5000 }
      })
    ],
    // ativar rolagem automática
    autoScroll: true,

    listeners: {
      // chame esta função em cada evento dragmove
      move: dragMoveListener,

      // chame esta função em cada evento dragend
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  //console.log(`target: "${target}"`)
  // mantenha a posição arrastada nos atributos data-x/data-y
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // traduzir o elemento
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // atualize os atributos de posição
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// esta função é usada mais tarde nas demonstrações de redimensionamento e gestos
window.dragMoveListener = dragMoveListener

