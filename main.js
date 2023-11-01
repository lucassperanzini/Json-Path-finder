let locais = []

const endpointDaAPI = 'http://localhost:3000/locais'

BuscaLocais()

const sectionPrincipal = document.querySelector("#secaoLocais")

async function BuscaLocais(){

    const res = await fetch(endpointDaAPI)

    locais = await res.json()

    ExibirLocaisTela()

}


function ExibirLocaisTela(){

    locais.forEach(local => {
        
        sectionPrincipal.innerHTML +=`


        
        <div class="local">
            <h1>${local.nome}</h1>
            <img src="${local.imagem}" alt="">
            <h2>Preço :${local.preco} </h2>
            <p>${local.descricao}</p>
    </div>

   
        
        
        `


        
    });
}



    
