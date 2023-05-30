const cards = document.querySelector(".cards")




function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadastrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `<img src="imagens/${elemento.foto}">
        <div class="cardbtn">
        <a onclick="Alterar(${indice})">Alterar<a/>
         / <a onclick="Excluir(${indice})">Excluir<a/>
        </div>
        `
        cards.appendChild(divcard);
        
    });
}
carregarCatalogo()


function Excluir (indice){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    if(dados.lenght == 1)
    {localStorage.clear("catalogo");}
    else{
        dados.splice(indice,1);
        localStorage.setItem("catalogo", JSON.stringify(dados));
    }
    window.location.reload();
}

function Alterar(indice){
    var url ="cadastrodotitulo.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}


