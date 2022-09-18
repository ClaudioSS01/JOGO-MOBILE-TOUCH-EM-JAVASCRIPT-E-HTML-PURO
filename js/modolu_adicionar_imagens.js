console.log('modulo adicionar imagens iniciado com sucesso');

function add_img(caminho_da_imagem,width_porcentagem = '15%',tipo_position = 'absolute', top_porcentagem = '10%', left_px = '150px',z_index_ = '-10'){
try {
    console.log(`\r\n\r\n\r\n\r\n ====================`);
    console.log(`caminho recebido : ${caminho_da_imagem}`);
    console.log(`width em porcentagem : ${width_porcentagem}`);
    console.log(`tipo do postion : ${tipo_position}`);
    console.log(`porcentagem top : ${top_porcentagem}`);
    console.log(`left pixel : ${left_px}`);
    console.log(`z index : ${z_index_}`);
    console.log(`====================`);
   // console.log(`${}`);
   // console.log(`${}`);
   // console.log(`${}`);
    const b_body = document.getElementById("body");
    const img = document.createElement('img');
    img.src = caminho_da_imagem;
    img.style.position = tipo_position;
    img.style.top = top_porcentagem;
    img.style.left = left_px;
    img.style.width = width_porcentagem;
    img.style.zIndex = z_index_;
    b_body.appendChild(img);
} catch (error) {
    console.log('erro ao colocar a imagem no game ::: '+error)
}

}




function add_img_arrastavel(titulo_da_imagem_arrastavel,caminho_da_imagem,width_px = '60px',position_x_px = '506',position_y_px = '333'){
   
   /*
   //modelo de imagem arrastavel
     <div id="abajur" 
      class="draggable" 
      data-x="506.25511169433594"
    data-y="-333.598934173584"
     style="transform: translate(506.255px, -333.599px);">
    <img id="abajur-img" src="./img/abajur.png" alt="" width="60px">
  </div>
   
   */
   
    try {
        if(position_x_px.includes('px')){
            position_x_px.replace('px','')
        }
        if(position_y_px.includes('px')){
            position_y_px.replace('px','')
        }
        //aqui dizemos que queremos colocar o elemento dentro do body que tem o id body
        const b_body = document.getElementById("body");
        console.log(`\r\n\r\n\r\n\r\n ====================`);
        console.log(`titulo da imagem arrastavel : ${titulo_da_imagem_arrastavel}`);
        console.log(`caminho recebido : ${caminho_da_imagem}`);
        console.log(`width em pixel: ${width_px}`);
        console.log(`tipo do postion x : ${position_x_px}`);
        console.log(`tipo do postion y : ${position_y_px}`);
        console.log(`====================`);
       // console.log(`${}`);
       // console.log(`${}`);
       // console.log(`${}`);

       //trabalhando na div que vamos colcocar a imagem
       const div_da_imagem_arrastavel = document.createElement('div');
       //aqui temos um id padroa usado em todas as imagens que vao ser adicionadas para consumir o style
       div_da_imagem_arrastavel.setAttribute('id',titulo_da_imagem_arrastavel)
       //essa class que torna tudo possivel
       div_da_imagem_arrastavel.setAttribute('class',"draggable")
       //aqui definimos a posicao x da imagem arrastavel na pagina
       div_da_imagem_arrastavel.setAttribute('data-x',position_x_px+".25511169433594")
       //aqui definimos a posicao y da imagem arrastavel na pagina
       div_da_imagem_arrastavel.setAttribute("data-y","-"+position_y_px+".598934173584")
       //aqui um style padrao de transformação
       div_da_imagem_arrastavel.setAttribute('style',"transform: translate("+position_x_px+".255px, -"+position_y_px+".599px);")
        

       //aqui trabalhamos com a imagem que primeirovai ser inserida dentro da div pra depois ser colocada na pagina
        const img = document.createElement('img');
        img.src = caminho_da_imagem;
        img.setAttribute('id',titulo_da_imagem_arrastavel);
        //img.style.top = top_porcentagem;
        //img.style.left = left_px;
        img.style.width = width_px;
        //img.style.zIndex = z_index_;

        //aqui colcoamos a imagem dentro da div
        div_da_imagem_arrastavel.appendChild(img);

        //aqui colocamos a div com a imagem dentro do body
        b_body.appendChild(div_da_imagem_arrastavel);
    } catch (error) {
        console.log('erro ao colocar a imagem no game ::: '+error)
    }
    
    }