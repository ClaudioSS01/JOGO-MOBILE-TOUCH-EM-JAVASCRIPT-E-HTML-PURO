console.log(`status.js carregado`);
var modo_desenvolvedor = true

function status(texto){
    try {
        if(modo_desenvolvedor == true){
            document.getElementById("status").innerHTML = "<br>"+((texto).toString()).toUpperCase();
            console.log('\r\n\r\n'+texto);
        }
    } catch (error) {
        console.log(`erro ao enviar o status = ${error}`)
    }
}