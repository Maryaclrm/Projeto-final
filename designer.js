function desenharBandeirasCards(idContainer, arrayDeBandeiras){
    let containerDeBandeiras = document.getElementById(idContainer);

    containerDeBandeiras.innerHTML = '';

    for (const bandeira of arrayDeBandeiras) {
        containerDeBandeiras.innerHTML += `
        <div class="card">
        <img class="avatar" src="img/${bandeira.foto}">
        <div class="conteudo">
        <h3 class ="titulo"><a href='detalhes.html?id'>${bandeira.nome}</a></h3>
            <p class="descicao">${bandeira.biografia}</p>
    </div>
</div>

`;
    }
}

/*  </div>
         <div class="barra-botoes">
            <button class="btn-icone">
                <i class="fas fa-apple-alt"></i>
            </button>
            <button class="btn-icone">
                <i class="fas fa-moon"></i>
            </button>
            <button class="btn-icone">
                <i class="fas fa-sun"></i>
            </button>
*/