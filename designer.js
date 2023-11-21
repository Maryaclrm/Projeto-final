function desenharBandeirasCards(idContainer, arrayDeBandeiras){
    let containerDeBandeiras = document.getElementById(idContainer);

    containerDeBandeiras.innerHTML = '';

    for (const bandeira of arrayDeBandeiras) {
        containerDeBandeiras.innerHTML += `
            <div class="card">
                <img class="avatar" src="img/${bandeira.foto}">
                <div class="conteudo">
                    <h3 class="titulo"><a href='detalhes.html?id=${bandeira.id}'>${bandeira.nome}</a></h3>
                    <p class="descricao">${bandeira.biografia}</p>
                </div>
                <div class="barra-botoes">
                    <button class="btn-icone">
                        <i class="fa fa-check-circle-o"></i>
                    </button>
                </div>
            </div>
        `;
    }
}


function desenharCardDetalhe(idCard, arrayDeBandeiras, idserie){
    const bandeira = arrayDeBandeiras.find((bandeira)=> bandeira.id==idserie);
    let cardDetalhe = document.getElementById(idCard);
    cardDetalhe.innerHTML = `
        <img class="avatar" src="img/${bandeira.foto2}">
        <div class="conteudo">
            <h3 class="titulo">${bandeira.nome}</h3>
            <p class="descricao">${bandeira.biografia}</p>
            <p class="mais-coisas">${bandeira.coisas}</p>

        </div>
        <div class="barra-botoes">
            <button class="btn-icone">
                <i class="fa fa-anchor"></i>
            </button>
            <button class="btn-icone">
                <i class="fa fa-car"></i>
            </button>
            <button class="btn-icone">
            <i class="fa fa-plane"></i>
        </button>
            <button class="btn-icone">
                <i class="fa fa-map-o"></i>
            </button>
           
            
        </div>
    `;


}