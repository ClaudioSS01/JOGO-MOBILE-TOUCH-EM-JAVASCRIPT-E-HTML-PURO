const ativado = "ativado";
const desativado = "desativado";
var estado_menu_de_moveis = desativado

function editar_moveis(){
    try {
        var menu_de_moveis = document.getElementById("menu_de_moveis");
        menu_de_moveis.removeAttribute("style");
        console.log('editar moveis ativado');

        if(estado_menu_de_moveis == desativado){
            menu_de_moveis.setAttribute("style",`position: absolute;
            top: 17vmin !important;
            right: 0vmin !important;
        
            left: auto !important;
            background: lightgreen;
            border-radius: 5%;
            width: 15vmin;
            height: 70vmin;
            border: 1px solid green; `);
            estado_menu_de_moveis = ativado;
        }else if(estado_menu_de_moveis == ativado){
            menu_de_moveis.setAttribute("style",`position: absolute;
            top: 17vmin !important;
            right: -50vmin !important;
        
            left: auto !important;
            background: lightgreen;
            border-radius: 5%;
            width: 15vmin;
            height: 70vmin;
            border: 1px solid green; `);
            estado_menu_de_moveis = desativado;
        }
     
      
    } catch (error) {
       console.log('erro ao editar moveis :::'+error) 
    }
}